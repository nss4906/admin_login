'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavigationHeader } from '@/components/NavigationHeader';
import { Shirt, Download, RefreshCw } from 'lucide-react';

function MockupContent() {
  const searchParams = useSearchParams();
  const initialImage = searchParams.get('image');

  const [sourceImage, setSourceImage] = useState<string>(
    initialImage || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop'
  );

  const [selectedTemplate, setSelectedTemplate] = useState<string>('Heavyweight Oversized T-Shirt Mockup');
  const [templateColor, setTemplateColor] = useState<string>('#11131c');
  const [renderedMockup, setRenderedMockup] = useState<string>(sourceImage);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleRenderMockup = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setRenderedMockup(sourceImage);
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
      {/* Left Mockup Controls */}
      <aside className="w-full md:w-80 bg-panel border-r border-panel-border p-4 space-y-6 overflow-y-auto text-xs">
        <div>
          <span className="font-bold text-white uppercase tracking-wider block mb-2 flex items-center gap-2">
            <Shirt className="w-4 h-4 text-purple-400" />
            Mockup Templates
          </span>
          <div className="space-y-2">
            {[
              'Heavyweight Oversized T-Shirt Mockup',
              'Streetwear Hoodie Mockup',
              'Boxy Fit Sweatshirt Mockup',
              'Linen Button-down Shirt Mockup',
            ].map((template) => (
              <button
                key={template}
                onClick={() => setSelectedTemplate(template)}
                className={`w-full p-2.5 rounded-lg border text-left transition-colors font-medium ${
                  selectedTemplate === template
                    ? 'bg-purple-950/60 border-purple-500 text-white'
                    : 'bg-[#090a0f] border-panel-border text-gray-400 hover:text-white'
                }`}
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-bold text-white uppercase tracking-wider block mb-2">Mockup Color</label>
          <div className="flex items-center gap-2">
            {['#11131c', '#f3f4f6', '#3b82f6', '#10b981', '#ef4444'].map((color) => (
              <button
                key={color}
                onClick={() => setTemplateColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  templateColor === color ? 'border-purple-400 scale-110' : 'border-panel-border'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleRenderMockup}
          disabled={isProcessing}
          className="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl shadow-lg transition-all"
        >
          {isProcessing ? 'Rendering Mockup...' : 'Apply & Render Mockup'}
        </button>
      </aside>

      {/* Center Canvas Studio */}
      <main className="flex-1 bg-[#090a0f] p-6 flex flex-col items-center justify-center relative">
        <div
          className="relative max-w-lg w-full aspect-[4/5] rounded-2xl overflow-hidden border border-panel-border shadow-2xl flex items-center justify-center"
          style={{ backgroundColor: templateColor }}
        >
          <img
            src={renderedMockup}
            alt="Rendered Mockup"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-[#090a0f]/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-white border border-panel-border">
            {selectedTemplate}
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <a
            href={renderedMockup}
            download="mockup_render.jpg"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Download Mockup
          </a>
        </div>
      </main>
    </div>
  );
}

export default function MockupPage() {
  return (
    <div className="h-screen bg-[#090a0f] text-gray-100 flex flex-col overflow-hidden">
      <NavigationHeader />
      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center text-gray-400 text-xs gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-purple-400" />
            <span>Loading Mockup Studio...</span>
          </div>
        }
      >
        <MockupContent />
      </Suspense>
    </div>
  );
}
