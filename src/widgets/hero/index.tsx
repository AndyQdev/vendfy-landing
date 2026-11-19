"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mic } from "lucide-react";
import { BotonDescarga } from "@/features/descarga/boton-descarga";
import { URL_LOGIN, URL_REGISTRO } from "@/shared/config/sitio";
import { MarcoNavegador, MarcoTelefono } from "@/shared/ui/marcos";
import cajaVoz from "@/shared/assets/capturas/caja-voz.png";
import movilInicio from "@/shared/assets/capturas/movil-inicio.png";

const entrar = (retraso: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: retraso, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="fondo-puntos absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div {...entrar(0)}>
            <Link
              href="#voz"
              className="inline-flex items-center gap-2 rounded-full border border-marca/20 bg-marca-palida px-3.5 py-1.5 text-sm font-medium text-marca-oscura transition-colors hover:border-marca/40"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-marca text-white">
                <Mic className="h-3 w-3" aria-hidden="true" />
              </span>
              Nuevo: vende con la voz, «Oye Vendfy»
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.h1
            {...entrar(0.06)}
            className="mt-7 font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight text-tinta sm:text-6xl lg:text-7xl text-balance"
          >
            Tu tienda entera, <span className="text-marca">en una sola app</span>
          </motion.h1>

          <motion.p {...entrar(0.12)} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl text-pretty">
            Caja, inventario, pedidos, tienda online y WhatsApp con IA. Y un asistente que hace lo que le pides de palabra. En la web, en
            Windows y en tu celular.
          </motion.p>

          <motion.div {...entrar(0.18)} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={URL_REGISTRO}
              className="group inline-flex items-center gap-2 rounded-xl bg-tinta px-6 py-3 text-base font-semibold text-white shadow-lg shadow-tinta/15 transition-colors hover:bg-tinta-2"
            >
              Crear mi cuenta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <BotonDescarga />
          </motion.div>

          <motion.p {...entrar(0.22)} className="mt-5 text-sm text-slate-500">
            ¿Ya tienes cuenta?{" "}
            <a href={URL_LOGIN} className="font-semibold text-marca hover:text-marca-oscura underline-offset-4 hover:underline">
              Inicia sesión
            </a>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-6xl pb-16 sm:mt-20 lg:pb-24"
        >
          <div className="hidden md:block">
            <MarcoNavegador
              src={cajaVoz}
              prioridad
              alt="La Caja de Vendfy: la bola de Vendfy oyó «agrega dos huevos frescos y un café nescafé», los agregó y pregunta «¿Algo más?»"
            />
          </div>
          <div className="absolute -bottom-4 right-4 hidden w-[22%] md:block lg:-right-8">
            <MarcoTelefono>
              <Image src={movilInicio} alt="Vendfy en el celular: el inventario con el valor del stock" sizes="260px" className="block h-auto w-full" />
            </MarcoTelefono>
          </div>
          <div className="mx-auto w-[78%] max-w-xs md:hidden">
            <MarcoTelefono>
              <Image src={movilInicio} alt="Vendfy en el celular: el inventario con el valor del stock" sizes="320px" priority className="block h-auto w-full" />
            </MarcoTelefono>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
