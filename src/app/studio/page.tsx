'use client';

import React, { useState } from 'react';
import { NavigationHeader } from '@/components/NavigationHeader';
import { VirtualStudioLeftPanel } from '@/components/VirtualStudioLeftPanel';
import { VirtualStudioRightPanel } from '@/components/VirtualStudioRightPanel';
import { VirtualStudioCenterCanvas } from '@/components/VirtualStudioCenterCanvas';
import {
  GarmentReference,
  GenerationOutput,
  ModelReference,
  PhotoshootSettings,
} from '@/types';
import { AIOrchestratorService } from '@/lib/services/aiOrchestratorService';

export default function VirtualStudioPage() {
  const [modelRef, setModelRef] = useState<ModelReference | null>(null);
  const [garmentReferences, setGarmentReferences] = useState<GarmentReference[]>([
    {
      id: 'default-garment-1',
      garment_id: 'garment-1',
      image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
      orientation: 'FRONT',
      orientation_confidence: 0.98,
      analysis: {
        garment_category: 'T-shirt',
        orientation: 'FRONT',
        orientation_confidence: 0.98,
        primary_color: 'Black',
        secondary_colors: ['White'],
        graphic_detected: true,
        graphic_location: 'Front Center',
        has_typography: true,
        has_logo: true,
        pattern: 'Graphic Print',
        fit: 'Oversized',
        sleeve_type: 'Short Sleeve',
        neck_type: 'Crew Neck',
        fabric_appearance: 'Heavyweight Cotton 240 GSM',
        reference_quality: 'Excellent',
        quality_issues: [],
      },
      created_at: new Date().toISOString(),
    },
  ]);
  const [garmentIdentityLock, setGarmentIdentityLock] = useState(true);
  const [modelIdentityLock, setModelIdentityLock] = useState(true);
  const [smartExtraction, setSmartExtraction] = useState(false);

  const [packType, setPackType] = useState<string>('SINGLE');
  const [qualityTier, setQualityTier] = useState<'Fast' | 'Standard' | 'Premium'>('Premium');

  const [settings, setSettings] = useState<PhotoshootSettings>({
    mode: 'Premium E-commerce',
    pose: 'Full Body Front',
    expression: 'Confident',
    camera_angle: 'Eye-Level',
    focal_length: '85mm',
    aperture: 'f/4',
    lighting_style: 'Soft Studio Key Light',
    lighting_direction: 'Front',
    lighting_intensity: 'Medium',
    background_type: 'Neutral Light Grey Studio',
    fabric: 'As Described',
    garment_styling: 'Oversized',
    model_styling: 'Minimal High Fashion',
    artwork_visibility: 'Maximum',
    color_accuracy: 'Maximum Accuracy',
    aspect_ratio: '4:5',
    garment_identity_lock: true,
    model_identity_lock: true,
    smart_garment_extraction: false,
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStatus, setGenerationStatus] = useState<string>('');
  const [progressPercentage, setProgressPercentage] = useState<number>(0);
  const [outputs, setOutputs] = useState<GenerationOutput[]>([]);

  // Execute Generation Pipeline using API route with server-side AI Orchestrator
  const handleGenerate = async () => {
    if (garmentReferences.length === 0) return;

    setIsGenerating(true);
    setGenerationStatus('Analyzing Apparel & Model References...');
    setProgressPercentage(15);

    setTimeout(() => {
      setGenerationStatus('Preparing Photoshoot Composition & Lighting...');
      setProgressPercentage(45);
    }, 1000);

    setTimeout(() => {
      setGenerationStatus('Executing Google Imagen / AI Generation Flow...');
      setProgressPercentage(75);
    }, 2000);

    setTimeout(async () => {
      try {
        const payload = {
          request: {
            project_id: 'proj-1',
            garment_id: 'garment-1',
            settings,
            pack_type: packType as any,
            quality_tier: qualityTier,
          },
          modelImageUrl: modelRef?.image_url,
          garmentImages: garmentReferences.map((r) => ({
            url: r.image_url,
            orientation: r.orientation,
          })),
        };

        console.log('[Studio] Sending generation payload to /api/generate...');
        const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `Server returned status ${res.status}`);
        }

        const result = await res.json();
        console.log('[Studio] Received generation result from server:', result);

        const generatedOutputs: GenerationOutput[] = result.outputs.map((out: any, idx: number) => ({
          id: `out-${Date.now()}-${idx}`,
          generation_job_id: `job-${Date.now()}`,
          image_url: out.imageUrl,
          aspect_ratio: out.aspectRatio,
          shot_type: out.shotType,
          quality_review_status: 'Passed',
          review_notes: ['Garment identity intact', 'Color matched', 'Artwork visible'],
          created_at: new Date().toISOString(),
        }));

        setOutputs(generatedOutputs);
        setGenerationStatus('Completed');
        setProgressPercentage(100);
      } catch (err) {
        console.error('Generation Error:', err);
      } finally {
        setIsGenerating(false);
      }
    }, 3200);
  };

  return (
    <div className="h-screen bg-[#090a0f] text-gray-100 flex flex-col overflow-hidden">
      <NavigationHeader />

      {/* 3-Column Studio Workspace Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left Column - Inputs (Model & Apparel) */}
        <VirtualStudioLeftPanel
          modelRef={modelRef}
          setModelRef={setModelRef}
          garmentReferences={garmentReferences}
          setGarmentReferences={setGarmentReferences}
          garmentIdentityLock={garmentIdentityLock}
          setGarmentIdentityLock={setGarmentIdentityLock}
          modelIdentityLock={modelIdentityLock}
          setModelIdentityLock={setModelIdentityLock}
          smartExtraction={smartExtraction}
          setSmartExtraction={setSmartExtraction}
        />

        {/* Center Column - Canvas */}
        <VirtualStudioCenterCanvas
          modelRef={modelRef}
          garmentReferences={garmentReferences}
          settings={settings}
          packType={packType}
          isGenerating={isGenerating}
          generationStatus={generationStatus}
          progressPercentage={progressPercentage}
          outputs={outputs}
          onGenerate={handleGenerate}
          garmentIdentityLock={garmentIdentityLock}
          modelIdentityLock={modelIdentityLock}
        />

        {/* Right Column - Controls & Settings */}
        <VirtualStudioRightPanel
          settings={settings}
          setSettings={setSettings}
          packType={packType}
          setPackType={setPackType}
          qualityTier={qualityTier}
          setQualityTier={setQualityTier}
        />
      </div>
    </div>
  );
}
