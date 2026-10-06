#!/usr/bin/env bash
# Deploy portafolio web (Next.js static export) → Hostinger juanponcelu.com
# Uso (como juaniconn): ./deploy.sh [--dry-run]
# Credenciales (primera que exista):
#   ~/.secrets/hostinger-juanponcelu.env   (recomendado, 600)
#   ./.env  ·  ../../.env                  (compatibilidad)
#     HOSTINGER_JUANPONCELU_SSH_HOST, _USER, _PASSWORD, _PORT (opcional, default 65002)
set -euo pipefail
cd "$(dirname "$0")"

for f in "$HOME/.secrets/hostinger-juanponcelu.env" .env ../../.env; do
  if [[ -f "$f" ]]; then
    # shellcheck disable=SC1090
    source "$f"
    break
  fi
done

for var in HOSTINGER_JUANPONCELU_SSH_HOST HOSTINGER_JUANPONCELU_SSH_USER HOSTINGER_JUANPONCELU_SSH_PASSWORD; do
  if [[ -z "${!var:-}" ]]; then
    echo "Falta $var (ver ../../.env.example)"
    exit 1
  fi
done

PORT="${HOSTINGER_JUANPONCELU_SSH_PORT:-65002}"
HOST="$HOSTINGER_JUANPONCELU_SSH_HOST"
REMOTE_DIR="domains/juanponcelu.com/public_html"
DRY_FLAG=()
[[ "${1:-}" == "--dry-run" ]] && DRY_FLAG=(--dry-run --itemize-changes)

KNOWN="$HOME/.ssh/known_hosts"
if ! ssh-keygen -F "[$HOST]:$PORT" -f "$KNOWN" >/dev/null 2>&1; then
  echo "Registrando llave del host $HOST:$PORT (primera vez)"
  ssh-keyscan -p "$PORT" -t ed25519,rsa "$HOST" 2>/dev/null >> "$KNOWN"
fi

echo "Build (Next.js static export)..."
npm run build
[[ -d out ]] || { echo "No existe out/ tras el build"; exit 1; }

echo "Sync out/ → $HOST:$REMOTE_DIR"
export SSHPASS="$HOSTINGER_JUANPONCELU_SSH_PASSWORD"
sshpass -e rsync -rlptz --chmod=D755,F644 --delete "${DRY_FLAG[@]}" \
  -e "ssh -o StrictHostKeyChecking=yes -o UserKnownHostsFile=$KNOWN -p $PORT" \
  out/ \
  "$HOSTINGER_JUANPONCELU_SSH_USER@$HOST:$REMOTE_DIR/"

[[ ${#DRY_FLAG[@]} -gt 0 ]] && { echo "Dry-run terminado (no se subió nada)."; exit 0; }
code=$(curl -s -o /dev/null -w '%{http_code}' -m 15 https://juanponcelu.com/)
echo "Listo. https://juanponcelu.com → HTTP $code"
[[ "$code" == 200 ]]
