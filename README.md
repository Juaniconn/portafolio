# Portafolio — Juan Ponce

Sitio público: [juanponcelu.com](https://juanponcelu.com)  
Repo: `git@github.com:Juaniconn/portafolio.git`

## Estructura

| Ruta | Qué es |
|------|--------|
| `apps/web` | Portafolio estático (Next.js export → Hostinger) |
| `apps/hq` | Obsoleto: el dashboard vive en su propio repo `/srv/personal/dashboard` (`web.juanponcelu.com`) |
| `docs/` | Notas Obsidian (brief, deploy, roadmap HQ) |

## Dev — sitio público

```bash
cd apps/web
npm install
npm run dev
```

## Deploy Hostinger

1. Credenciales SSH de `juanponcelu.com` en `~/.secrets/hostinger-juanponcelu.env` (600; formato en `.env.example`)
2. `cd apps/web && ./deploy.sh --dry-run` y luego `./deploy.sh`

Detalle: [docs/SOP-Deploy.md](docs/SOP-Deploy.md)
