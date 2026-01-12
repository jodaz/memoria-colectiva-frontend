import Link from "next/link";
import { Twitter, Instagram, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-playfair text-2xl font-bold mb-6 block">Collective Memory</Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A non-profit institutional project dedicated to the forensic preservation 
              of historical truth and human rights documentation of the 20th and 21st centuries.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#archive" className="hover:text-white transition-colors">Digital Archive</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Art & Murals</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Historical Timeline</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Voices of Truth</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Security</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-white transition-colors">Encryption Protocol</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Metadata Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Anonymity Layers</Link></li>
              <li><button className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4" /> Secure Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Partners</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-10 border border-white/5 bg-white/5 grayscale opacity-50 flex items-center justify-center text-[10px] tracking-tighter">HUMAN RIGHTS WATCH</div>
              <div className="h-10 border border-white/5 bg-white/5 grayscale opacity-50 flex items-center justify-center text-[10px] tracking-tighter">UNESCO COV</div>
              <div className="h-10 border border-white/5 bg-white/5 grayscale opacity-50 flex items-center justify-center text-[10px] tracking-tighter">DIGITAL VAULT CO</div>
              <div className="h-10 border border-white/5 bg-white/5 grayscale opacity-50 flex items-center justify-center text-[10px] tracking-tighter">MEMORIAL INT</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
          <p>© 2026 Collective Memory. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">License</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
