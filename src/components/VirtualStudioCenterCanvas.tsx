'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Camera,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Download,
  RefreshCw,
  Eye,
  Shirt,
  Wand2,
  Clock,
  ExternalLink,
  ChevronRight,
  Maximize2,
  ShieldCheck,
  Check,
} from 'lucide-react';
import {
  GarmentReference,
  GenerationOutput,
  ModelReference,
  PhotoshootSettings,
} from '@/types';
import Link from 'next/link';

interface VirtualStudioCenterCanvasProps {
  modelRef: ModelReference | null;
  garmentReferences: GarmentReference[];
  settings: PhotoshootSettings;
  packType: string;
  isGenerating: boolean;
  generationStatus: string;
  progressPercentage: number;
  outputs: GenerationOutput[];
  onGenerate: () => void;
  garmentIdentityLock: boolean;
  modelIdentityLock: boolean;
}

export function VirtualStudioCenterCanvas({
  modelRef,
  garmentReferences,
  settings,
  packType,
  isGenerating,
  generationStatus,
  progressPercentage,
  outputs,
  onGenerate,
  garmentIdentityLock,
  modelIdentityLock,
}: VirtualStudioCenterCanvasProps) {
  const [selectedOutput, setSelectedOutput] = useState<GenerationOutput | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const primaryGarment = garmentReferences[0];
  const hasGarment = garmentReferences.length > 0;

  return (
    <main className="flex-1 bg-[#090a0f] flex flex-col h-full overflow-y-auto p-4 lg:p-6 space-y-6">
      {/* Top Banner / Ready Status Bar */}
      <div className="bg-panel border border-panel-border rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h2 className="text-base font-bold text-white">Generation Pipeline</h2>
            {hasGarment ? (
              <span className="bg-green-950 text-green-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-green-800">
                Ready to Generate
              </span>
            ) : (
              <span className="bg-amber-950 text-amber-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-amber-800">
                Upload Apparel First
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            Structured generation request locked with AI Apparel Intelligence
          </p>
        </div>

        <button
          onClick={onGenerate}
          disabled={!hasGarment || isGenerating}
          className={`px-6 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xl transition-all ${
            hasGarment && !isGenerating
              ? 'bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white shadow-purple-950/50 cursor-pointer'
              : 'bg-panel-light text-gray-500 border border-panel-border cursor-not-allowed'
          }`}
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-purple-300" />
              <span>Generating Photoshoot ({progressPercentage}%)</span>
            </>
          ) : (
            <>
              <Camera className="w-4 h-4" />
              <span>Generate Photoshoot</span>
            </>
          )}
        </button>
      </div>

      {/* Progress Status Pipeline Bar */}
      {isGenerating && (
        <div className="bg-panel border border-panel-border p-4 rounded-xl space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-purple-300 flex items-center gap-2">
              <Clock className="w-4 h-4 animate-pulse" />
              Pipeline Phase: {generationStatus}
            </span>
            <span className="font-mono text-gray-400">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-[#090a0f] h-2 rounded-full overflow-hidden border border-panel-border">
            <div
              className="bg-gradient-to-r from-brand-600 to-purple-500 h-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Pre-Check Smart Reference Summary */}
      {!isGenerating && outputs.length === 0 && (
        <div className="bg-panel border border-panel-border rounded-2xl p-6 text-xs space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            Smart Generation Pre-Check Summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Model Summary */}
            <div className="p-3 bg-[#090a0f] border border-panel-border rounded-xl space-y-1.5">
              <span className="font-bold text-gray-300 block text-[11px]">MODEL IDENTITY</span>
              {modelRef ? (
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{modelRef.name} (Identity Lock ON)</span>
                </div>
              ) : (
                <div className="text-gray-400">Default AI Model Styling Active</div>
              )}
            </div>

            {/* Garment Summary */}
            <div className="p-3 bg-[#090a0f] border border-panel-border rounded-xl space-y-1.5">
              <span className="font-bold text-gray-300 block text-[11px]">APPAREL INTELLIGENCE</span>
              {hasGarment ? (
                <div className="space-y-1 text-gray-300">
                  <div className="flex items-center gap-2 text-green-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {primaryGarment.analysis.garment_category} ({primaryGarment.analysis.fit}) - {primaryGarment.analysis.primary_color}
                    </span>
                  </div>
                  <div className="text-[11px] text-purple-300 pl-6">
                    Graphic: {primaryGarment.analysis.graphic_location} • Orientation Views:{' '}
                    {garmentReferences.map((r) => r.orientation).join(', ')}
                  </div>
                </div>
              ) : (
                <span className="text-amber-400">No apparel reference uploaded</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-panel-border text-gray-400 text-[11px]">
            <div><strong className="text-white">Style:</strong> {settings.mode}</div>
            <div><strong className="text-white">Pose:</strong> {settings.pose}</div>
            <div><strong className="text-white">Pack:</strong> {packType}</div>
            <div><strong className="text-white">Quality:</strong> Maximum Accuracy</div>
          </div>
        </div>
      )}

      {/* Generated Outputs Canvas Grid */}
      {outputs.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Camera className="w-4 h-4 text-purple-400" />
              Generated Photoshoot Assets ({outputs.length})
            </h3>
            <span className="text-xs text-green-400 font-semibold flex items-center gap-1 bg-green-950/60 px-2.5 py-1 rounded border border-green-800">
              <Check className="w-3.5 h-3.5" /> Quality Review Passed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outputs.map((out, idx) => (
              <div
                key={out.id}
                className="bg-panel border border-panel-border rounded-xl overflow-hidden group hover:border-purple-500/50 transition-all shadow-lg flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] bg-black overflow-hidden">
                  <img
                    src={out.image_url}
                    alt={out.shot_type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#090a0f]/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-panel-border">
                    {out.shot_type}
                  </div>
                  <div className="absolute top-2 right-2 bg-green-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-green-400 border border-green-800">
                    Passed Review
                  </div>
                </div>

                <div className="p-3 space-y-2 border-t border-panel-border bg-panel">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{out.aspect_ratio} Studio Shot</span>
                    <button
                      onClick={() => {
                        setSelectedOutput(out);
                        setShowComparison(true);
                      }}
                      className="text-[11px] text-purple-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Eye className="w-3 h-3" /> Before / After
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={out.image_url}
                      download={`apparel_asset_${idx + 1}.jpg`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors shadow"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </a>
                    <Link
                      href={`/mockup?image=${encodeURIComponent(out.image_url)}`}
                      className="py-2 bg-panel-light hover:bg-purple-950/60 border border-panel-border text-purple-300 font-bold text-xs rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Shirt className="w-3.5 h-3.5 text-purple-400" /> Send to Mockup
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Before / After Inspection Modal */}
      {showComparison && selectedOutput && primaryGarment && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-panel border border-panel-border rounded-2xl max-w-4xl w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-panel-border pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-400" />
                Visual Inspection: Reference vs Generated Output
              </h3>
              <button
                onClick={() => setShowComparison(false)}
                className="text-gray-400 hover:text-white text-sm font-bold"
              >
                ✕ Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase block mb-2">
                  1. Source Garment Reference
                </span>
                <img
                  src={primaryGarment.image_url}
                  alt="Source"
                  className="w-full h-80 object-cover rounded-xl border border-panel-border"
                />
                <div className="mt-2 text-xs text-gray-300">
                  <p><strong>Orientation:</strong> {primaryGarment.orientation}</p>
                  <p><strong>Garment:</strong> {primaryGarment.analysis.garment_category}</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-green-400 uppercase block mb-2">
                  2. Generated Studio Output
                </span>
                <img
                  src={selectedOutput.image_url}
                  alt="Output"
                  className="w-full h-80 object-cover rounded-xl border border-panel-border"
                />
                <div className="mt-2 text-xs text-gray-300">
                  <p><strong>Shot:</strong> {selectedOutput.shot_type}</p>
                  <p><strong>Status:</strong> {selectedOutput.quality_review_status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
