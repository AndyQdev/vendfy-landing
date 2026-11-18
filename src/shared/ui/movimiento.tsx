"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Animaciones suaves, y ninguna si la persona pidió menos movimiento en su sistema. */
export function Movimiento({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
