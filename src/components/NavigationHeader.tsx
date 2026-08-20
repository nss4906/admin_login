'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles,
  Shirt,
  Camera,
  Layers,
  Clock,
  Settings,
  CreditCard,
  HelpCircle,
  ShieldAlert,
  LayoutDashboard,
  FolderPlus,
  SlidersHorizontal,
} from 'lucide-react';

export function NavigationHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-panel-border bg-[#090a0f]/90 backdrop-blur-md px-4 lg:px-6 py-3 flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-700 via-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-brand-700/30 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-base text-white tracking-tight flex items-center gap-1.5">
              AI Apparel <span className="text-purple-400 font-mono text-xs px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-800/50">STUDIO</span>
            </span>
            <span className="text-[10px] text-gray-400 block -mt-1 font-medium">FASHION PRODUCTION PLATFORM</span>
          </div>
        </Link>

        {/* Studio Quick Switcher */}
        {(pathname.includes('/studio') || pathname.includes('/mockup')) && (
          <div className="hidden md:flex items-center p-1 bg-panel border border-panel-border rounded-lg text-xs font-semibold">
            <Link
              href="/studio"
              className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${
                pathname.includes('/studio')
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              Virtual Studio
            </Link>
            <Link
              href="/mockup"
              className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${
                pathname.includes('/mockup')
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Shirt className="w-3.5 h-3.5" />
              Mockup Mode
            </Link>
          </div>
        )}
      </div>

      {/* Main Navigation Links */}
      <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-gray-300">
        <Link
          href="/dashboard"
          className={`px-3 py-1.5 rounded-lg hover:text-white transition-colors flex items-center gap-1.5 ${
            pathname === '/dashboard' ? 'text-purple-400 font-semibold bg-panel' : ''
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Link>
        <Link
          href="/studio"
          className={`px-3 py-1.5 rounded-lg hover:text-white transition-colors flex items-center gap-1.5 ${
            pathname.includes('/studio') ? 'text-purple-400 font-semibold bg-panel' : ''
          }`}
        >
          <Camera className="w-4 h-4" />
          Virtual Studio
        </Link>
        <Link
          href="/mockup"
          className={`px-3 py-1.5 rounded-lg hover:text-white transition-colors flex items-center gap-1.5 ${
            pathname.includes('/mockup') ? 'text-purple-400 font-semibold bg-panel' : ''
          }`}
        >
          <Shirt className="w-4 h-4" />
          Mockup
        </Link>
        <Link
          href="/projects"
          className={`px-3 py-1.5 rounded-lg hover:text-white transition-colors flex items-center gap-1.5 ${
            pathname.includes('/projects') ? 'text-purple-400 font-semibold bg-panel' : ''
          }`}
        >
          <FolderPlus className="w-4 h-4" />
          Projects
        </Link>
        <Link
          href="/generations"
          className={`px-3 py-1.5 rounded-lg hover:text-white transition-colors flex items-center gap-1.5 ${
            pathname.includes('/generations') ? 'text-purple-400 font-semibold bg-panel' : ''
          }`}
        >
          <Clock className="w-4 h-4" />
          Generations
        </Link>
        <Link
          href="/campaigns"
          className={`px-3 py-1.5 rounded-lg hover:text-white transition-colors flex items-center gap-1.5 ${
            pathname.includes('/campaigns') ? 'text-purple-400 font-semibold bg-panel' : ''
          }`}
        >
          <Layers className="w-4 h-4" />
          Campaigns
        </Link>
        <Link
          href="/presets"
          className={`px-3 py-1.5 rounded-lg hover:text-white transition-colors flex items-center gap-1.5 ${
            pathname.includes('/presets') ? 'text-purple-400 font-semibold bg-panel' : ''
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Presets
        </Link>
      </nav>

      {/* Right Controls / Credits / User Profile */}
      <div className="flex items-center gap-3">
        <Link
          href="/billing"
          className="flex items-center gap-2 bg-panel border border-panel-border hover:border-purple-500/50 px-3 py-1.5 rounded-lg text-xs font-semibold text-purple-300 transition-all"
        >
          <CreditCard className="w-3.5 h-3.5 text-purple-400" />
          <span>126 / 150 Credits</span>
          <span className="bg-purple-900/50 text-purple-300 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold border border-purple-700/50">PRO</span>
        </Link>

        <Link
          href="/admin"
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-panel transition-colors"
          title="Admin Control Panel"
        >
          <ShieldAlert className="w-4 h-4" />
        </Link>

        <Link
          href="/billing"
          className="bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs px-3.5 py-2 rounded-lg transition-colors shadow-lg shadow-purple-900/30"
        >
          Upgrade Plan
        </Link>
      </div>
    </header>
  );
}
