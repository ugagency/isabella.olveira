import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isabella Oliveira | Liderança e Desenvolvimento de Pessoas",
  description: "Mentoria e consultoria para profissionais que querem avançar na carreira, líderes que buscam fortalecer sua gestão e empresas que desejam desenvolver suas equipes.",
  ...(siteConfig.siteUrl ? { metadataBase: new URL(siteConfig.siteUrl), alternates: { canonical: "/" } } : {}),
  robots: { index: siteConfig.indexable, follow: siteConfig.indexable },
  openGraph: {
    title: "Isabella Oliveira | Liderança e Desenvolvimento de Pessoas",
    description: "Desenvolver pessoas. Fortalecer lideranças. Construir resultados que permanecem.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F1EFEC" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
