import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

/** Una captura real del panel dentro de una ventana de navegador. */
export function MarcoNavegador({
  src,
  alt,
  direccion = "vendfy.shop",
  prioridad,
  className,
  sizes = "(min-width: 1024px) 1100px, 100vw",
}: {
  src: StaticImageData;
  alt: string;
  direccion?: string;
  prioridad?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgb(15_23_42/0.35)] ${className ?? ""}`}>
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <span className="ml-3 hidden sm:block flex-1 max-w-sm rounded-md bg-white border border-slate-200 px-3 py-1 text-xs text-slate-500">
          {direccion}
        </span>
      </div>
      <Image src={src} alt={alt} priority={prioridad} sizes={sizes} placeholder="blur" className="block h-auto w-full" />
    </div>
  );
}

/** Una captura del panel en un teléfono. */
export function MarcoTelefono({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[2.6rem] border-[10px] border-tinta bg-tinta shadow-[0_30px_70px_-25px_rgb(15_23_42/0.5)] ${className ?? ""}`}
    >
      <div className="overflow-hidden rounded-[2rem] bg-superficie">
        <div className="flex h-6 items-center justify-center bg-superficie" aria-hidden="true">
          <span className="h-1.5 w-16 rounded-full bg-tinta/80" />
        </div>
        {children}
      </div>
    </div>
  );
}
