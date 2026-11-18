import { ImageResponse } from "next/og";

// La imagen que se ve al compartir vendfy.shop (WhatsApp, Facebook, LinkedIn).
export const alt = "Vendfy: caja, inventario, tienda online y un asistente que obedece tu voz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0F172A", padding: 72, color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg viewBox="0 0 120 120" width={84} height={84}>
            <rect x="13" y="48" width="82" height="58" rx="5" fill="#06B6D4" />
            <rect x="8" y="34" width="92" height="16" rx="4" fill="#ffffff" />
            <path d="M8 50 Q18 60, 28 50 Q38 60, 48 50 Q58 60, 68 50 Q78 60, 88 50 Q96 60, 100 50" fill="#ffffff" />
            <rect x="38" y="62" width="32" height="44" rx="5" fill="#ffffff" />
            <rect x="41" y="65" width="26" height="41" rx="3.5" fill="#0F172A" />
            <path d="M98 12 L101 22 L111 25 L101 28 L98 38 L95 28 L85 25 L95 22Z" fill="#22D3EE" />
          </svg>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>
            <span>Vend</span>
            <span style={{ color: "#22D3EE" }}>fy</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Tu tienda entera, en una sola app</div>
          <div style={{ fontSize: 32, color: "#CBD5E1" }}>Caja, inventario, tienda online y WhatsApp con IA. Y «Oye Vendfy».</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#94A3B8" }}>Web · Windows · Android · iPhone</div>
      </div>
    ),
    size,
  );
}
