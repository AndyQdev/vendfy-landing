"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/shared/ui/section-heading";

const testimonials = [
  {
    name: "Maria Lopez",
    role: "Dueña de Boutique Eleganza",
    text: "Antes perdia horas anotando ventas en cuadernos. Con Vendfy tengo todo en un solo lugar: inventario, ventas y hasta mi propia tienda online. Mis ventas crecieron un 40% en el primer mes.",
    stars: 5,
    avatar: "ML",
  },
  {
    name: "Carlos Gutierrez",
    role: "Ferreteria El Constructor",
    text: "Tengo mas de 3000 productos y Vendfy me permite controlar todo. La funcion de crear productos con IA me ahorro semanas de trabajo. Lo recomiendo totalmente.",
    stars: 5,
    avatar: "CG",
  },
  {
    name: "Ana Fernandez",
    role: "Libreria y Papeleria Don Bosco",
    text: "El bot de WhatsApp es increible. Mis clientes preguntan por productos a cualquier hora y el bot les responde al instante con precios y disponibilidad real.",
    stars: 5,
    avatar: "AF",
  },
  {
    name: "Roberto Mendez",
    role: "TechStore Bolivia",
    text: "La caja es super intuitiva, mis empleados aprendieron a usarla en 5 minutos. Las estadisticas me ayudan a saber que productos pedir y cuales dejar de comprar.",
    stars: 5,
    avatar: "RM",
  },
  {
    name: "Patricia Rojas",
    role: "Emprendedora - Accesorios Paty",
    text: "Soy emprendedora y vendo por redes sociales. Vendfy me dio una tienda profesional sin saber nada de programacion. Ahora mis clientes compran solos desde la web.",
    stars: 5,
    avatar: "PR",
  },
  {
    name: "Diego Suarez",
    role: "Repuestos AutoMax",
    text: "Manejamos un inventario enorme de repuestos. La busqueda rapida y el control de stock son exactamente lo que necesitabamos. Ademas el soporte es excelente.",
    stars: 5,
    avatar: "DS",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonios"
          title="Negocios que ya"
          highlight="confian en Vendfy"
          description="Mas de 200 negocios en Bolivia ya digitalizaron sus operaciones con nuestra plataforma."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#10B981]/20 mb-3" />

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center text-white text-xs font-bold">
                  {t.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#0F172A]">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
