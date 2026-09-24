import { site } from "@/lib/content";

const FLOW = ["Telegram", "Cursor", "Deploy"] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-20 pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(242,247,252,0) 40%, #f2f7fc 92%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div>
          <p className="hero-enter font-[family-name:var(--font-ui)] text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
            I&apos;m
          </p>
          <h1 className="hero-enter hero-enter-delay mt-2 font-[family-name:var(--font-display)] text-[clamp(3.5rem,12vw,7.5rem)] leading-[0.9] tracking-tight text-fg">
            {site.shortName}
          </h1>
          <p className="hero-enter hero-enter-delay-2 mt-5 font-[family-name:var(--font-body)] text-xl font-semibold text-fg sm:text-2xl">
            {site.role}
          </p>
          <p className="hero-enter hero-enter-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.subhead}
          </p>
          <div className="hero-enter hero-enter-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-7 py-3.5 font-[family-name:var(--font-ui)] text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(0,106,255,0.25)] transition hover:bg-accent-dim"
            >
              Email me
            </a>
            <a
              href="#proyectos"
              className="link-underline cursor-pointer font-[family-name:var(--font-ui)] text-sm font-bold uppercase tracking-wide text-fg"
            >
              Ver proyectos
            </a>
          </div>
        </div>

        <aside
          className="hero-enter hero-enter-delay-2 relative mx-auto w-full max-w-md rounded-[2rem] border border-line bg-bg-elevated p-7 shadow-[0_20px_60px_rgba(33,55,87,0.08)] lg:mx-0"
          aria-label="Flujo de trabajo"
        >
          <div
            aria-hidden
            className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-soft"
          />
          <p className="relative font-[family-name:var(--font-ui)] text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent">
            Pipeline
          </p>
          <ol className="relative mt-6 space-y-4">
            {FLOW.map((step, i) => (
              <li key={step} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soft font-[family-name:var(--font-ui)] text-sm font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-semibold text-fg">{step}</span>
              </li>
            ))}
          </ol>
          <p className="relative mt-6 text-sm text-muted">
            chat → agente → resultado en producción
          </p>
        </aside>
      </div>
    </section>
  );
}
