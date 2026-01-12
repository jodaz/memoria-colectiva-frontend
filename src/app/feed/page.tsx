'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { MessageSquare, Map as MapIcon, Clock, Share2, MoreHorizontal, MapPin, Plus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { usePostStore } from '@/store/postStore';
import { type Testimonio } from '@/data/testimonios';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState<'recientes' | 'mapa'>('recientes');
  const { testimonios } = usePostStore();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-24 pb-8 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4 tracking-tight">
              Archivo Vivo
            </h1>
            <p className="text-gray-400 max-w-xl text-lg">
              Explora testimonios, evidencias y la historia documentada de nuestra resistencia.
            </p>
          </div>
          
          {/* Tabs & Create Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('recientes')}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all font-medium",
                  activeTab === 'recientes' 
                    ? "bg-accent text-white shadow-lg shadow-accent/20" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                <Clock className="w-4 h-4" />
                Recientes
              </button>
              <button
                onClick={() => setActiveTab('mapa')}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all font-medium",
                  activeTab === 'mapa' 
                    ? "bg-accent text-white shadow-lg shadow-accent/20" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                <MapIcon className="w-4 h-4" />
                Mapa
              </button>
            </div>

            <Link 
              href="/posts/new"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-2xl font-bold hover:bg-gray-200 transition-all shadow-lg shadow-white/5"
            >
              <Plus className="w-4 h-4" />
              Crear testimonio
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          {activeTab === 'recientes' ? (
            <motion.div
              key="recientes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonios.map((item) => (
                <TestimonioCard key={item.id} item={item} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="mapa"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full aspect-video bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center p-12 text-center"
            >
              <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mb-6">
                <MapIcon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mapa Interactivo próximamente</h3>
              <p className="text-gray-400 max-w-md">
                Estamos trabajando en una visualización geoespacial de todos los testimonios recolectados.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function TestimonioCard({ item }: { item: Testimonio }) {
  return (
    <Link href={`/post/${item.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all flex flex-col"
      >
        {item.image && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
          </div>
        )}
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-blue-600 flex items-center justify-center text-[10px] font-bold">
                {item.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium">{item.author}</p>
                <p className="text-[10px] text-gray-500">{item.date}</p>
              </div>
            </div>
            <span className="text-gray-500">
              <MoreHorizontal className="w-5 h-5" />
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          
          <div className="flex items-center gap-1.5 text-gray-500 mb-3">
            <MapPin className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-wider">{item.location}</span>
          </div>

          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed mb-6 flex-grow">
            {item.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-gray-400 transition-colors text-xs font-medium">
                <MessageSquare className="w-4 h-4" />
                Comentar
              </span>
            </div>
            <span className="text-gray-400 transition-colors">
              <Share2 className="w-4 h-4" />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
