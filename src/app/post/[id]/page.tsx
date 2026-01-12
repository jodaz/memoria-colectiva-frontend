'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ArrowLeft, MapPin, Calendar, User, Share2, MessageSquare, Download } from 'lucide-react';
import { TESTIMONIOS } from '@/data/testimonios';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  
  const post = TESTIMONIOS.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Post no encontrado</h1>
        <button 
          onClick={() => router.push('/feed')}
          className="flex items-center gap-2 text-accent hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al feed
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden"
        >
          {/* Main Info Header */}
          <div className="p-8 md:p-12 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                <Calendar className="w-4 h-4 text-accent" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                <MapPin className="w-4 h-4 text-accent" />
                {post.location}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                <User className="w-4 h-4 text-accent" />
                {post.author}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-wrap">
                {post.description}
              </p>
            </div>
          </div>

          {/* Assets Section */}
          <div className="p-8 md:p-12 bg-white/[0.02]">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              Evidencias y Archivos
              <span className="text-sm font-normal text-gray-500 bg-white/5 px-2 py-0.5 rounded-md">
                {post.assets?.length || 0}
              </span>
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {post.assets?.map((asset, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <img 
                    src={asset} 
                    alt={`Asset ${index + 1}`}
                    className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 hover:bg-black/80 transition-all">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              
              {!post.assets?.length && (
                <div className="py-12 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
                  <p className="text-gray-500">No hay archivos multimedia adjuntos a este testimonio.</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-8 flex items-center justify-between bg-white/5 border-t border-white/10">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">Comentar</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Compartir</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
