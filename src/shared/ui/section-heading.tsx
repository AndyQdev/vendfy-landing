interface Props {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  /** Sobre fondo oscuro. */
  oscuro?: boolean;
  alineacion?: "centro" | "izquierda";
}

export function SectionHeading({ badge, title, highlight, description, oscuro, alineacion = "centro" }: Props) {
  const centro = alineacion === "centro";
  return (
    <div className={`max-w-3xl mb-14 ${centro ? "mx-auto text-center" : ""}`}>
      {badge && (
        <p className={`text-sm font-semibold uppercase tracking-[0.14em] mb-4 ${oscuro ? "text-cian-claro" : "text-marca"}`}>
          {badge}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-balance ${
          oscuro ? "text-white" : "text-tinta"
        }`}
      >
        {title} {highlight && <span className={oscuro ? "text-cian-claro" : "text-marca"}>{highlight}</span>}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${oscuro ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
