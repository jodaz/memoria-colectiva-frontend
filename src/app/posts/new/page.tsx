'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { usePostStore } from '@/store/postStore';
import { ArrowLeft, Image as ImageIcon, Video, MapPin, Send, Trash2, ShieldCheck, Lock } from 'lucide-react';

const VENEZUELAN_CITIES = [
  "Caracas",
  "Maracaibo",
  "Valencia",
  "Barquisimeto",
  "Maracay",
  "Ciudad Guayana",
  "San Cristóbal",
  "Maturín",
  "Barcelona",
  "Mérida",
  "Cumana",
  "Barinas",
  "Exilio (Fuera de Venezuela)"
];

export default function NewPostPage() {
  const router = useRouter();
  const { addTestimonio } = usePostStore();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    location: '',
  });
  const [media, setMedia] = useState<{ type: 'image' | 'video', url: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const file = e.target.files?.[0];
    if (file) {
      // Create object URL for preview
      const url = URL.createObjectURL(file);
      setMedia([...media, { type, url }]);
    }
  };

  const removeMedia = (index: number) => {
    setMedia(media.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.location) return;

    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    const newId = Date.now();
    const newPost = {
      id: newId,
      title: formData.title,
      author: "Usuario Anónimo", // Should ideally come from authStore
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
      location: formData.location,
      description: formData.content,
      image: media.find(m => m.type === 'image')?.url,
      assets: media.map(m => m.url)
    };

    addTestimonio(newPost);

    router.push(`/post/${newId}`);
  };

  return (
    <main className="min-h-screen bg-[#05070c] text-white selection:bg-accent">
      <Navbar />
      
      <div className="pt-24 pb-20 container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al feed
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Background Gradient Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10" />
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
              <Send className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Crear Testimonio</h1>
              <p className="text-gray-400 text-sm">Tu voz es una prueba indestructible de la historia.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Título del Testimonio</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Ej. La noche en que las calles hablaron"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-lg font-medium"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Ubicación de los Hechos</label>
              <div className="relative">
                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#0a0a0a]">Selecciona una ciudad</option>
                  {VENEZUELAN_CITIES.map(city => (
                    <option key={city} value={city} className="bg-[#0a0a0a]">{city}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Relato de los Hechos</label>
              <textarea
                required
                rows={6}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Escribe aquí tu testimonio lo más detallado posible..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none leading-relaxed"
              />
            </div>

            {/* Media Upload */}
            <div className="space-y-4">
              <label className="text-sm font-medium text-gray-400 ml-1">Evidencia Multimedia (Imágenes/Video)</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex-1 min-w-[140px] cursor-pointer group">
                  <div className="h-28 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                    <ImageIcon className="w-6 h-6 text-gray-500 group-hover:text-accent" />
                    <span className="text-xs font-bold text-gray-500 group-hover:text-accent uppercase tracking-widest">Imagen</span>
                  </div>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleMediaUpload(e, 'image')} />
                </label>
                
                <label className="flex-1 min-w-[140px] cursor-pointer group">
                  <div className="h-28 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                    <Video className="w-6 h-6 text-gray-500 group-hover:text-accent" />
                    <span className="text-xs font-bold text-gray-500 group-hover:text-accent uppercase tracking-widest">Video</span>
                  </div>
                  <input type="file" accept="video/*" className="hidden" onChange={(e) => handleMediaUpload(e, 'video')} />
                </label>
              </div>

              {/* Media Previews */}
              {media.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                  {media.map((item, index) => (
                    <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group">
                      {item.type === 'image' ? (
                        <img src={item.url} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <video src={item.url} className="w-full h-full object-cover" />
                      )}
                      <button
                        type="button"
                        onClick={() => removeMedia(index)}
                        className="absolute top-2 right-2 p-1.5 bg-black/60 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Security Notice */}
            <div className="p-6 bg-accent/5 border border-accent/10 rounded-2xl flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-accent mb-1 uppercase tracking-widest">Seguridad Garantizada</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Tu envío será procesado con cifrado de conocimiento cero y limpieza automática de metadatos.
                </p>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-accent hover:bg-accent/90 disabled:bg-gray-800 disabled:cursor-not-allowed text-white text-lg font-bold rounded-2xl transition-all shadow-[0_0_30px_rgba(208,24,28,0.2)] flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>Publicando...</span>
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  <span>Publicar Testimonio</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
