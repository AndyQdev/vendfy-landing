"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, Rocket } from "lucide-react";
import { SectionHeading } from "@/shared/ui/section-heading";

const steps = [
  {
    num: "01",
    icon: UserPlus,
    title: "Crea tu cuenta",
    description: "Registrate en minutos. Configura tu tienda con nombre, categoria y listo. La IA te ayuda a completar todo.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Agrega tus productos",
    description: "Sube una foto, un Excel o un PDF y la IA crea todos tus productos automaticamente. O agregalos manualmente.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Empieza a vender",
    description: "Tu tienda online esta lista, tu caja de cobro configurada y el bot de WhatsApp activo. A vender!",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="3 simples pasos"
          title="Tan facil como"
          highlight="1, 2, 3"
          description="No necesitas ser experto en tecnologia. En minutos tendras todo tu negocio digitalizado."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#10B981]/30 to-transparent" />
              )}

              <div className="relative inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 mb-6">
                <step.icon className="w-10 h-10 text-[#10B981]" />
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#0F172A] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.num}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
