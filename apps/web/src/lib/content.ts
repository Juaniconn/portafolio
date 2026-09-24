export const site = {
  name: "Juan Ponce",
  url: "https://juanponcelu.com",
  email: "me.juanponce@gmail.com",
  title: "Juan Ponce — Software, automatización y producto",
  description:
    "Portafolio de Juan Ponce. Software web, automatización y sistemas de producto.",
  headline: "Software, automatización y producto — hechos para usarse.",
  subhead:
    "Diseño e implemento sistemas web, bots y flujos operativos. De la idea al deploy.",
};

export const nav = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const projects = [
  {
    title: "Beekonz",
    blurb:
      "Tienda FBT/VR para la comunidad hispana: Next estático, Stripe y deploy en Hostinger.",
    href: "https://beekonz.shop",
    tags: ["Next.js", "Stripe", "Hostinger"],
  },
  {
    title: "AMD / automatización",
    blurb:
      "Herramientas y flujos operativos para operaciones: web, docs y automatización de procesos.",
    href: "#contacto",
    tags: ["Ops", "Web", "Automatización"],
  },
  {
    title: "Cursor–Telegram agent",
    blurb:
      "Bridge para chatear con el agente de Cursor desde Telegram, con recordatorios y archivos.",
    href: "https://github.com/Juaniconn",
    tags: ["Python", "Telegram", "Agents"],
  },
] as const;

export const skills = {
  Web: ["TypeScript", "React / Next", "Tailwind"],
  Automatización: ["Python", "Bots & APIs", "Agentes"],
  "Producto / ops": ["Deploy Hostinger", "Obsidian", "Shipping iterativo"],
} as const;

export const about = [
  "Trabajo en la intersección de producto, ingeniería y operaciones: apps web, automatización (APIs, Discord/Telegram, agentes) y marcas digitales que necesitan shipping real.",
  "Me interesa la claridad — menos theatre, más sistemas que se entienden y se mantienen.",
] as const;
