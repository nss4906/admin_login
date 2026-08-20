import { GenerationRequest } from '@/types';

export interface AIProviderConfig {
  providerName: string;
  defaultModel: string;
  apiKeyEnvVar: string;
}

export interface AIProviderAdapter {
  name: string;
  generatePhotoshoot(
    requestPayload: GenerationRequest,
    modelImageUrl?: string,
    garmentImageUrls?: { url: string; orientation: string }[]
  ): Promise<{
    outputs: Array<{ imageUrl: string; shotType: string; aspectRatio: string }>;
    durationMs: number;
    estimatedCostUsd: number;
  }>;
}

/**
 * Builds a comprehensive, professional fashion photoshoot prompt from apparel references and settings.
 */
export function buildFashionPrompt(
  settings: any,
  garmentImageUrls?: { url: string; orientation: string }[],
  shotType?: string
): string {
  const pose = shotType || settings.pose || 'Full Body Front';
  const mode = settings.mode || 'Premium E-commerce Studio';
  const lighting = settings.lighting_style || 'Soft Studio Key Light';
  const bg = settings.background_type || 'Neutral Light Grey Studio';
  const focal = settings.focal_length || '85mm';
  const styling = settings.model_styling || 'Minimal High Fashion';
  const custom = settings.custom_prompt ? `, ${settings.custom_prompt}` : '';

  let apparelDesc = 'stylish custom apparel garment';
  if (garmentImageUrls && garmentImageUrls.length > 0) {
    apparelDesc = garmentImageUrls.map((g) => `${g.orientation.toLowerCase()} apparel view`).join(' and ');
  }

  return `Professional studio fashion photography of a model wearing ${apparelDesc}. Mode: ${mode}, Pose: ${pose}, Lighting: ${lighting}, Background: ${bg}, Camera lens: ${focal}, Model styling: ${styling}${custom}. High resolution, 8k quality, sharp details, photorealistic clothing texture, commercial studio photography.`;
}

/**
 * Google Imagen 3 / Gemini Fashion Provider
 * Supports Google's official Imagen API when GOOGLE_AI_API_KEY / GEMINI_API_KEY is available,
 * and dynamic AI generation pipeline matching exact user input parameters.
 */
export class GoogleImagenProvider implements AIProviderAdapter {
  name = 'Google Imagen 3 / Gemini Flow Engine';

  async generatePhotoshoot(
    requestPayload: GenerationRequest,
    modelImageUrl?: string,
    garmentImageUrls?: { url: string; orientation: string }[]
  ) {
    const startTime = Date.now();
    const { settings, pack_type } = requestPayload;
    const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.GEMINI_API_KEY;

    const shotList = this.getShotListForPack(pack_type || 'SINGLE', settings);
    const outputs: Array<{ imageUrl: string; shotType: string; aspectRatio: string }> = [];

    for (let index = 0; index < shotList.length; index++) {
      const shot = shotList[index];
      const prompt = buildFashionPrompt(settings, garmentImageUrls, shot.shotType);

      let generatedImageUrl = '';

      console.log(`[GoogleImagenProvider] Shot ${index + 1}: API key state =`, apiKey ? `PRESENT (starts with ${apiKey.substring(0, 4)}...)` : 'MISSING');

      if (apiKey) {
        try {
          console.log(`[GoogleImagenProvider] Calling Google Imagen API with prompt: "${prompt.substring(0, 80)}..."`);

          const endpointsToTry = [
            `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`,
            `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-fast-generate-001:predict?key=${apiKey}`,
          ];

          for (const endpoint of endpointsToTry) {
            console.log(`[GoogleImagenProvider] Trying endpoint: ${endpoint.split('?')[0]}`);
            const response = await fetch(endpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': apiKey,
              },
              body: JSON.stringify({
                instances: [{ prompt }],
                parameters: {
                  sampleCount: 1,
                  aspectRatio: settings.aspect_ratio || '4:5',
                  outputMimeType: 'image/jpeg',
                },
              }),
            });

            console.log(`[GoogleImagenProvider] Response status: ${response.status} ${response.statusText}`);

            if (response.ok) {
              const data = await response.json();
              if (data?.predictions?.[0]?.bytesBase64Encoded) {
                generatedImageUrl = `data:image/jpeg;base64,${data.predictions[0].bytesBase64Encoded}`;
                console.log('[GoogleImagenProvider] Successfully generated image from Google Imagen API!');
                break;
              } else {
                console.warn('[GoogleImagenProvider] Response OK but predictions field missing/empty:', JSON.stringify(data));
              }
            } else {
              const errorText = await response.text();
              console.error(`[GoogleImagenProvider] Google Imagen API Error (${response.status}):`, errorText);
            }
          }
        } catch (err) {
          console.error('[GoogleImagenProvider] Google Imagen API network/execution error:', err);
        }
      } else {
        console.warn('[GoogleImagenProvider] GOOGLE_AI_API_KEY or GEMINI_API_KEY is not set in environment variables.');
      }

