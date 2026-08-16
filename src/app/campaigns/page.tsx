'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationHeader } from '@/components/NavigationHeader';
import { Layers, Plus, Camera, Sparkles } from 'lucide-react';

export default function CampaignsPage() {
  const campaigns = [
    {
      id: 'camp-1',
      name: 'Summer Streetwear 2026',
      theme: 'Urban Concrete & Neon Sunset',
      outputsCount: 16,
      modelName: 'Studio Female Model A',
      status: 'Active',
    },
    {
      id: 'camp-2',
      name: 'Minimal E-commerce Catalog V1',
      theme: 'Seamless Grey Studio Lighting',
      outputsCount: 24,
      modelName: 'Studio Male Model B',
      status: 'Completed',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col">
      <NavigationHeader />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-panel-border pb-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-6 h-6 text-purple-400" />
              Campaign Studio
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Create coherent multi-asset brand campaigns with consistent lighting, model identity, and background aesthetics.
            </p>
          </div>

          <Link
            href="/studio"
            className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> New Campaign
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((camp) => (
            <div key={camp.id} className="bg-panel border border-panel-border rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">{camp.name}</h3>
                <span className="bg-purple-950 text-purple-300 text-xs px-2.5 py-0.5 rounded border border-purple-800 font-semibold">
                  {camp.status}
                </span>
              </div>

              <div className="space-y-1 text-xs text-gray-300">
                <p><strong className="text-white">Aesthetic Theme:</strong> {camp.theme}</p>
                <p><strong className="text-white">Locked Model:</strong> {camp.modelName}</p>
                <p><strong className="text-white">Generated Assets:</strong> {camp.outputsCount} Photos</p>
              </div>

              <div className="pt-2 flex justify-end">
                <Link
                  href="/studio"
                  className="px-4 py-2 bg-panel-light hover:bg-purple-950/60 border border-panel-border text-purple-300 font-bold text-xs rounded-xl flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" /> Open Campaign Studio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
