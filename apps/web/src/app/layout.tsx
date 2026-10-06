import type { Metadata, Viewport } from "next";
import { Abril_Fatface, Heebo, Mulish } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const abril = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: "400",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: ["Juan Ponce", "automatización", "Next.js", "TypeScript", "Beekonz", "VR", "full-body tracking", "agentes Telegram", "Ciudad Juárez"],
};

export const viewport: Viewport = {
  themeColor: "#f2f7fc",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description: site.description,
  sameAs: ["https://github.com/Juaniconn", "https://beekonz.shop"],
  knowsAbout: ["Automatización", "TypeScript", "Next.js", "Python", "Full-body tracking VR"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${abril.variable} ${heebo.variable} ${mulish.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
