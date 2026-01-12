"use client";

import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rafael M.",
      role: "Survivor of 1982 Movements",
      quote: "Being able to store these digital memories in a place that feels as secure as a physical vault gives us the peace we need to continue telling our story.",
    },
    {
      name: "Elena G.",
      role: "Human Rights Lawyer",
      quote: "Metadata scrubbing and zero-knowledge encryption are not just features here; they are the tools of survival for those still under threat.",
    },
    {
      name: "Carlos V.",
      role: "Grandson of a 'Missing' Person",
      quote: "I found a photo of my grandfather here that no one in our family had seen. This archive is bringing back pieces of our soul that were stolen.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-4">Voices of Truth</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Testimonials of Memory</h3>
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
