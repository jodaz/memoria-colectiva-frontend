"use client";

import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rafael M.",
      role: "Sobreviviente de los Movimientos de 1982",
      quote: "Poder almacenar estos recuerdos digitales en un lugar que se siente tan seguro como una bóveda física nos da la paz que necesitamos para seguir contando nuestra historia.",
    },
    {
      name: "Elena G.",
      role: "Abogada de Derechos Humanos",
      quote: "La limpieza de metadatos y el cifrado de conocimiento cero no son solo funciones aquí; son las herramientas de supervivencia para aquellos que aún están bajo amenaza.",
    },
    {
      name: "Carlos V.",
      role: "Nieto de una Persona Desaparecida",
      quote: "Encontré una foto de mi abuelo aquí que nadie en nuestra familia había visto. Este archivo está recuperando pedazos de nuestra alma que fueron robados.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-4">Voces de la Verdad</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Testimonios de Memoria</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 relative group hover:border-accent/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-accent mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              <p className="text-lg italic text-gray-200 mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
              
              <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                <Play className="w-3 h-3 text-white ml-0.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
