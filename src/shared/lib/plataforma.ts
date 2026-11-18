"use client";

import { useSyncExternalStore } from "react";

export type Plataforma = "windows" | "android" | "ios" | "mac" | "linux" | "otro";

/** El sistema del visitante, para recomendarle su descarga. */
export function detectarPlataforma(ua: string, tactil = 0): Plataforma {
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  // iPadOS se presenta como Mac, pero tiene pantalla táctil.
  if (/macintosh/i.test(ua) && tactil > 1) return "ios";
  if (/windows/i.test(ua)) return "windows";
  if (/macintosh|mac os x/i.test(ua)) return "mac";
  if (/linux|cros/i.test(ua)) return "linux";
  return "otro";
}

const sinCambios = () => () => {};

/**
 * null en el servidor y al hidratar (así el HTML no cambia); después, el
 * sistema del visitante. No cambia mientras la página está abierta.
 */
export function usePlataforma(): Plataforma | null {
  return useSyncExternalStore(
    sinCambios,
    () => detectarPlataforma(navigator.userAgent, navigator.maxTouchPoints ?? 0),
    () => null,
  );
}
