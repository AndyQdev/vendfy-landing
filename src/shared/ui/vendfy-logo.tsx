interface Props {
  variant?: "icon" | "full" | "full-white";
  size?: number;
  className?: string;
}

export function VendfyLogo({ variant = "full", size = 40, className }: Props) {
  const iconSize = size;
  const frameColor = variant === "full-white" ? "#ffffff" : "#0F172A";
  const doorInner = variant === "full-white" ? "#0F172A" : "#ECFDF5";
  const handleColor = variant === "full-white" ? "#ffffff" : "#0F172A";
  const vendColor = variant === "full-white" ? "#ffffff" : "#0F172A";
  const fyColor = variant === "full-white" ? "#10B981" : "#059669";

  const icon = (
    <svg viewBox="0 0 120 120" width={iconSize} height={iconSize}>
      <rect x="13" y="48" width="82" height="58" rx="5" fill="#10B981" />
      <rect x="8" y="34" width="92" height="16" rx="4" fill={frameColor} />
      <path d="M8 50 Q18 60, 28 50 Q38 60, 48 50 Q58 60, 68 50 Q78 60, 88 50 Q96 60, 100 50" fill={frameColor} />
      <rect x="38" y="62" width="32" height="44" rx="5" fill={frameColor} />
      <rect x="41" y="65" width="26" height="41" rx="3.5" fill={doorInner} />
      <circle cx="61" cy="86" r="2.2" fill={handleColor} />
      <g>
        <path d="M98 12 L101 22 L111 25 L101 28 L98 38 L95 28 L85 25 L95 22Z" fill="#34D399" />
        <path d="M112 4 L114 9 L119 11 L114 13 L112 18 L110 13 L105 11 L110 9Z" fill="#34D399" opacity="0.55" />
        <circle cx="84" cy="16" r="2" fill="#34D399" opacity="0.3" />
      </g>
    </svg>
  );

  if (variant === "icon") return <span className={className}>{icon}</span>;

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      {icon}
      <span className="font-bold" style={{ fontSize: size * 0.55 }}>
        <span style={{ color: vendColor }}>Vend</span>
        <span style={{ color: fyColor }}>fy</span>
      </span>
    </span>
  );
}
