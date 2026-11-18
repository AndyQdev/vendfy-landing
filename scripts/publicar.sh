#!/usr/bin/env bash
# Publica la landing en Vercel (cuenta andyqdev, proyecto vendfy-landing) con los instaladores.
#
#   VERCEL_TOKEN=... bash scripts/publicar.sh
#
# Los instaladores no van en git (pesan): se toman de INSTALADORES y se copian
# a public/descargas/ de una copia limpia del último commit (git archive HEAD).
set -euo pipefail

RAIZ="$(cd "$(dirname "$0")/.." && pwd)"
INSTALADORES="${INSTALADORES:-/c/Trabajos/Ecommerce/instaladores}"
: "${VERCEL_TOKEN:?Falta VERCEL_TOKEN (token de la cuenta andyqdev)}"
export VERCEL_ORG_ID="${VERCEL_ORG_ID:-team_pB1Vt9LTO3UNKAXV0mbTLIwI}"
: "${VERCEL_PROJECT_ID:?Falta VERCEL_PROJECT_ID (el del proyecto vendfy-landing)}"

COPIA="$(mktemp -d)"
trap 'rm -rf "$COPIA"' EXIT
git -C "$RAIZ" archive HEAD | tar -x -C "$COPIA"
mkdir -p "$COPIA/public/descargas"
cp "$INSTALADORES/Vendfy-Windows-0.1.0-setup.exe" "$COPIA/public/descargas/Vendfy-Windows-setup.exe"
cp "$INSTALADORES/Vendfy-Android-1.1.0.apk" "$COPIA/public/descargas/Vendfy-Android.apk"

cd "$COPIA"
npx -y vercel@65.11.0 deploy --prod --yes --token "$VERCEL_TOKEN"
