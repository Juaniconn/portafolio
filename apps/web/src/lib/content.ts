export const site = {
  name: "Juan Ponce",
  url: "https://juanponcelu.com",
  email: "me.juanponce@gmail.com",
  title: "Juan Ponce — Software, producto y automatización",
  description:
    "Portafolio de Juan Ponce: automatización de ops, Beekonz FBT para VR y agentes Telegram/Cursor. Trabajo técnico, claro y cercano.",
  headline: "Software, producto y automatización con criterio técnico.",
  subhead:
    "Diseño y construyo sistemas que operan solos: ops, hardware VR y agentes en Telegram/Discord. Menos ceremony, más entrega.",
};

export const nav = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const projects = [
  {
    title: "Beekonz — FBT para VR",
    blurb:
      "Trackers y tienda para full-body tracking en VRChat/SlimeVR: shop, pagos y fulfillment.",
    href: "https://beekonz.shop",
    tags: ["VR", "Hardware", "Next.js", "E-commerce"],
  },
  {
    title: "AMD — Ops y automatización",
    blurb:
      "Flujos, tooling y documentación operativa para reducir trabajo manual y errores en el día a día.",
    href: "#contacto",
    tags: ["Ops", "Automatización", "Product"],
  },
  {
    title: "Agent Telegram ↔ Cursor",
    blurb:
      "Bot que lleva conversaciones de Telegram al agente de Cursor y devuelve resultados, archivos y recordatorios.",
    href: "https://github.com/Juaniconn",
    tags: ["Agents", "Telegram", "Automation"],
  },
] as const;

export const skills = {
  "Producto / systems": [
    "Discovery",
    "Docs vivos",
    "MVP → iterate",
  ],
  Software: ["TypeScript", "Next.js", "Python", "APIs", "Static export"],
  Automatización: [
    "Scripts",
    "Bots",
    "cron / systemd",
    "Discord / Telegram",
  ],
  "Hardware / XR": ["FBT", "Sensores", "VRChat / SlimeVR"],
} as const;

export const about = [
  "Trabajo en la intersección de producto y sistemas: entender el flujo, recortar lo innecesario y dejar algo que alguien más pueda operar.",
  "He pasado por automatización de operaciones (AMD), hardware/software FBT para VR (Beekonz) y agentes que conectan chat con herramientas reales (Telegram ↔ Cursor).",
  "Si buscas alguien que hable claro, implemente y no se esconda detrás de decks, hablemos.",
] as const;

export const contactLead =
  "¿Tienes un problema feo o un producto a mitad? Cuéntame en una frase qué duele. Respondo por mail.";
