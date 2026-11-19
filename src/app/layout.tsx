import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { SITIO_URL } from "@/shared/config/sitio";
import { Movimiento } from "@/shared/ui/movimiento";
import { Asistente } from "@/widgets/asistente";
import "./globals.css";

// Las mismas letras del panel: Sora para títulos, Plus Jakarta Sans para el texto.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });

const descripcion =
  "Caja, inventario, tienda online, WhatsApp con IA y un asistente que obedece tu voz. Vendfy funciona en la web, en Windows y en tu celular.";

export const metadata: Metadata = {
  metadataBase: new URL(SITIO_URL),
  title: {
    default: "Vendfy · Vende, cobra y controla tu tienda en un solo lugar",
    template: "%s · Vendfy",
  },
  description: descripcion,
  keywords: ["punto de venta", "caja", "inventario", "tienda online", "Bolivia", "WhatsApp", "asistente por voz"],
  openGraph: {
    title: "Vendfy · Vende, cobra y controla tu tienda en un solo lugar",
    description: descripcion,
    url: SITIO_URL,
    siteName: "Vendfy",
    locale: "es_BO",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${sora.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <Movimiento>{children}</Movimiento>
        <Asistente />
      </body>
    </html>
  );
}
