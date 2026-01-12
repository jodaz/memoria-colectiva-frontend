"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const FeaturedCollections = () => {
  const collections = [
    {
      title: "Social Resistance",
      description: "Visual documentation of street protests, strikes, and movements for democratic change.",
      image: "/images/resistance.png",
      href: "#",
    },
    {
      title: "Civil Rights Archive",
      description: "A digital repository of original documents, letters, and legislative papers from the civil rights era.",
      image: "/images/civil_rights.png",
      href: "#",
    },
    {
      title: "Historical Artifacts",
      description: "Personal items and historical objects preserved to tell the human side of history.",
      image: "/images/artifacts.png",
      href: "#",
    },
  ];

  return (
    <section id="archive" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-4">Core Collections</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Safeguarding the Fragments of Yesterday</h3>
          </div>
          <button className="text-sm font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
            View All Collections
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, idx) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {collection.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {collection.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