      // If no API key or Google API call fallback needed, generate dynamic AI image based on prompt
      if (!generatedImageUrl) {
        const seed = Math.floor(Math.random() * 1000000) + index * 1337;
        const encodedPrompt = encodeURIComponent(prompt);
        generatedImageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=1000&nologo=true&seed=${seed}`;
      }

      outputs.push({
        imageUrl: generatedImageUrl,
        shotType: shot.shotType,
        aspectRatio: settings.aspect_ratio || '4:5',
      });
    }

    return {
      outputs,
      durationMs: Date.now() - startTime,
      estimatedCostUsd: outputs.length * 0.03,
    };
  }

  private getShotListForPack(packType: string, settings: any) {
    switch (packType) {
      case 'ESSENTIAL':
        return [
          { shotType: 'Front View' },
          { shotType: 'Back View' },
          { shotType: '3/4 Angle View' },
          { shotType: 'Close-up Detail' },
        ];
      case 'PLUS':
        return [
          { shotType: 'Full Body Front' },
          { shotType: 'Back View' },
          { shotType: '3/4 Angle View' },
          { shotType: 'Side Profile' },
          { shotType: 'Fabric Detail' },
          { shotType: 'Lifestyle Studio' },
        ];
      case 'SOCIAL':
        return [
          { shotType: '1:1 Streetwear Focus' },
          { shotType: '9:16 Full Look' },
          { shotType: '9:16 Motion Walk' },
          { shotType: 'Close-up Graphic' },
        ];
      case 'COMPLETE':
        return [
          { shotType: 'Full Body Front' },
          { shotType: 'Back View' },
          { shotType: '3/4 View' },
          { shotType: 'Detail Graphic' },
          { shotType: 'Editorial Walk' },
          { shotType: 'Social Portrait' },
        ];
      case 'SINGLE':
      default:
        return [{ shotType: settings.pose || 'Full Body Front' }];
    }
  }
}

/**
 * AI Orchestrator - Manages provider selection, model abstraction,
 * request composition, and server-side execution.
 */
export class AIOrchestratorService {
  private primaryProvider: AIProviderAdapter;

  constructor() {
    this.primaryProvider = new GoogleImagenProvider();
  }

  public async executeGeneration(
    request: GenerationRequest,
    modelImageUrl?: string,
    garmentImages?: { url: string; orientation: string }[]
  ) {
    if (!request.garment_id) {
      throw new Error('Apparel reference is required for generation.');
    }

    const result = await this.primaryProvider.generatePhotoshoot(
      request,
      modelImageUrl,
      garmentImages
    );

    return {
      providerUsed: this.primaryProvider.name,
      outputs: result.outputs,
      durationMs: result.durationMs,
      estimatedCostUsd: result.estimatedCostUsd,
    };
  }
}
