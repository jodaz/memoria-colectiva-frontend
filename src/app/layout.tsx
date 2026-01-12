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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
