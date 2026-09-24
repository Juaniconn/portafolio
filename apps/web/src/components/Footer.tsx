import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}
        </p>
        <p className="font-[family-name:var(--font-ui)] text-xs font-bold uppercase tracking-wide">
          {site.url.replace("https://", "")}
        </p>
      </div>
    </footer>
  );
}
