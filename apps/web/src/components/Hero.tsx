import { site } from "@/lib/content";

const FLOW = ["Telegram", "Cursor", "Deploy"] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:justify-center md:pb-24 md:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #11110f 0%, #141310 55%, #11110f 100%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
        <div>
          <p className="hero-enter font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            {site.name}
          </p>
          <h1 className="hero-enter hero-enter-delay mt-5 max-w-xl font-[family-name:var(--font-display)] text-xl font-semibold leading-snug tracking-tight text-fg/90 sm:text-2xl md:text-3xl">
            {site.headline}
          </h1>
          <p className="hero-enter hero-enter-delay-2 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {site.subhead}
          </p>
          <div className="hero-enter hero-enter-delay-3 mt-9 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex cursor-pointer items-center justify-center border border-transparent bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-accent-dim"
            >
              Ver proyectos
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex cursor-pointer items-center justify-center border border-line px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>

        <aside
          className="hero-enter hero-enter-delay-2 border border-line bg-bg-elevated/60 p-5 md:p-6"
          aria-label="Flujo de trabajo"
        >
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-muted">
            pipeline
          </p>
          <ol className="mt-5 space-y-0 font-[family-name:var(--font-mono)] text-sm text-fg md:text-base">
            {FLOW.map((step, i) => (
              <li key={step} className="flex flex-col">
                <span className="flex items-center gap-3">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </span>
                {i < FLOW.length - 1 ? (
                  <span
                    aria-hidden
                    className="ml-[1.15rem] border-l border-line py-2 pl-0 text-muted"
                  >
                    │
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-6 font-[family-name:var(--font-mono)] text-xs leading-relaxed text-muted">
            chat → agente → resultado en producción
          </p>
        </aside>
      </div>
    </section>
  );
}
