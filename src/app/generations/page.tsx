'use client';

import React from 'react';
import Link from 'next/link';
import { NavigationHeader } from '@/components/NavigationHeader';
import { Clock, Download, Shirt, RefreshCw, Eye, CheckCircle2 } from 'lucide-react';

export default function GenerationsPage() {
  const generations = [
    {
      id: 'gen-1',
      project: 'Black Oversized T-Shirt Drop',
      shotType: 'Full Body Front',
      aspectRatio: '4:5',
      credits: 1,
      qualityStatus: 'Passed',
      imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',
      createdAt: '10 minutes ago',
    },
    {
      id: 'gen-2',
      project: 'Black Oversized T-Shirt Drop',
      shotType: 'Back View',
      aspectRatio: '4:5',
      credits: 1,
      qualityStatus: 'Passed',
      imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop',
      createdAt: '12 minutes ago',
    },
    {
      id: 'gen-3',
      project: 'Streetwear Heavyweight Hoodie',
      shotType: 'Editorial Walking Shot',
      aspectRatio: '9:16',
      credits: 2,
      qualityStatus: 'Passed',
      imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop',
      createdAt: '1 hour ago',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col">
      <NavigationHeader />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
        <div className="border-b border-panel-border pb-4">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-400" />
            Generation Output History
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Review past photoshoot generations, re-download, or send directly to Mockup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {generations.map((gen) => (
            <div key={gen.id} className="bg-panel border border-panel-border rounded-xl overflow-hidden space-y-3">
              <div className="relative aspect-[4/5] bg-black">
                <img src={gen.imageUrl} alt={gen.shotType} className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 bg-[#090a0f]/80 px-2 py-0.5 rounded text-[10px] font-bold text-white">
                  {gen.shotType}
                </div>
                <div className="absolute top-2 right-2 bg-green-950/80 text-green-400 text-[10px] px-2 py-0.5 rounded font-semibold border border-green-800">
                  {gen.qualityStatus}
                </div>
              </div>

              <div className="p-4 space-y-2 text-xs">
                <div className="font-bold text-white">{gen.project}</div>
                <div className="text-gray-400 flex items-center justify-between text-[11px]">
                  <span>{gen.createdAt}</span>
                  <span>{gen.credits} Credit</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-panel-border">
                  <a
                    href={gen.imageUrl}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="py-1.5 bg-brand-600 text-white font-bold rounded text-center flex items-center justify-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                  <Link
                    href={`/mockup?image=${encodeURIComponent(gen.imageUrl)}`}
                    className="py-1.5 bg-panel-light text-purple-300 font-bold border border-panel-border rounded text-center flex items-center justify-center gap-1"
                  >
                    <Shirt className="w-3.5 h-3.5" /> Mockup
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
