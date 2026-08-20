'use client';

import React from 'react';
import { NavigationHeader } from '@/components/NavigationHeader';
import { ShieldAlert, Users, CreditCard, DollarSign, Activity, AlertTriangle, Database } from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Users", value: "1,248", change: "+12% this month", icon: Users },
    { title: "Generations Today", value: "342", change: "99.4% Success Rate", icon: Activity },
    { title: "Est. Monthly Revenue", value: "$18,420", change: "Razorpay Active", icon: DollarSign },
    { title: "Est. AI Infrastructure Cost", value: "$3,210", change: "Margin: 82.5%", icon: Database },
  ];

  const costLogs = [
    { id: "log-1", provider: "Replicate (Flux)", model: "flux-dev", outputs: 4, costUsd: 0.16, status: "success", time: "2 mins ago" },
    { id: "log-2", provider: "Replicate (Flux)", model: "flux-dev", outputs: 1, costUsd: 0.04, status: "success", time: "5 mins ago" },
    { id: "log-3", provider: "Gemini Vision Engine", model: "gemini-1.5-pro", outputs: 1, costUsd: 0.025, status: "success", time: "12 mins ago" },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col">
      <NavigationHeader />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-8">
        <div className="border-b border-panel-border pb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-purple-400" />
              SaaS Admin & AI Cost Operations
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Monitor AI provider costs, user generation logs, margin estimation, and subscription health.
            </p>
          </div>
          <span className="bg-red-950 text-red-400 border border-red-800 text-xs font-mono font-bold px-3 py-1 rounded">
            ADMIN AUTHORIZED
          </span>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-panel border border-panel-border p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block font-medium">{s.title}</span>
                  <span className="text-2xl font-extrabold text-white mt-1 block">{s.value}</span>
                  <span className="text-[10px] text-purple-400 block mt-1">{s.change}</span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Cost & Generation Logs Table */}
        <div className="bg-panel border border-panel-border rounded-2xl p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-400" />
            Live AI Generation Cost Metrics
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#090a0f] text-gray-400 uppercase font-mono text-[10px] border-b border-panel-border">
                <tr>
                  <th className="p-3">Log ID</th>
                  <th className="p-3">AI Provider</th>
                  <th className="p-3">Model</th>
                  <th className="p-3">Outputs</th>
                  <th className="p-3">Cost (USD)</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel-border">
                {costLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-panel-light/50">
                    <td className="p-3 font-mono text-purple-400">{log.id}</td>
                    <td className="p-3 font-semibold text-white">{log.provider}</td>
                    <td className="p-3">{log.model}</td>
                    <td className="p-3">{log.outputs} Images</td>
                    <td className="p-3 font-mono font-bold text-white">${log.costUsd.toFixed(3)}</td>
                    <td className="p-3">
                      <span className="bg-green-950 text-green-400 px-2 py-0.5 rounded text-[10px] font-bold">
                        {log.status}
                      </span>
                    </td>
                    <td className="p-3 text-gray-400">{log.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
