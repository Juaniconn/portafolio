import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-20 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-[family-name:var(--font-ui)] text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
          Works.
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-fg md:text-5xl">
          Proyectos
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Mira lo que he construido. Conóceme mejor.
        </p>

        <ul className="mt-14 space-y-5">
          {projects.map((project, index) => {
            const external = project.href.startsWith("http");
            return (
              <li key={project.title}>
                <a
                  href={project.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex cursor-pointer flex-col gap-6 rounded-3xl border border-line bg-bg-elevated p-6 shadow-[0_8px_30px_rgba(33,55,87,0.04)] transition hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_16px_40px_rgba(0,106,255,0.08)] md:flex-row md:items-center md:justify-between md:p-8"
                >
                  <div className="flex min-w-0 flex-1 gap-5 md:gap-8">
                    <span className="font-[family-name:var(--font-ui)] text-sm font-extrabold text-accent/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-body)] text-xl font-bold text-fg transition-colors group-hover:text-accent md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                        {project.blurb}
                      </p>
                      <p className="mt-3 font-[family-name:var(--font-ui)] text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                        {project.tags.join(" · ")}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center justify-center self-start rounded-full border border-accent/30 bg-soft px-5 py-2.5 font-[family-name:var(--font-ui)] text-xs font-extrabold uppercase tracking-wide text-accent transition group-hover:bg-accent group-hover:text-white md:self-center">
                    See this project
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
