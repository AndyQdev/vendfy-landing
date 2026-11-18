import type { Metadata } from "next";
import { Navbar } from "@/widgets/navbar";
import { Instalacion } from "@/widgets/instalacion";
import { Footer } from "@/widgets/footer";

export const metadata: Metadata = {
  title: "Descargar",
  description: "Descarga Vendfy para Windows y Android, instálalo en iPhone y iPad desde Safari o úsalo en el navegador. Paso a paso.",
  alternates: { canonical: "/descargar" },
};

export default function DescargarPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Instalacion />
      </main>
      <Footer />
    </>
  );
}
