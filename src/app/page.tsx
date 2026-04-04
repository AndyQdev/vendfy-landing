import { Navbar } from "@/widgets/navbar";
import { Hero } from "@/widgets/hero";
import { Features } from "@/widgets/features";
import { HowItWorks } from "@/widgets/how-it-works";
import { AiShowcase } from "@/widgets/ai-showcase";
import { Pricing } from "@/widgets/pricing";
import { Testimonials } from "@/widgets/testimonials";
import { CTA } from "@/widgets/cta";
import { Footer } from "@/widgets/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AiShowcase />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
