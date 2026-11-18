# Landing de Vendfy

El sitio público (vendfy.shop): qué es Vendfy, «Oye Vendfy», precios, preguntas
frecuentes y la página de **descarga** (`/descargar`) con el paso a paso de
Windows, Android, iPhone/iPad y web, como la de Claude.

Next.js 16 (App Router, todo estático) + Tailwind 4. Colores y letras del panel:
Sora para títulos, Plus Jakarta Sans para el texto, turquesa `#0E7490` y azul
marino `#0F172A` (`src/app/globals.css`).

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npx next start -p 3418
```

## Dónde está cada cosa

- `src/shared/config/sitio.ts`: la dirección del panel (`NEXT_PUBLIC_APP_URL`,
  hoy vendfy-panel.vercel.app), el WhatsApp de ventas.
- `src/shared/config/descargas.ts`: versión, peso y requisitos de cada instalador.
- `src/shared/lib/plataforma.ts`: detecta el equipo del visitante para
  recomendarle su descarga (el botón del inicio y «Para tu equipo»).
- `src/shared/assets/capturas/`: capturas reales del panel (tienda de prueba, sin
  datos de clientes).
- `next.config.ts`: `/login` y `/registro` llevan al panel; los `.apk` y `.exe` se
  sirven como descarga.

## Publicar

Los instaladores no van en git. `scripts/publicar.sh` arma una copia limpia del
último commit, le agrega los instaladores de `C:\Trabajos\Ecommerce\instaladores`
y la publica en Vercel (cuenta andyqdev, proyecto `vendfy-landing`):

```bash
VERCEL_TOKEN=... VERCEL_PROJECT_ID=... bash scripts/publicar.sh
```

Al cambiar un instalador: copiarlo a `instaladores/`, actualizar
`descargas.ts` y volver a publicar.
