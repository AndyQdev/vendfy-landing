import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { VendfyLogo } from "@/shared/ui/vendfy-logo";
import { Footer } from "@/widgets/footer";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, subtitle, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      {/* Header simple */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-tinta transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Link>
            <Link href="/" className="flex-shrink-0">
              <VendfyLogo size={28} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero del documento */}
      <section className="bg-gradient-to-b from-marca-palida to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-marca/10 text-marca-oscura text-xs font-semibold mb-4">
            Documento legal
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tinta tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">{subtitle}</p>
          <p className="mt-2 text-sm text-gray-500">Última actualización: {lastUpdated}</p>
        </div>
      </section>

      {/* Contenido */}
      <main className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <article className="legal-prose">{children}</article>
        </div>
      </main>

      <Footer />
    </>
  );
}

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ number, title, children }: SectionProps) {
  return (
    <section className="mb-10 scroll-mt-20" id={`seccion-${number}`}>
      <h2 className="text-xl sm:text-2xl font-bold text-tinta mb-4 flex items-baseline gap-3">
        <span className="text-marca text-base font-mono">{number.padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

export function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="text-base sm:text-lg font-semibold text-tinta mb-2">{title}</h3>
      <div className="space-y-3 text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2 ml-1">{children}</ul>;
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-marca flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-tinta">{children}</strong>;
}

export function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-l-4 border-marca bg-marca-palida p-4 text-sm sm:text-base text-marca-oscura font-medium">
      {children}
    </div>
  );
}
