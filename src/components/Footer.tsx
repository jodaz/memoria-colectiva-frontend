import Link from "next/link";
import { Twitter, Instagram, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-playfair text-2xl font-bold mb-6 block">Memoria Colectiva</Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Un proyecto institucional sin fines de lucro dedicado a la preservación forense 
              de la verdad histórica y la documentación de los derechos humanos de los siglos XX y XXI.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Navegación</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#archive" className="hover:text-white transition-colors">Archivo Digital</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Arte y Murales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Línea del Tiempo</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Voces de la Verdad</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Seguridad</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-white transition-colors">Protocolo de Cifrado</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Política de Metadatos</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Capas de Anonimato</Link></li>
              <li><button className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4" /> Contacto Seguro</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent">Aliados</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-10 border border-white/5 bg-white/5 grayscale opacity-50 flex items-center justify-center text-[10px] tracking-tighter">HUMAN RIGHTS WATCH</div>
              <div className="h-10 border border-white/5 bg-white/5 grayscale opacity-50 flex items-center justify-center text-[10px] tracking-tighter">UNESCO COV</div>
              <div className="h-10 border border-white/5 bg-white/5 grayscale opacity-50 flex items-center justify-center text-[10px] tracking-tighter">DIGITAL VAULT CO</div>
              <div className="h-10 border border-white/5 bg-white/5 grayscale opacity-50 flex items-center justify-center text-[10px] tracking-tighter">MEMORIAL INT</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
          <p>© 2026 Memoria Colectiva. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos de Servicio</Link>
            <Link href="#" className="hover:text-white transition-colors">Licencia</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
