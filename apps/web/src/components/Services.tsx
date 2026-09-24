import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="que-hago"
      className="scroll-mt-20 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-[family-name:var(--font-ui)] text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
          What I do.
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-fg md:text-5xl">
          Qué hago
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-line bg-bg-elevated p-8 md:p-10"
            >
              <h3 className="font-[family-name:var(--font-body)] text-2xl font-bold text-fg">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
