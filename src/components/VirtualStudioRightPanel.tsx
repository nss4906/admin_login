'use client';

import React, { useState } from 'react';
import {
  Sliders,
  Camera,
  Sun,
  Palette,
  Sparkles,
  Layers,
  Wand2,
  ChevronDown,
  ChevronRight,
  Eye,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { PhotoshootSettings } from '@/types';

interface VirtualStudioRightPanelProps {
  settings: PhotoshootSettings;
  setSettings: React.Dispatch<React.SetStateAction<PhotoshootSettings>>;
  packType: string;
  setPackType: (val: string) => void;
  qualityTier: 'Fast' | 'Standard' | 'Premium';
  setQualityTier: (val: 'Fast' | 'Standard' | 'Premium') => void;
}

export function VirtualStudioRightPanel({
  settings,
  setSettings,
  packType,
  setPackType,
  qualityTier,
  setQualityTier,
}: VirtualStudioRightPanelProps) {
  const [openSection, setOpenSection] = useState<string>('concept');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  const applyArtDirectorConcept = (concept: string) => {
    switch (concept) {
      case 'Streetwear':
        setSettings((prev) => ({
          ...prev,
          concept_name: 'Streetwear Campaign',
          mode: 'Editorial',
          pose: 'Walking Hero Pose',
          lighting_style: 'Dramatic Neon Rim',
          background_type: 'Urban Concrete Street',
          artwork_visibility: 'Maximum',
          color_accuracy: 'Maximum Accuracy',
        }));
        break;
      case 'MinimalEcom':
        setSettings((prev) => ({
          ...prev,
          concept_name: 'Minimal Clean E-commerce',
          mode: 'Clean E-commerce',
          pose: 'Full Body Front',
          lighting_style: 'Soft Studio Key Light',
          background_type: 'Neutral Light Grey Studio',
          artwork_visibility: 'Maximum',
          color_accuracy: 'Maximum Accuracy',
        }));
        break;
      case 'OutdoorLifestyle':
        setSettings((prev) => ({
          ...prev,
          concept_name: 'Outdoor Lifestyle Drop',
          mode: 'Catalog',
          pose: 'Candid Motion Walk',
          lighting_style: 'Golden Hour Sunlight',
          background_type: 'Modern Architectural Park',
          artwork_visibility: 'Balanced',
          color_accuracy: 'Balanced',
        }));
        break;
      default:
        break;
    }
  };

  return (
    <aside className="w-full lg:w-[340px] xl:w-[380px] bg-panel border-l border-panel-border flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-panel-border bg-[#090a0f]/50 flex items-center justify-between">
        <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Sliders className="w-4 h-4 text-purple-400" />
          Photoshoot Configuration
        </span>
        <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded font-mono border border-purple-800">
          PRO ENGINE
        </span>
      </div>

      <div className="p-4 space-y-4 flex-1 text-xs">
        {/* 1. AI ART DIRECTOR CONCEPTS */}
        <div className="border border-panel-border rounded-xl bg-[#090a0f]/40 overflow-hidden">
          <button
            onClick={() => toggleSection('concept')}
            className="w-full p-3 text-left font-bold text-white flex items-center justify-between bg-panel"
          >
            <span className="flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-purple-400" />
              AI Art Director One-Click Concepts
            </span>
            {openSection === 'concept' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          {openSection === 'concept' && (
            <div className="p-3 grid grid-cols-1 gap-2 border-t border-panel-border">
              <button
                onClick={() => applyArtDirectorConcept('MinimalEcom')}
                className="p-2 bg-panel hover:bg-purple-950/40 border border-panel-border rounded-lg text-left transition-colors flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-white block">Minimal Clean E-commerce</span>
                  <span className="text-[10px] text-gray-400 block">High clarity, studio grey backdrop, front pose</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              </button>

              <button
                onClick={() => applyArtDirectorConcept('Streetwear')}
                className="p-2 bg-panel hover:bg-purple-950/40 border border-panel-border rounded-lg text-left transition-colors flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-white block">Luxury Streetwear Campaign</span>
                  <span className="text-[10px] text-gray-400 block">Urban concrete backdrop, dramatic rim light</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              </button>

              <button
                onClick={() => applyArtDirectorConcept('OutdoorLifestyle')}
                className="p-2 bg-panel hover:bg-purple-950/40 border border-panel-border rounded-lg text-left transition-colors flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-white block">Outdoor Lifestyle Drop</span>
                  <span className="text-[10px] text-gray-400 block">Golden hour lighting, natural posture</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              </button>
            </div>
          )}
        </div>

        {/* 2. PACK SELECTION */}
        <div className="border border-panel-border rounded-xl bg-[#090a0f]/40 overflow-hidden">
          <button
            onClick={() => toggleSection('packs')}
            className="w-full p-3 text-left font-bold text-white flex items-center justify-between bg-panel"
          >
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Asset Generation Pack
            </span>
            {openSection === 'packs' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          {openSection === 'packs' && (
            <div className="p-3 space-y-2 border-t border-panel-border">
              {[
                { id: 'SINGLE', name: 'Single Shoot', desc: '1 Custom Image (1 Credit)' },
                { id: 'ESSENTIAL', name: 'Essential E-com Pack', desc: '4 Images: Front, Back, 3/4, Detail (4 Credits)' },
                { id: 'PLUS', name: 'Plus Commercial Pack', desc: '6 Images: Full Look, Profile, Lifestyle (6 Credits)' },
                { id: 'SOCIAL', name: 'Social Media Pack', desc: '4 High-Engagement Social Cuts 9:16 & 1:1 (4 Credits)' },
                { id: 'COMPLETE', name: 'Complete Full Brand Suite', desc: '8 Assets: E-commerce + Social + Editorial (8 Credits)' },
              ].map((pack) => (
                <div
                  key={pack.id}
                  onClick={() => setPackType(pack.id)}
                  className={`p-2.5 rounded-lg border cursor-pointer transition-colors ${
                    packType === pack.id
                      ? 'bg-purple-950/60 border-purple-500 text-white'
                      : 'bg-panel border-panel-border text-gray-300 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{pack.name}</span>
                    {packType === pack.id && <Zap className="w-3.5 h-3.5 text-purple-400" />}
                  </div>
                  <span className="text-[10px] text-gray-400 block mt-0.5">{pack.desc}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. POSE & CAMERA SETTINGS */}
        <div className="border border-panel-border rounded-xl bg-[#090a0f]/40 overflow-hidden">
          <button
            onClick={() => toggleSection('camera')}
            className="w-full p-3 text-left font-bold text-white flex items-center justify-between bg-panel"
          >
            <span className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-purple-400" />
              Pose, Camera & Lighting
            </span>
            {openSection === 'camera' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          {openSection === 'camera' && (
            <div className="p-3 space-y-3 border-t border-panel-border">
              <div>
                <label className="text-[11px] font-semibold text-gray-300 block mb-1">Model Pose</label>
                <select
                  value={settings.pose}
                  onChange={(e) => setSettings({ ...settings, pose: e.target.value })}
                  className="w-full bg-panel border border-panel-border rounded-lg p-2 text-white text-xs focus:outline-none focus:border-purple-500"
                >
                  <option value="Full Body Front">Full Body Front</option>
                  <option value="Hand on Hip">Hand on Hip</option>
                  <option value="3/4 View Standing">3/4 View Standing</option>
                  <option value="Back View">Back View</option>
                  <option value="Walking Hero Pose">Walking Hero Pose</option>
                  <option value="Hands in Pockets">Hands in Pockets</option>
                  <option value="Crossed Arms">Crossed Arms (Warning: May cover print)</option>
                  <option value="POV Outfit Check">POV Outfit Check</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-gray-300 block mb-1">Lighting Style</label>
                <select
                  value={settings.lighting_style}
                  onChange={(e) => setSettings({ ...settings, lighting_style: e.target.value })}
                  className="w-full bg-panel border border-panel-border rounded-lg p-2 text-white text-xs focus:outline-none focus:border-purple-500"
                >
                  <option value="Soft Studio Key Light">Soft Studio Key Light</option>
                  <option value="Hard High Contrast Studio">Hard High Contrast Studio</option>
                  <option value="Golden Hour Sunlight">Golden Hour Sunlight</option>
                  <option value="Overcast Natural Daylight">Overcast Natural Daylight</option>
                  <option value="Dramatic Neon Rim">Dramatic Neon Rim</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-gray-300 block mb-1">Background Backdrop</label>
                <select
                  value={settings.background_type}
                  onChange={(e) => setSettings({ ...settings, background_type: e.target.value })}
                  className="w-full bg-panel border border-panel-border rounded-lg p-2 text-white text-xs focus:outline-none focus:border-purple-500"
                >
                  <option value="Neutral Light Grey Studio">Neutral Light Grey Studio</option>
                  <option value="Pure Seamless White Studio">Pure Seamless White Studio</option>
                  <option value="Dark Minimal Studio">Dark Minimal Studio</option>
                  <option value="Urban Concrete Street">Urban Concrete Street</option>
                  <option value="Modern Architectural Park">Modern Architectural Park</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 4. FIDELITY & ARTWORK PROTECTION CONTROLS */}
        <div className="border border-panel-border rounded-xl bg-[#090a0f]/40 overflow-hidden">
          <button
            onClick={() => toggleSection('fidelity')}
            className="w-full p-3 text-left font-bold text-white flex items-center justify-between bg-panel"
          >
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-purple-400" />
              Artwork Visibility & Color Accuracy
            </span>
            {openSection === 'fidelity' ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          {openSection === 'fidelity' && (
            <div className="p-3 space-y-3 border-t border-panel-border">
              <div>
                <label className="text-[11px] font-semibold text-gray-300 block mb-1">Artwork Visibility</label>
                <select
                  value={settings.artwork_visibility}
                  onChange={(e) => setSettings({ ...settings, artwork_visibility: e.target.value as any })}
                  className="w-full bg-panel border border-panel-border rounded-lg p-2 text-white text-xs focus:outline-none focus:border-purple-500"
                >
                  <option value="Maximum">Maximum (Prioritizes 100% graphic visibility)</option>
                  <option value="Balanced">Balanced (Natural fashion photoshoot balance)</option>
                  <option value="Natural">Natural (Allows realistic folds & movement)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-gray-300 block mb-1">Color Accuracy</label>
                <select
                  value={settings.color_accuracy}
                  onChange={(e) => setSettings({ ...settings, color_accuracy: e.target.value as any })}
                  className="w-full bg-panel border border-panel-border rounded-lg p-2 text-white text-xs focus:outline-none focus:border-purple-500"
                >
                  <option value="Maximum Accuracy">Maximum Accuracy (Exact garment color match)</option>
                  <option value="Balanced">Balanced</option>
                  <option value="Creative">Creative Color Grade</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* 5. CUSTOM PROMPT OVERRIDE */}
        <div className="p-3 bg-panel border border-panel-border rounded-xl space-y-1.5">
          <label className="text-[11px] font-bold text-white block">Custom Photography Prompt (Optional)</label>
          <textarea
            rows={2}
            value={settings.custom_prompt || ''}
            onChange={(e) => setSettings({ ...settings, custom_prompt: e.target.value })}
            placeholder="Add subtle creative directions e.g. model holds a camera, wind in hair..."
            className="w-full bg-[#090a0f] border border-panel-border rounded-lg p-2 text-xs text-white focus:outline-none focus:border-purple-500 resize-none"
          />
        </div>
      </div>
    </aside>
  );
}
