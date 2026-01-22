import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memoria Colectiva | Bóveda Forense y Archivo",
  description: "Un museo digital de alta seguridad y archivo de derechos humanos dedicado a la memoria colectiva y la verdad histórica.",
};

import AuthProvider from "@/components/AuthProvider";
import { createClient } from "@/lib/supabase/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const authUser = user ? {
    id: user.id,
    username: user.user_metadata.username || user.email?.split('@')[0] || 'usuario',
    avatar: user.user_metadata.avatar || `https://ui-avatars.com/api/?name=${user.email}&background=random`,
  } : null;

  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <AuthProvider initialUser={authUser}>
          <div className="grain" />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
