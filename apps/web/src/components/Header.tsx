import { nav, site } from "@/lib/content";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-fg cursor-pointer"
        >
          {site.name}
        </a>
        <nav
          className="hidden items-center gap-8 sm:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline cursor-pointer text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="cursor-pointer text-sm font-medium text-accent sm:hidden"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
