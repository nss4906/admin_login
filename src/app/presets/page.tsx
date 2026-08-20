'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationHeader } from '@/components/NavigationHeader';
import { SlidersHorizontal, Plus, Camera, Sliders } from 'lucide-react';

export default function PresetsPage() {
  const presets = [
    {
      id: 'pre-1',
      name: 'Black T-Shirt Product Shoot',
      mode: 'Premium E-commerce',
      lighting: 'Soft Studio Key Light',
      pose: 'Full Body Front',
      aspectRatio: '4:5',
    },
    {
      id: 'pre-2',
      name: 'Instagram Streetwear Reel Focus',
      mode: 'Editorial',
      lighting: 'Dramatic Neon Rim',
      pose: 'Walking Hero Pose',
      aspectRatio: '9:16',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col">
      <NavigationHeader />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-panel-border pb-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <SlidersHorizontal className="w-6 h-6 text-purple-400" />
              Saved Studio Presets
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Save your favorite combinations of lighting, pose, camera angle, and backdrop for instant 1-click photoshoots.
            </p>
          </div>

          <Link
            href="/studio"
            className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Save Current Settings as Preset
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {presets.map((pre) => (
            <div key={pre.id} className="bg-panel border border-panel-border rounded-2xl p-6 space-y-3">
              <h3 className="text-base font-bold text-white">{pre.name}</h3>

              <div className="space-y-1 text-xs text-gray-300">
                <p><strong className="text-white">Photography Mode:</strong> {pre.mode}</p>
                <p><strong className="text-white">Lighting:</strong> {pre.lighting}</p>
                <p><strong className="text-white">Pose:</strong> {pre.pose}</p>
                <p><strong className="text-white">Aspect Ratio:</strong> {pre.aspectRatio}</p>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <Link
                  href="/studio"
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow"
                >
                  Apply Preset in Studio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
