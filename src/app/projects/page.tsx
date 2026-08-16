'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NavigationHeader } from '@/components/NavigationHeader';
import { FolderPlus, Plus, Camera, Shirt, Clock, MoreVertical, Trash2 } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    {
      id: 'proj-1',
      name: 'Black Oversized T-Shirt Drop',
      garmentsCount: 3,
      generationsCount: 12,
      updatedAt: '2 hours ago',
      thumbnail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'proj-2',
      name: 'Streetwear Heavyweight Hoodie',
      garmentsCount: 2,
      generationsCount: 8,
      updatedAt: '1 day ago',
      thumbnail: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 'proj-3',
      name: 'Summer Linen Apparel Collection',
      garmentsCount: 4,
      generationsCount: 22,
      updatedAt: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400&auto=format&fit=crop',
    },
  ]);

  const [newProjectName, setNewProjectName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName) return;

    setProjects([
      {
        id: `proj-${Date.now()}`,
        name: newProjectName,
        garmentsCount: 0,
        generationsCount: 0,
        updatedAt: 'Just now',
        thumbnail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400&auto=format&fit=crop',
      },
      ...projects,
    ]);
    setNewProjectName('');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col">
      <NavigationHeader />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-panel-border pb-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <FolderPlus className="w-6 h-6 text-purple-400" />
              Apparel Projects
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Organize your clothing lines, model references, photoshoots, and mockups.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Create New Project
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-panel border border-panel-border rounded-xl overflow-hidden hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <img
                  src={proj.thumbnail}
                  alt={proj.name}
                  className="w-full h-44 object-cover border-b border-panel-border"
                />
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-sm text-white">{proj.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{proj.garmentsCount} Apparel Items</span>
                    <span>•</span>
                    <span>{proj.generationsCount} Outputs</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-panel-border bg-[#090a0f]/40 flex items-center justify-between text-xs">
                <span className="text-gray-500">Updated {proj.updatedAt}</span>
                <Link href="/studio" className="text-purple-400 font-bold hover:underline">
                  Open Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for New Project */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-panel border border-panel-border rounded-2xl p-6 max-w-md w-full space-y-4">
              <h3 className="text-base font-bold text-white">Create New Apparel Project</h3>
              <form onSubmit={handleCreateProject} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Project Name</label>
                  <input
                    type="text"
                    required
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    placeholder="e.g. Winter Streetwear Drop 2026"
                    className="w-full bg-[#090a0f] border border-panel-border rounded-lg p-2.5 text-white focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-panel-light text-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-600 text-white font-bold rounded-lg"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
