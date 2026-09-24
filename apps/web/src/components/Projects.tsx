import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
          Proyectos
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Selección reciente. Más detalle y casos bajo demanda.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex h-full cursor-pointer flex-col border border-line bg-bg-elevated/40 p-6 transition hover:border-accent/40 hover:bg-bg-elevated"
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-fg group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.blurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line px-2 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
