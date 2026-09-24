import { projects } from "@/lib/content";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="proyectos"
      className="scroll-mt-20 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
          Proyectos
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Selección reciente. Más detalle y casos bajo demanda.
        </p>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          <li>
            <ProjectRow project={featured} featured />
          </li>
          {rest.map((project) => (
            <li key={project.title}>
              <ProjectRow project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  const external = project.href.startsWith("http");

  return (
    <a
      href={project.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex cursor-pointer flex-col gap-3 py-8 transition-colors hover:bg-bg-elevated/40 md:flex-row md:items-start md:justify-between md:gap-10 md:px-2"
    >
      <div className="min-w-0 flex-1">
        <h3
          className={`font-[family-name:var(--font-display)] font-bold tracking-tight text-fg transition-colors group-hover:text-accent ${
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mt-3 max-w-2xl leading-relaxed text-muted ${
            featured ? "text-base md:text-lg" : "text-sm md:text-base"
          }`}
        >
          {project.blurb}
        </p>
      </div>
      <div className="shrink-0 md:max-w-[14rem] md:pt-1 md:text-right">
        <p className="font-[family-name:var(--font-mono)] text-xs leading-relaxed text-muted">
          {project.tags.join(" · ")}
        </p>
        <span className="mt-2 inline-block font-[family-name:var(--font-mono)] text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
          {external ? "abrir →" : "ver →"}
        </span>
      </div>
    </a>
  );
}
