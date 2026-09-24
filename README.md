# Portafolio — Juan Ponce

Sitio público: [juanponcelu.com](https://juanponcelu.com)  
Repo: `git@github.com:Juaniconn/portafolio.git`

## Estructura

| Ruta | Qué es |
|------|--------|
| `apps/web` | Portafolio estático (Next.js export → Hostinger) |
| `apps/hq` | Dashboard personal (local → VPS / `hq.juanponcelu.com`) |
| `docs/` | Notas Obsidian (brief, deploy, roadmap HQ) |

## Dev — sitio público

```bash
cd apps/web
npm install
npm run dev
```

## Deploy Hostinger

1. Copia `.env.example` → `.env` y completa SSH de `juanponcelu.com`
2. `cd apps/web && ./deploy.sh`

Detalle: [docs/SOP-Deploy.md](docs/SOP-Deploy.md)
