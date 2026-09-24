import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-28 md:items-center md:pb-0"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 55% at 70% 15%, var(--glow), transparent 55%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(26, 154, 106, 0.22), transparent 50%),
            linear-gradient(180deg, #0b1220 0%, #0a1018 45%, #0b1220 100%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p className="mb-4 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          {site.name}
        </p>
        <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-7xl">
          {site.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {site.subhead}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition hover:brightness-110"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-fg transition hover:border-accent/50 hover:text-accent"
          >
            Escribirme
          </a>
        </div>
      </div>
    </section>
  );
}
