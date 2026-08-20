'use client';

import React from 'react';
import Link from 'next/link';
import {
  Camera,
  Shirt,
  Layers,
  Upload,
  Clock,
  Plus,
  CreditCard,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Sliders,
  FolderPlus,
} from 'lucide-react';
import { NavigationHeader } from '@/components/NavigationHeader';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col">
      <NavigationHeader />

      <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full space-y-8">
        {/* Welcome & Account Summary */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-panel border border-panel-border p-6 rounded-2xl">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-white">Welcome back, Fashion Studio</h1>
              <span className="bg-purple-950 text-purple-300 text-xs px-2.5 py-0.5 rounded-full border border-purple-800 font-semibold">
                PRO PLAN
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400">
              Transform your clothing references into high-fidelity studio assets and campaign mockups.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/studio"
              className="px-4 py-2 bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-950/40 flex items-center gap-2 transition-all"
            >
              <Plus className="w-4 h-4" />
              New Virtual Studio Shoot
            </Link>
          </div>
        </div>

        {/* Usage & Quick Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-panel border border-panel-border p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 block font-medium">Available Credits</span>
              <span className="text-2xl font-extrabold text-white mt-1 block">126 / 150</span>
              <span className="text-[10px] text-green-400 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> Refills in 14 days
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-panel border border-panel-border p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 block font-medium">Generations This Month</span>
              <span className="text-2xl font-extrabold text-white mt-1 block">42 Outputs</span>
              <span className="text-[10px] text-purple-400 block mt-1">100% Success Rate</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400">
              <Camera className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-panel border border-panel-border p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 block font-medium">Active Projects</span>
              <span className="text-2xl font-extrabold text-white mt-1 block">8 Projects</span>
              <span className="text-[10px] text-gray-400 block mt-1">14 Apparel References</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400">
              <FolderPlus className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-panel border border-panel-border p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 block font-medium">Fidelity Quality</span>
              <span className="text-2xl font-extrabold text-green-400 mt-1 block">Maximum</span>
              <span className="text-[10px] text-gray-400 block mt-1">Garment Lock Active</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Quick Action Navigation Buttons */}
        <div>
          <h2 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <Link
              href="/studio"
              className="p-4 bg-panel border border-panel-border hover:border-purple-500/50 rounded-xl transition-all group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-600/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-white flex items-center justify-between">
                  <span>Virtual Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-400" />
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5 block">Configure photoshoot</span>
              </div>
            </Link>

            <Link
              href="/mockup"
              className="p-4 bg-panel border border-panel-border hover:border-purple-500/50 rounded-xl transition-all group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-600/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Shirt className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-white flex items-center justify-between">
                  <span>New Mockup</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-400" />
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5 block">Product mockups</span>
              </div>
            </Link>

            <Link
              href="/campaigns"
              className="p-4 bg-panel border border-panel-border hover:border-purple-500/50 rounded-xl transition-all group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-600/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-white flex items-center justify-between">
                  <span>New Campaign</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-400" />
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5 block">Full brand campaign</span>
              </div>
            </Link>

            <Link
              href="/studio?tab=apparel"
              className="p-4 bg-panel border border-panel-border hover:border-purple-500/50 rounded-xl transition-all group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-600/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Upload className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-white flex items-center justify-between">
                  <span>Upload Apparel</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-400" />
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5 block">Smart AI analysis</span>
              </div>
            </Link>

            <Link
              href="/generations"
              className="p-4 bg-panel border border-panel-border hover:border-purple-500/50 rounded-xl transition-all group flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-600/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-white flex items-center justify-between">
                  <span>Generations</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-purple-400" />
                </div>
                <span className="text-[10px] text-gray-400 mt-0.5 block">History & exports</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Projects Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-white">Recent Projects</h2>
            <Link href="/projects" className="text-xs text-purple-400 font-medium hover:underline">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Project Card 1 */}
            <div className="bg-panel border border-panel-border rounded-xl p-4 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white">Black Oversized T-Shirt</span>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded font-mono">3 References</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=300&auto=format&fit=crop"
                  alt="Front"
                  className="w-full h-20 object-cover rounded border border-panel-border"
                />
                <img
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=300&auto=format&fit=crop"
                  alt="Back"
                  className="w-full h-20 object-cover rounded border border-panel-border"
                />
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=300&auto=format&fit=crop"
                  alt="Generated"
                  className="w-full h-20 object-cover rounded border border-panel-border"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-400">
                <span>Updated 2 hours ago</span>
                <Link href="/studio" className="text-purple-400 font-semibold hover:underline">
                  Open Studio →
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-panel border border-panel-border rounded-xl p-4 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white">Streetwear Heavyweight Hoodie</span>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded font-mono">2 References</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=300&auto=format&fit=crop"
                  alt="Hoodie Ref"
                  className="w-full h-20 object-cover rounded border border-panel-border"
                />
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop"
                  alt="Generated"
                  className="w-full h-20 object-cover rounded border border-panel-border"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-400">
                <span>Updated 1 day ago</span>
                <Link href="/studio" className="text-purple-400 font-semibold hover:underline">
                  Open Studio →
                </Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-panel border border-panel-border rounded-xl p-4 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white">Summer Linen Shirt Drop</span>
                <span className="text-[10px] bg-purple-950 text-purple-300 px-2 py-0.5 rounded font-mono">4 References</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=300&auto=format&fit=crop"
                  alt="Linen Ref"
                  className="w-full h-20 object-cover rounded border border-panel-border"
                />
                <img
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=300&auto=format&fit=crop"
                  alt="Output"
                  className="w-full h-20 object-cover rounded border border-panel-border"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-400">
                <span>Updated 3 days ago</span>
                <Link href="/studio" className="text-purple-400 font-semibold hover:underline">
                  Open Studio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
