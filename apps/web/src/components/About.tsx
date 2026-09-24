import { about, skills } from "@/lib/content";

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
            Sobre mí
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Skills
          </h3>
          <dl className="mt-6 space-y-6">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <dt className="text-sm font-medium text-fg">{group}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="border border-line bg-bg-elevated/50 px-2.5 py-1 text-sm text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
