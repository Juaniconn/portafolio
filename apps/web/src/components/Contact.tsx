import { contactLead, site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight md:text-4xl">
          Contacto
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          {contactLead}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex cursor-pointer font-[family-name:var(--font-display)] text-2xl font-bold text-accent underline-offset-4 transition hover:underline md:text-3xl"
        >
          {site.email}
        </a>
      </div>
    </section>
  );
}
