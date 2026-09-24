import { contactLead, site } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-20 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] bg-fg px-8 py-14 text-center text-white md:px-16 md:py-20">
          <p className="font-[family-name:var(--font-ui)] text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
            Let&apos;s work together
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-6xl">
            ¿Hablamos?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 md:text-lg">
            {contactLead}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-9 inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-8 py-3.5 font-[family-name:var(--font-ui)] text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-accent-dim"
          >
            Email me
          </a>
          <p className="mt-5 font-[family-name:var(--font-ui)] text-sm font-semibold text-white/80">
            {site.email}
          </p>
        </div>
      </div>
    </section>
  );
}
