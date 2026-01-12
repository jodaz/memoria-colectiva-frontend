"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

export const ArtGallery = () => {
  const artworks = [
    { title: "Llama de la Esperanza", artist: "María S.", image: "/images/gallery_1.png", size: "large" },
    { title: "Los Rostros Ausentes", artist: "Colectivo Muralista", image: "/images/gallery_2.png", size: "medium" },
    { title: "Trauma Redactado", artist: "Sobreviviente Anónimo", image: "/images/gallery_3.png", size: "medium" },
    { title: "Llama Eterna", artist: "J. Doe", image: "/images/artifacts.png", size: "small" },
  ];

  return (
    <section id="gallery" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-4">Expresión Artística</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">El Arte de la Resiliencia</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.map((art, idx) => (
            <motion.div
              key={art.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer break-inside-avoid"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-bold text-lg">{art.title}</h4>
                      <p className="text-sm text-gray-400">Por {art.artist}</p>
                    </div>
                    <Maximize2 className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
