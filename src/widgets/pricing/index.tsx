"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Building2 } from "lucide-react";
import { SectionHeading } from "@/shared/ui/section-heading";

const WA_LINK = "https://wa.me/59171890091?text=Hola%2C%20me%20interesa%20el%20plan%20";

const plans = [
  {
    name: "Emprendedor",
    price: "149",
    period: "/mes",
    description: "Ideal para negocios que recien empiezan a digitalizarse.",
    icon: Zap,
    popular: false,
    features: [
      "1 tienda online",
      "Punto de venta completo",
      "Inventario ilimitado",
      "Reportes y estadisticas",
      "App movil incluida",
      "Gestion de clientes",
      "Soporte por WhatsApp",
    ],
    extras: [],
  },
  {
    name: "Profesional",
    price: "299",
    period: "/mes",
    description: "Para negocios en crecimiento que necesitan mas herramientas.",
    icon: Star,
    popular: true,
    features: [
      "Hasta 3 tiendas online",
      "Todo del plan Emprendedor",
      "Creacion de productos con IA",
      "Enriquecimiento IA (descripcion, tags)",
      "Bot de WhatsApp con IA",
      "Temas personalizados",
      "Delivery con calculo por distancia",
      "Soporte prioritario",
    ],
    extras: [],
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    period: "",
    description: "Solucion a medida para empresas con multiples sucursales.",
    icon: Building2,
    popular: false,
    features: [
      "Tiendas ilimitadas",
      "Todo del plan Profesional",
      "Multi-usuario con roles",
      "API personalizada",
      "Integraciones a medida",
      "Capacitacion del equipo",
      "Gerente de cuenta dedicado",
      "SLA garantizado",
    ],
    extras: [],
  },
];

const addons = [
  { name: "Bot de WhatsApp con IA", price: "99/mes", description: "Respuestas automaticas 24/7 basadas en tu inventario" },
  { name: "Paquete IA Premium", price: "79/mes", description: "Creacion y enriquecimiento ilimitado de productos con IA" },
];

export function Pricing() {
  return (
    <section id="precios" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Precios"
          title="Planes para cada"
          highlight="negocio"
          description="Sin sorpresas, sin letras pequenas. Elige el plan que mejor se adapte a tu negocio."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-[#0F172A] text-white border-2 border-[#10B981] shadow-xl shadow-[#10B981]/10 scale-[1.03]"
                  : "bg-white border border-gray-200 hover:border-gray-300"
              } transition-all`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#10B981] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Mas Popular
                </span>
              )}

              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  plan.popular ? "bg-[#10B981]/20" : "bg-[#ECFDF5]"
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-[#34D399]" : "text-[#10B981]"}`} />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.popular ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                {plan.price === "Personalizado" ? (
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                ) : (
                  <>
                    <span className={`text-sm ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>Bs. </span>
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className={`text-sm ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>{plan.period}</span>
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-[#34D399]" : "text-[#10B981]"}`} />
                    <span className={`text-sm ${plan.popular ? "text-gray-200" : "text-gray-600"}`}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${WA_LINK}${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold py-3.5 rounded-xl transition-all ${
                  plan.popular
                    ? "bg-[#10B981] hover:bg-[#059669] text-white"
                    : "bg-[#0F172A] hover:bg-[#1E293B] text-white"
                }`}
              >
                Contactar Ventas
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-center text-lg font-bold mb-6 text-gray-400">Complementos opcionales</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50"
              >
                <div className="w-2 h-2 rounded-full bg-[#10B981] mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">
                    {addon.name}{" "}
                    <span className="text-[#10B981] font-semibold">Bs. {addon.price}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{addon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
