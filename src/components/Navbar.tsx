"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/store/authStore";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Archivo", href: "/feed#archive" },
    { name: "Galería", href: "/feed#gallery" },
    { name: "Testimonios", href: "/feed" },
    { name: "Contribuir", href: "/feed#contribute" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 text-xs">MC</span>
          </div>
          <span className="font-playfair text-2xl">Memoria Colectiva</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {isAuthenticated && (
            <Link 
              href="/profile"
              className="text-sm font-medium flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              <User className="w-4 h-4" />
              Mi Perfil
            </Link>
          )}

          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
            <span>ES</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {isAuthenticated && (
                <Link
                  href="/profile"
                  className="text-lg font-medium text-white flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="w-5 h-5" />
                  Mi Perfil
                </Link>
              )}

              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Idioma:</span>
                <button className="text-accent font-bold">ES</button>
                <span className="text-white/20">|</span>
                <button className="text-muted-foreground">EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
