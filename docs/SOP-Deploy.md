# SOP — Deploy sitio público

## Requisitos
- Node 20+ local
- `sshpass` instalado
- `.env` en la raíz del repo con `HOSTINGER_JUANPONCELU_SSH_*` (ver `.env.example`)

## Pasos
```bash
cd ~/projects/portafolio/apps/web
chmod +x deploy.sh
./deploy.sh          # o ./deploy.sh --dry-run
```

1. `npm run build` → genera `out/`
2. rsync de `out/` a `domains/juanponcelu.com/public_html`
3. Verificar https://juanponcelu.com

## Dev local
```bash
cd ~/projects/portafolio/apps/web
npm run dev
# http://localhost:3000
```

## Notas
- Solo estático (`output: "export"`). Sin API Node en Hostinger shared.
- HQ (`apps/hq`) no se despliega aquí.
