"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Clock } from "lucide-react";

export const StatsCounter = () => {
  const stats = [
    { label: "Víctimas Documentadas", value: "24,850", icon: Users },
    { label: "Artefactos Preservados", value: "112,400", icon: BookOpen },
    { label: "Años de Historia", value: "45 Años", icon: Clock },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="w-8 h-8 text-accent mb-4 opacity-80" />
              <h3 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter tabular-nums">
                {stat.value}
              </h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
