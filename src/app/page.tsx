import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { ArtGallery } from "@/components/ArtGallery";
import { Testimonials } from "@/components/Testimonials";
import { ContributionFooter } from "@/components/ContributionFooter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <StatsCounter />
      <FeaturedCollections />
      <ArtGallery />
      <Testimonials />
      <ContributionFooter />
      <Footer />
    </main>
  );
}
