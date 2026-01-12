"use client";

import { motion } from "framer-motion";
import { FileText, Video, Mic, Image as ImageIcon, ShieldCheck, EyeOff, Lock } from "lucide-react";

export const ContributionFooter = () => {
  const types = [
    { label: "Texto", icon: FileText },
    { label: "Video", icon: Video },
    { label: "Audio", icon: Mic },
    { label: "Fotos", icon: ImageIcon },
  ];

  const security = [
    { label: "Cifrado de Conocimiento Cero", icon: ShieldCheck },
    { label: "Limpieza de Metadatos", icon: EyeOff },
    { label: "Envíos Anónimos", icon: Lock },
  ];

  return (
    <section id="contribute" className="py-24 bg-accent/5 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Comparte tu Historia</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Tu voz es una parte vital de la historia. Contribuye de forma segura a nuestro archivo colectivo. 
            Todos los envíos se procesan a través de una línea de seguridad forense de alto nivel.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {types.map((type) => (
              <button
                key={type.label}
                className="flex flex-col items-center gap-4 p-8 glass hover:bg-accent/10 hover:border-accent group transition-all"
              >
                <type.icon className="w-8 h-8 group-hover:text-accent transition-colors" />
                <span className="font-bold tracking-widest uppercase text-xs">{type.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {security.map((s) => (
              <div key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 text-[10px] uppercase tracking-widest text-muted-foreground">
                <s.icon className="w-3 h-3 text-accent" />
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <button className="px-12 py-6 bg-accent hover:bg-accent/90 text-white text-lg font-bold transition-all shadow-[0_0_30px_rgba(208,24,28,0.3)] hover:shadow-[0_0_50px_rgba(208,24,28,0.5)]">
            Contribuir de Forma Segura
          </button>
          
          <p className="mt-8 text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
            Al contribuir, aceptas nuestros protocolos de anonimato. Tu identidad nunca será almacenada ni compartida sin un consentimiento explícito de múltiples factores.
          </p>
        </div>
      </div>
    </section>
  );
};
