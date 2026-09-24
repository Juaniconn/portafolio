import { nav, site } from "@/lib/content";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-fg cursor-pointer"
        >
          {site.shortName}
        </a>
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline cursor-pointer font-[family-name:var(--font-ui)] text-xs font-extrabold uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="cursor-pointer rounded-full bg-accent px-4 py-2 font-[family-name:var(--font-ui)] text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-accent-dim"
        >
          Email me
        </a>
      </div>
    </header>
  );
}
