import { nav, site } from "@/lib/content";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-fg cursor-pointer"
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 sm:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-accent cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20 cursor-pointer sm:hidden"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
