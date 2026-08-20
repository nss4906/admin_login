import { NextResponse } from 'next/server';
import { AIOrchestratorService } from '@/lib/services/aiOrchestratorService';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { request, modelImageUrl, garmentImages } = body;

    console.log('[/api/generate] Request received');
    console.log('[/api/generate] GOOGLE_AI_API_KEY:', process.env.GOOGLE_AI_API_KEY ? 'FOUND (length: ' + process.env.GOOGLE_AI_API_KEY.length + ')' : 'NOT FOUND');
    console.log('[/api/generate] GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'FOUND (length: ' + process.env.GEMINI_API_KEY.length + ')' : 'NOT FOUND');

    const orchestrator = new AIOrchestratorService();
    const result = await orchestrator.executeGeneration(
      request,
      modelImageUrl,
      garmentImages
    );

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error in /api/generate:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to generate photoshoot' },
      { status: 500 }
    );
  }
}
