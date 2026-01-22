"use client";
import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { Testimonials } from "@/components/Testimonials";
import { ContributionFooter } from "@/components/ContributionFooter";
import { Footer } from "@/components/Footer";
import { usePostStore } from "@/store/postStore";

export default function Home() {
  const { fetchTestimonios } = usePostStore();

  useEffect(() => {
    fetchTestimonios();
  }, [fetchTestimonios]);

  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <StatsCounter />
      <Testimonials />
      <ContributionFooter />
      <Footer />
    </main>
  );
}
