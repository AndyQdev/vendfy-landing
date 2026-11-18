import { Navbar } from "@/widgets/navbar";
import { Hero } from "@/widgets/hero";
import { Plataformas } from "@/widgets/plataformas";
import { Features } from "@/widgets/features";
import { Voz } from "@/widgets/voz";
import { Descargas } from "@/widgets/descargas";
import { HowItWorks } from "@/widgets/how-it-works";
import { Pricing } from "@/widgets/pricing";
import { Preguntas } from "@/widgets/preguntas";
import { CTA } from "@/widgets/cta";
import { Footer } from "@/widgets/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Plataformas />
        <Features />
        <Voz />
        <Descargas />
        <HowItWorks />
        <Pricing />
        <Preguntas />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
