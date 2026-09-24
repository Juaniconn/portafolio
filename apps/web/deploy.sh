#!/usr/bin/env bash
# Deploy portafolio web (Next.js static export) → Hostinger juanponcelu.com
# Uso (desde apps/web o raíz del monorepo vía este script):
#   ./deploy.sh [--dry-run]
# Credenciales en ../../.env (repo root) o ./.env:
#   HOSTINGER_JUANPONCELU_SSH_HOST
#   HOSTINGER_JUANPONCELU_SSH_USER
#   HOSTINGER_JUANPONCELU_SSH_PASSWORD
#   HOSTINGER_JUANPONCELU_SSH_PORT   (opcional, default 65002)
set -uo pipefail
cd "$(dirname "$0")"

if [[ -f .env ]]; then
  # shellcheck disable=SC1091
  source .env
elif [[ -f ../../.env ]]; then
  # shellcheck disable=SC1091
  source ../../.env
fi

for var in HOSTINGER_JUANPONCELU_SSH_HOST HOSTINGER_JUANPONCELU_SSH_USER HOSTINGER_JUANPONCELU_SSH_PASSWORD; do
  if [[ -z "${!var:-}" ]]; then
    echo "Falta $var en .env (ver ../../.env.example)"
    exit 1
  fi
done

PORT="${HOSTINGER_JUANPONCELU_SSH_PORT:-65002}"
REMOTE_DIR="domains/juanponcelu.com/public_html"
DRY_FLAG=""
[[ "${1:-}" == "--dry-run" ]] && DRY_FLAG="--dry-run"

echo "Build (Next.js static export)..."
npm run build || exit 1

if [[ ! -d out ]]; then
  echo "No existe out/ tras el build"
  exit 1
fi

echo "Sync out/ → $HOSTINGER_JUANPONCELU_SSH_HOST:$REMOTE_DIR"
sshpass -p "$HOSTINGER_JUANPONCELU_SSH_PASSWORD" rsync -rlptz --delete \
  $DRY_FLAG \
  -e "ssh -o StrictHostKeyChecking=no -p $PORT" \
  out/ \
  "$HOSTINGER_JUANPONCELU_SSH_USER@$HOSTINGER_JUANPONCELU_SSH_HOST:$REMOTE_DIR/"

echo "Listo. https://juanponcelu.com"
