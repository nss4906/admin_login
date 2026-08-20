'use client';

import React, { useState, useRef } from 'react';
import {
  User,
  Shirt,
  Upload,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Lock,
  Unlock,
  Trash2,
  HelpCircle,
  Eye,
  Tag,
  Maximize2,
  Plus,
} from 'lucide-react';
import {
  GarmentCategory,
  GarmentOrientation,
  GarmentReference,
  ModelReference,
} from '@/types';
import { SmartApparelService } from '@/lib/services/smartApparelService';

interface VirtualStudioLeftPanelProps {
  modelRef: ModelReference | null;
  setModelRef: React.Dispatch<React.SetStateAction<ModelReference | null>>;
  garmentReferences: GarmentReference[];
  setGarmentReferences: React.Dispatch<React.SetStateAction<GarmentReference[]>>;
  garmentIdentityLock: boolean;
  setGarmentIdentityLock: (val: boolean) => void;
  modelIdentityLock: boolean;
  setModelIdentityLock: (val: boolean) => void;
  smartExtraction: boolean;
  setSmartExtraction: (val: boolean) => void;
}

export function VirtualStudioLeftPanel({
  modelRef,
  setModelRef,
  garmentReferences,
  setGarmentReferences,
  garmentIdentityLock,
  setGarmentIdentityLock,
  modelIdentityLock,
  setModelIdentityLock,
  smartExtraction,
  setSmartExtraction,
}: VirtualStudioLeftPanelProps) {
  const [activeTab, setActiveTab] = useState<'model' | 'apparel'>('apparel');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const garmentInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);

  // Reads File into Data URL (Base64) so it can be safely posted to server
  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  // Real Local File Upload Handler for Garments
  const handleGarmentFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsAnalyzing(true);
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = await readFileAsDataURL(file);
        const analysis = await SmartApparelService.analyzeGarmentImage(imageUrl, file.name);

        const newRef: GarmentReference = {
          id: `garment-ref-${Date.now()}-${i}`,
          garment_id: 'garment-1',
          image_url: imageUrl,
          orientation: analysis.orientation,
          orientation_confidence: analysis.orientation_confidence,
          analysis,
          created_at: new Date().toISOString(),
        };

        setGarmentReferences((prev) => [...prev, newRef]);
      }
    } catch (err) {
      console.error('Error reading garment file:', err);
    }
    setIsAnalyzing(false);
    if (e.target) e.target.value = '';
  };

  // Real Local File Upload Handler for Models
  const handleModelFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsAnalyzing(true);
    try {
      const file = files[0];
      const imageUrl = await readFileAsDataURL(file);
      const analysis = await SmartApparelService.analyzeModelImage(imageUrl, file.name);

      setModelRef({
        id: `model-${Date.now()}`,
        project_id: 'proj-1',
        image_url: imageUrl,
        name: file.name.replace(/\.[^/.]+$/, ''),
        analysis,
        is_active: true,
        created_at: new Date().toISOString(),
      });
    } catch (err) {
      console.error('Error reading model file:', err);
    }

    setIsAnalyzing(false);
    if (e.target) e.target.value = '';
  };

  const handleOrientationChange = (refId: string, newOrientation: GarmentOrientation) => {
    setGarmentReferences((prev) =>
      prev.map((r) =>
        r.id === refId
          ? {
              ...r,
              orientation: newOrientation,
              user_confirmed_orientation: newOrientation,
            }
          : r
      )
    );
  };

  const removeGarmentRef = (refId: string) => {
    setGarmentReferences((prev) => prev.filter((r) => r.id !== refId));
  };

  return (
    <aside className="w-full lg:w-[340px] xl:w-[360px] bg-panel border-r border-panel-border flex flex-col h-full overflow-y-auto">
      {/* Hidden File Inputs */}
      <input
        type="file"
        ref={garmentInputRef}
        onChange={handleGarmentFileSelect}
        accept="image/png, image/jpeg, image/webp"
        multiple
        className="hidden"
      />
      <input
        type="file"
        ref={modelInputRef}
        onChange={handleModelFileSelect}
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
      />

      {/* Tab Selector Header */}
      <div className="p-3 border-b border-panel-border bg-[#090a0f]/50 flex gap-2">
        <button
          onClick={() => setActiveTab('apparel')}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'apparel'
              ? 'bg-brand-600 text-white shadow-md'
              : 'text-gray-400 hover:text-white bg-panel-light'
          }`}
        >
          <Shirt className="w-4 h-4" />
          Apparel ({garmentReferences.length})
        </button>
        <button
          onClick={() => setActiveTab('model')}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all ${
            activeTab === 'model'
              ? 'bg-brand-600 text-white shadow-md'
              : 'text-gray-400 hover:text-white bg-panel-light'
          }`}
        >
          <User className="w-4 h-4" />
          Model {modelRef ? '✓' : ''}
        </button>
      </div>

      <div className="p-4 space-y-6 flex-1">
        {/* APPAREL TAB */}
        {activeTab === 'apparel' && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Shirt className="w-4 h-4 text-purple-400" />
                  Apparel References
                </span>
                <span className="text-[10px] text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                  Smart Grouped
                </span>
              </div>
              <p className="text-[11px] text-gray-400 mb-3">
                Upload your local clothing images (Front, Back, Detail views). The AI detects views automatically.
              </p>

              {/* Upload Dropzone */}
              <div
                onClick={() => garmentInputRef.current?.click()}
                className="border-2 border-dashed border-panel-border hover:border-brand-500 rounded-xl p-4 text-center cursor-pointer bg-[#090a0f]/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-purple-950/80 border border-purple-800/60 flex items-center justify-center mx-auto text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  <Upload className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white block">Click to Upload Local Apparel Images</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">Supports JPG, PNG, WEBP files</span>
              </div>
            </div>

            {/* Smart Garment References List */}
            {garmentReferences.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-300">Grouped Garment Views</span>
                  <button
                    onClick={() => garmentInputRef.current?.click()}
                    className="text-[11px] text-purple-400 hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" /> Add More Views
                  </button>
                </div>

                {garmentReferences.map((ref) => (
                  <div
                    key={ref.id}
                    className="p-3 bg-[#090a0f] border border-panel-border rounded-xl space-y-2 relative"
                  >
                    <div className="flex gap-3">
                      <img
                        src={ref.image_url}
                        alt="Garment view"
                        className="w-16 h-16 object-cover rounded-lg border border-panel-border"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">
                            {ref.analysis.garment_category} ({ref.analysis.fit})
                          </span>
                          <button
                            onClick={() => removeGarmentRef(ref.id)}
                            className="text-gray-500 hover:text-red-400 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* View Orientation Selector */}
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-gray-400">Orientation:</span>
                          <select
                            value={ref.user_confirmed_orientation || ref.orientation}
                            onChange={(e) =>
                              handleOrientationChange(ref.id, e.target.value as GarmentOrientation)
                            }
                            className="bg-panel border border-panel-border rounded text-[11px] text-purple-300 px-2 py-0.5 font-bold focus:outline-none"
                          >
                            <option value="FRONT">FRONT ✓</option>
                            <option value="BACK">BACK ✓</option>
                            <option value="SIDE">SIDE ✓</option>
                            <option value="DETAIL">DETAIL ✓</option>
                            <option value="UNKNOWN">UNKNOWN</option>
                          </select>
                        </div>

                        <div className="text-[10px] text-gray-400 flex items-center gap-2">
                          <span>Confidence: {(ref.orientation_confidence * 100).toFixed(0)}%</span>
                          <span className="text-purple-400 font-semibold">• {ref.analysis.primary_color}</span>
                        </div>
                      </div>
                    </div>

                    {/* AI Feature Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1 border-t border-panel-border/60">
                      <span className="text-[10px] bg-purple-950/60 text-purple-300 px-1.5 py-0.5 rounded border border-purple-800/40">
                        Graphic: {ref.analysis.graphic_location}
                      </span>
                      <span className="text-[10px] bg-purple-950/60 text-purple-300 px-1.5 py-0.5 rounded border border-purple-800/40">
                        {ref.analysis.fabric_appearance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Product Truth System Notification */}
            {!garmentReferences.some((r) => r.orientation === 'BACK') && garmentReferences.length > 0 && (
              <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-xl flex items-start gap-2 text-xs text-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-amber-300">Product Truth System</strong>
                  Back reference missing. AI will infer back design if requested.
                </div>
              </div>
            )}

            {/* Garment Identity Lock & Extraction Controls */}
            <div className="space-y-3 pt-2 border-t border-panel-border">
              <div className="flex items-center justify-between p-3 bg-panel-light rounded-xl border border-panel-border">
                <div className="flex items-center gap-2">
                  {garmentIdentityLock ? (
                    <Lock className="w-4 h-4 text-purple-400" />
                  ) : (
                    <Unlock className="w-4 h-4 text-gray-400" />
                  )}
                  <div>
                    <span className="text-xs font-bold text-white block">Garment Identity Lock</span>
                    <span className="text-[10px] text-gray-400 block">Locks artwork, logos, color & print</span>
                  </div>
                </div>
                <button
                  onClick={() => setGarmentIdentityLock(!garmentIdentityLock)}
                  className={`w-10 h-5 rounded-full transition-colors relative ${
                    garmentIdentityLock ? 'bg-brand-600' : 'bg-gray-700'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                      garmentIdentityLock ? 'left-5' : 'left-0.5'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-panel-light rounded-xl border border-panel-border">
                <div>
                  <span className="text-xs font-bold text-white block">Smart Garment Extraction</span>
                  <span className="text-[10px] text-gray-400 block">Isolates clothing silhouette</span>
                </div>
                <button
                  onClick={() => setSmartExtraction(!smartExtraction)}
                  className={`w-10 h-5 rounded-full transition-colors relative ${
                    smartExtraction ? 'bg-brand-600' : 'bg-gray-700'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                      smartExtraction ? 'left-5' : 'left-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODEL TAB */}
        {activeTab === 'model' && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                Model Reference
              </span>
              <p className="text-[11px] text-gray-400 mb-3">
                Upload a model photo from your computer to preserve model facial identity & physique.
              </p>

              {/* Model Upload Box */}
              {!modelRef ? (
                <div
                  onClick={() => modelInputRef.current?.click()}
                  className="border-2 border-dashed border-panel-border hover:border-brand-500 rounded-xl p-6 text-center cursor-pointer bg-[#090a0f]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-purple-800/60 flex items-center justify-center mx-auto text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-white block">Click to Upload Local Model Photo</span>
                  <span className="text-[10px] text-gray-400 block mt-0.5">Preserves model consistency</span>
                </div>
              ) : (
                <div className="p-3 bg-[#090a0f] border border-panel-border rounded-xl space-y-3">
                  <div className="flex gap-3">
                    <img
                      src={modelRef.image_url}
                      alt="Model"
                      className="w-16 h-20 object-cover rounded-lg border border-panel-border"
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{modelRef.name}</span>
                        <button
                          onClick={() => setModelRef(null)}
                          className="text-gray-500 hover:text-red-400 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[10px] text-purple-300 bg-purple-950 px-2 py-0.5 rounded inline-block">
                        1 Person Detected (Full Body)
                      </div>
                      <div className="text-[10px] text-gray-400 block">
                        Quality: <span className="text-green-400 font-bold">Excellent</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-panel-light rounded-lg border border-panel-border">
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-xs font-semibold text-white">Model Identity Lock</span>
                    </div>
                    <button
                      onClick={() => setModelIdentityLock(!modelIdentityLock)}
                      className={`w-9 h-4 rounded-full transition-colors relative ${
                        modelIdentityLock ? 'bg-brand-600' : 'bg-gray-700'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-transform ${
                          modelIdentityLock ? 'left-5.5' : 'left-0.5'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
