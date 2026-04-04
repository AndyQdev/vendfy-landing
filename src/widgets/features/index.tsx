"use client";

import {
  ShoppingCart,
  Globe,
  BarChart3,
  Package,
  Bot,
  Sparkles,
  Truck,
  Users,
  Smartphone,
} from "lucide-react";
import { SectionHeading } from "@/shared/ui/section-heading";
import { AnimatedCard } from "@/shared/ui/animated-card";

const features = [
  {
    icon: ShoppingCart,
    title: "Punto de Venta Intuitivo",
    description: "Caja rapida con busqueda inteligente, categorias, multiples metodos de pago y facturacion. Vende en segundos.",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Tienda Online Incluida",
    description: "Cada tienda tiene su propia web publica con catalogo, carrito y checkout. Vende mientras duermes.",
    color: "#3B82F6",
  },
  {
    icon: Bot,
    title: "Bot de WhatsApp con IA",
    description: "Tu asistente virtual responde mensajes de clientes 24/7 basandose en tu inventario real. Nunca pierdas una venta.",
    color: "#8B5CF6",
  },
  {
    icon: Package,
    title: "Inventario Completo",
    description: "Control de stock, movimientos, compras por lote, alertas de stock bajo y costos. Todo automatizado.",
    color: "#F59E0B",
  },
  {
    icon: Sparkles,
    title: "Creacion con IA",
    description: "Sube una foto o archivo y la IA crea todos tus productos automaticamente con descripcion, precio y categorias.",
    color: "#EC4899",
  },
  {
    icon: BarChart3,
    title: "Reportes y Estadisticas",
    description: "Graficas de ventas, ganancias, productos top, clientes frecuentes y mas. Toma decisiones con datos reales.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Gestion de Clientes",
    description: "Base de datos de clientes con historial de compras, datos de contacto y segmentacion automatica.",
    color: "#6366F1",
  },
  {
    icon: Truck,
    title: "Delivery Integrado",
    description: "Pedidos con delivery, calculo de envio por distancia, seguimiento de estados y notificaciones al cliente.",
    color: "#EF4444",
  },
  {
    icon: Smartphone,
    title: "App Movil Nativa",
    description: "Gestiona tu negocio desde cualquier lugar con nuestra app movil. Todas las funcionalidades en tu bolsillo.",
    color: "#0EA5E9",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Funcionalidades"
          title="Todo lo que tu negocio"
          highlight="necesita"
          description="Una plataforma completa para digitalizar tu tienda. Sin complicaciones, sin curvas de aprendizaje."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <AnimatedCard key={feat.title} delay={i * 0.05}>
              <div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:bg-gray-50/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feat.color}12` }}
                >
                  <feat.icon className="w-6 h-6" style={{ color: feat.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0F172A]">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
