/**
 * Los instaladores que se bajan desde la landing.
 *
 * Los archivos no van en git (pesan): se copian a public/descargas/ al
 * publicar (scripts/publicar.sh los trae de C:\Trabajos\Ecommerce\instaladores).
 */
export const DESCARGAS = {
  windows: {
    archivo: "/descargas/Vendfy-Windows-setup.exe",
    version: "0.1.0",
    peso: "2 MB",
    requisitos: "Windows 10 u 11 de 64 bits",
  },
  android: {
    archivo: "/descargas/Vendfy-Android.apk",
    version: "1.1.0",
    peso: "58 MB",
    requisitos: "Android 7 o superior",
  },
} as const;
