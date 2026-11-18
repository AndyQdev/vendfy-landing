import type { NextConfig } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://vendfy-panel.vercel.app";

const nextConfig: NextConfig = {
  // vendfy.shop/login y vendfy.shop/registro llevan al panel (como claude.ai/login).
  async redirects() {
    return [
      { source: "/login", destination: `${APP_URL}/login`, permanent: false },
      { source: "/iniciar-sesion", destination: `${APP_URL}/login`, permanent: false },
      { source: "/registro", destination: `${APP_URL}/register`, permanent: false },
      { source: "/crear-cuenta", destination: `${APP_URL}/register`, permanent: false },
      { source: "/app", destination: `${APP_URL}/`, permanent: false },
      { source: "/download", destination: "/descargar", permanent: true },
      { source: "/descargas", destination: "/descargar", permanent: true },
    ];
  },
  // Los instaladores se bajan como archivo (no se abren en el navegador).
  async headers() {
    return [
      {
        source: "/descargas/:archivo(.*\\.apk)",
        headers: [
          { key: "Content-Type", value: "application/vnd.android.package-archive" },
          { key: "Content-Disposition", value: "attachment" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/descargas/:archivo(.*\\.exe)",
        headers: [
          { key: "Content-Type", value: "application/vnd.microsoft.portable-executable" },
          { key: "Content-Disposition", value: "attachment" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
