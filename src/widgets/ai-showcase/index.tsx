"use client";

import { motion } from "framer-motion";
import { Sparkles, FileText, Image, MessageSquare, Wand2 } from "lucide-react";
import { SectionHeading } from "@/shared/ui/section-heading";
import { VendfyLogo } from "@/shared/ui/vendfy-logo";

const aiFeatures = [
  {
    icon: FileText,
    title: "Sube un archivo",
    description: "PDF, Excel, CSV o imagen. La IA extrae todos los productos automaticamente.",
  },
  {
    icon: Wand2,
    title: "Enriquecimiento inteligente",
    description: "Genera descripciones, etiquetas y especificaciones con un click.",
  },
  {
    icon: Image,
    title: "Desde una foto",
    description: "Toma una foto de tu inventario y la IA reconoce y crea cada producto.",
  },
  {
    icon: MessageSquare,
    title: "Bot de WhatsApp",
    description: "Responde consultas de clientes automaticamente con info real de tu inventario.",
  },
];

export function AiShowcase() {
  return (
    <section id="ia" className="py-24 lg:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#10B981]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 text-[#34D399] px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Inteligencia Artificial
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            La IA trabaja{" "}
            <span className="text-[#10B981] glow-text">por ti</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-400"
          >
            Deja que la inteligencia artificial se encargue de lo tedioso.
            Tu enfocate en vender.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#10B981]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center mb-4 group-hover:bg-[#10B981]/20 transition-colors">
                <feat.icon className="w-6 h-6 text-[#34D399]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Screenshot placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-white/10 overflow-hidden glow-emerald"
        >
          {/* TODO: Reemplazar con screenshot del modal IA */}
          <div className="aspect-[16/7] bg-[#1E293B] flex items-center justify-center">
            <div className="text-center">
              <VendfyLogo variant="icon" size={48} className="mx-auto mb-3" />
              {/* <p className="text-gray-500 text-sm">Screenshot del modal de creacion con IA</p> */}
              {/* <p className="text-gray-600 text-xs mt-1">Tamano recomendado: 1920x840</p> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
