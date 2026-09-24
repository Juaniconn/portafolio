import { about, skills } from "@/lib/content";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.25fr_1fr]">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
            Sobre mí
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Skills
          </h3>
          <dl className="mt-6 space-y-5">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <dt className="text-sm font-medium text-fg">{group}</dt>
                <dd className="mt-1.5 font-[family-name:var(--font-mono)] text-sm leading-relaxed text-muted">
                  {items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
