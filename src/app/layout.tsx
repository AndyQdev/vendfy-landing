import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vendfy - Tu tienda completa en 2 clicks",
  description:
    "Inventario, punto de venta, tienda online, bot de WhatsApp con IA y reportes. Todo lo que necesitas para digitalizar tu negocio.",
  keywords: [
    "punto de venta",
    "tienda online",
    "inventario",
    "ecommerce",
    "Bolivia",
    "bot WhatsApp",
    "inteligencia artificial",
  ],
  openGraph: {
    title: "Vendfy - Tu tienda completa en 2 clicks",
    description:
      "Inventario, punto de venta, tienda online, bot de WhatsApp con IA y reportes. Digitaliza tu negocio hoy.",
    url: "https://vendfy.shop",
    siteName: "Vendfy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
