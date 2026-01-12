"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] opacity-10" />
        <div className="absolute inset-0 bg-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs tracking-widest uppercase text-muted-foreground animate-pulse">
            <Lock className="w-3 h-3 text-accent" />
            <span>Archivo Forense Cifrado</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-tighter text-white">
            NUNCA <br />
            <span className="text-accent italic font-playfair">OLVIDAREMOS</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Preservando la memoria histórica, documentando los derechos humanos y salvaguardando la voz colectiva de la resistencia en una bóveda digital indestructible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/feed" className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold transition-all flex items-center justify-center gap-2 group">
              Explorar Archivo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/login" className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold transition-all flex items-center justify-center gap-2">
              Enviar Evidencia
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-10 w-[1px] bg-white/5 hidden lg:block" />
      <div className="absolute inset-y-0 right-10 w-[1px] bg-white/5 hidden lg:block" />
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Desplazar para entrar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};
