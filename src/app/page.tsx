'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Shirt,
  Camera,
  Layers,
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Eye,
  Sliders,
  Maximize2,
  HelpCircle,
  BarChart3,
  Flame,
} from 'lucide-react';
import { NavigationHeader } from '@/components/NavigationHeader';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 selection:bg-purple-600 selection:text-white">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 overflow-hidden text-center max-w-6xl mx-auto">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Design-Aware AI Fashion Production Engine V1.0</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
          Create Professional Apparel Photoshoots with AI
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Turn your apparel references into studio-quality fashion photography, e-commerce assets, social content, and product mockups with reference-locked precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/studio"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-purple-950/50 transition-all flex items-center justify-center gap-2"
          >
            Start Creating
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-panel border border-panel-border hover:border-purple-500/40 text-gray-200 font-semibold text-base transition-all flex items-center justify-center gap-2"
          >
            See How It Works
          </a>
        </div>

        {/* Hero Interactive Showcase Card */}
        <div className="p-1 rounded-2xl bg-gradient-to-b from-purple-500/20 via-panel-border to-transparent shadow-2xl">
          <div className="bg-panel rounded-xl p-6 border border-panel-border text-left grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-[#090a0f] border border-panel-border">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>1. Smart Reference Upload</span>
                <span className="text-[10px] bg-green-950 text-green-400 px-1.5 py-0.5 rounded">DETECTED</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop"
                alt="Apparel Reference"
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <div className="text-xs space-y-1 text-gray-300">
                <p><strong className="text-white">Garment:</strong> Oversized Heavyweight T-Shirt</p>
                <p><strong className="text-white">Orientation:</strong> FRONT (98% Confidence)</p>
                <p><strong className="text-white">Graphic:</strong> Detected Front Center</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#090a0f] border border-panel-border">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>2. Shoot Configuration</span>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-1.5 py-0.5 rounded">PREMIUM</span>
              </div>
              <div className="space-y-2 text-xs text-gray-300 py-2">
                <div className="p-2 rounded bg-panel border border-panel-border">
                  <span className="text-gray-400 block text-[10px]">MODE</span>
                  <span className="text-white font-semibold">Premium E-commerce Studio</span>
                </div>
                <div className="p-2 rounded bg-panel border border-panel-border">
                  <span className="text-gray-400 block text-[10px]">POSE & LIGHTING</span>
                  <span className="text-white font-semibold">Full Body Front | Soft Studio Key Light</span>
                </div>
                <div className="p-2 rounded bg-panel border border-panel-border">
                  <span className="text-gray-400 block text-[10px]">IDENTITY PROTECTION</span>
                  <span className="text-green-400 font-semibold">Garment & Model Lock ON</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#090a0f] border border-panel-border">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>3. High-Fidelity Asset Output</span>
                <span className="text-[10px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded">READY</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"
                alt="Generated Output"
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <div className="flex gap-2">
                <Link
                  href="/studio"
                  className="w-full py-1.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs rounded text-center"
                >
                  Download Asset
                </Link>
                <Link
                  href="/mockup"
                  className="w-full py-1.5 bg-panel border border-panel-border hover:border-purple-500 text-gray-200 font-semibold text-xs rounded text-center"
                >
                  Send to Mockup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section id="how-it-works" className="py-20 px-4 max-w-6xl mx-auto border-t border-panel-border">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Built Specifically for Apparel Production</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Not a generic text-to-image generator. A design-aware, high-fidelity production system that respects artwork, colors, logos, and clothing silhouettes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-panel border border-panel-border hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 mb-4">
              <Shirt className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI Apparel Intelligence</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automatically understands garment category, front/back/side/detail orientation, primary colors, typography, logos, and graphic locations before photoshoot creation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-panel border border-panel-border hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 mb-4">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Virtual Studio Workspace</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Configure camera focal length, studio lighting, high-fashion models, poses, expressions, and custom background environments with three-column creative controls.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-panel border border-panel-border hover:border-purple-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">E-Commerce & Social Asset Packs</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              One-click batch asset generation for Shopify, Amazon, Instagram Reels (9:16), feeds (1:1), and high-resolution catalog editorials with guaranteed model consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto border-t border-panel-border">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Scalable SaaS Pricing</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Flexible monthly plans for print-on-demand, fashion stores, and agency studios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* FREE */}
          <div className="p-6 rounded-xl bg-panel border border-panel-border flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Free Trial</h4>
              <p className="text-gray-400 text-xs mb-4">Test AI apparel studio</p>
              <div className="text-3xl font-extrabold text-white mb-4">$0 <span className="text-xs font-normal text-gray-400">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-300 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> 5 Trial Credits</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Fast AI Quality</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Single Shot Generation</li>
              </ul>
            </div>
            <Link href="/signup" className="w-full py-2 bg-panel border border-panel-border hover:border-purple-500 text-center rounded text-xs font-semibold text-white">Start Free</Link>
          </div>

          {/* STARTER */}
          <div className="p-6 rounded-xl bg-panel border border-panel-border flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Starter</h4>
              <p className="text-gray-400 text-xs mb-4">For single brands & POD</p>
              <div className="text-3xl font-extrabold text-white mb-4">$29 <span className="text-xs font-normal text-gray-400">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-300 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> 100 Monthly Credits</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Standard AI Quality</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Essential Pack Access</li>
              </ul>
            </div>
            <Link href="/signup" className="w-full py-2 bg-panel border border-panel-border hover:border-purple-500 text-center rounded text-xs font-semibold text-white">Choose Starter</Link>
          </div>

          {/* PRO */}
          <div className="p-6 rounded-xl bg-gradient-to-b from-purple-900/30 to-panel border-2 border-brand-500 flex flex-col justify-between relative shadow-xl shadow-purple-950/40">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              MOST POPULAR
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Pro Studio</h4>
              <p className="text-purple-300 text-xs mb-4">For growing fashion brands</p>
              <div className="text-3xl font-extrabold text-white mb-4">$79 <span className="text-xs font-normal text-gray-400">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-200 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> 350 Monthly Credits</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Premium AI Fidelity Engine</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> E-commerce & Social Packs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Full Campaign Mode</li>
              </ul>
            </div>
            <Link href="/signup" className="w-full py-2 bg-brand-600 hover:bg-brand-500 text-center rounded text-xs font-bold text-white shadow-lg">Start Pro Studio</Link>
          </div>

          {/* BUSINESS */}
          <div className="p-6 rounded-xl bg-panel border border-panel-border flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Business</h4>
              <p className="text-gray-400 text-xs mb-4">High volume agencies</p>
              <div className="text-3xl font-extrabold text-white mb-4">$199 <span className="text-xs font-normal text-gray-400">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-300 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> 1,000 Monthly Credits</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Complete Asset Packs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Priority Generation Pipeline</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Admin Usage Analytics</li>
              </ul>
            </div>
            <Link href="/signup" className="w-full py-2 bg-panel border border-panel-border hover:border-purple-500 text-center rounded text-xs font-semibold text-white">Choose Business</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-panel-border text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} AI Apparel Production Studio. All rights reserved.</p>
        <p className="mt-1">Standalone SaaS Platform | Built for Fashion Brands, E-Commerce & POD Sellers</p>
      </footer>
    </div>
  );
}
