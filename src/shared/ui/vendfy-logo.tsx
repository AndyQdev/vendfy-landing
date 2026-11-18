interface Props {
  variant?: "icon" | "full" | "full-white";
  size?: number;
  className?: string;
}

/** El logo del panel: la tienda con el toldo, en cian y azul marino. */
export function VendfyLogo({ variant = "full", size = 40, className }: Props) {
  const blanco = variant === "full-white";
  const marco = blanco ? "#ffffff" : "#0F172A";
  const puerta = blanco ? "#0F172A" : "#ECFEFF";

  const icono = (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
      <rect x="13" y="48" width="82" height="58" rx="5" fill="#06B6D4" />
      <rect x="8" y="34" width="92" height="16" rx="4" fill={marco} />
      <path d="M8 50 Q18 60, 28 50 Q38 60, 48 50 Q58 60, 68 50 Q78 60, 88 50 Q96 60, 100 50" fill={marco} />
      <rect x="38" y="62" width="32" height="44" rx="5" fill={marco} />
      <rect x="41" y="65" width="26" height="41" rx="3.5" fill={puerta} />
      <circle cx="61" cy="86" r="2.2" fill={marco} />
      <path d="M98 12 L101 22 L111 25 L101 28 L98 38 L95 28 L85 25 L95 22Z" fill="#22D3EE" />
      <path d="M112 4 L114 9 L119 11 L114 13 L112 18 L110 13 L105 11 L110 9Z" fill="#22D3EE" opacity="0.5" />
      <circle cx="84" cy="16" r="2" fill="#22D3EE" opacity="0.3" />
    </svg>
  );

  if (variant === "icon") return <span className={className}>{icono}</span>;

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`} aria-label="Vendfy">
      {icono}
      <span className="font-display font-bold tracking-tight" style={{ fontSize: size * 0.6 }}>
        <span className={blanco ? "text-white" : "text-tinta"}>Vend</span>
        <span className={blanco ? "text-cian" : "text-marca-media"}>fy</span>
      </span>
    </span>
  );
}
