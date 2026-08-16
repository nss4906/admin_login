'use client';

import React, { useState } from 'react';
import { NavigationHeader } from '@/components/NavigationHeader';
import { CreditCard, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

export default function BillingPage() {
  const [loading, setLoading] = useState(false);

  const handleRazorpayUpgrade = (planName: string, price: number) => {
    setLoading(true);
    setTimeout(() => {
      alert(`Razorpay checkout initiated for ${planName} ($${price}/mo). Credits will be granted upon webhook verification.`);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col">
      <NavigationHeader />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-8">
        <div className="border-b border-panel-border pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-purple-400" />
              Subscription & Credit Balance
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Manage your subscription plan, credit balance, and Razorpay automated billing.
            </p>
          </div>

          <div className="bg-panel border border-panel-border p-4 rounded-xl flex items-center gap-4">
            <div>
              <span className="text-[10px] text-gray-400 uppercase font-bold block">Current Plan</span>
              <span className="text-lg font-bold text-white">PRO STUDIO</span>
            </div>
            <div className="h-8 w-px bg-panel-border" />
            <div>
              <span className="text-[10px] text-gray-400 uppercase font-bold block">Available Balance</span>
              <span className="text-lg font-extrabold text-purple-400">126 / 150 Credits</span>
            </div>
          </div>
        </div>

        {/* Plan Upgrade Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* STARTER */}
          <div className="bg-panel border border-panel-border rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Starter</h3>
              <p className="text-xs text-gray-400">For individual POD sellers</p>
              <div className="text-3xl font-extrabold text-white my-3">$29 <span className="text-xs text-gray-400 font-normal">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> 100 Credits Monthly</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Standard AI Model</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Essential E-com Pack</li>
              </ul>
            </div>
            <button
              onClick={() => handleRazorpayUpgrade('STARTER', 29)}
              disabled={loading}
              className="w-full py-2.5 bg-panel-light hover:bg-purple-950/60 border border-panel-border text-white font-bold text-xs rounded-xl transition-all"
            >
              Switch to Starter
            </button>
          </div>

          {/* PRO */}
          <div className="bg-gradient-to-b from-purple-900/30 to-panel border-2 border-brand-500 rounded-2xl p-6 space-y-4 flex flex-col justify-between relative shadow-xl shadow-purple-950/40">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              CURRENT PLAN
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Pro Studio</h3>
              <p className="text-xs text-purple-300">For fashion brands & studios</p>
              <div className="text-3xl font-extrabold text-white my-3">$79 <span className="text-xs text-gray-400 font-normal">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> 350 Credits Monthly</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Premium AI Engine</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> E-commerce & Social Packs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Campaign Mode Access</li>
              </ul>
            </div>
            <button
              disabled
              className="w-full py-2.5 bg-brand-600 text-white font-bold text-xs rounded-xl shadow cursor-default opacity-80"
            >
              Active Subscription
            </button>
          </div>

          {/* BUSINESS */}
          <div className="bg-panel border border-panel-border rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Business / Agency</h3>
              <p className="text-xs text-gray-400">For high-volume agencies</p>
              <div className="text-3xl font-extrabold text-white my-3">$199 <span className="text-xs text-gray-400 font-normal">/mo</span></div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> 1,000 Credits Monthly</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Complete Full Suite Packs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Priority Generation Queue</li>
              </ul>
            </div>
            <button
              onClick={() => handleRazorpayUpgrade('BUSINESS', 199)}
              disabled={loading}
              className="w-full py-2.5 bg-panel-light hover:bg-purple-950/60 border border-panel-border text-white font-bold text-xs rounded-xl transition-all"
            >
              Upgrade to Business
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
