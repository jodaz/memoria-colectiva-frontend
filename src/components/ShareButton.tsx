'use client';

import React, { useState } from 'react';
import { Share2, Twitter, Facebook, Link as LinkIcon, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ShareButtonProps {
  url: string;
  title: string;
  className?: string;
}

export function ShareButton({ url, title, className }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShareX = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
    window.open(xUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleShareFacebook = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(fbUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="p-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
      >
        <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium hidden sm:inline">Compartir</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute bottom-full right-0 mb-4 z-50 min-w-[200px] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl p-2 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Compartir</span>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4 text-gray-500 hover:text-white" />
                </button>
              </div>
              
              <button
                onClick={handleShareX}
                className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition-colors text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Twitter className="w-4 h-4 text-white group-hover:text-accent" />
                </div>
                <span className="text-sm font-medium">Compartir en X</span>
              </button>

              <button
                onClick={handleShareFacebook}
                className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition-colors text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Facebook className="w-4 h-4 text-white group-hover:text-blue-500" />
                </div>
                <span className="text-sm font-medium">Facebook</span>
              </button>

              <button
                onClick={handleCopy}
                className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-white/5 rounded-xl transition-colors text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <LinkIcon className="w-4 h-4 text-white group-hover:text-green-500" />
                  )}
                </div>
                <span className="text-sm font-medium">
                  {copied ? '¡Copiado!' : 'Copiar enlace'}
                </span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
