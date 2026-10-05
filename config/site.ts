/**
 * Substitua null pelos links reais quando estiverem confirmados.
 * WhatsApp: "https://wa.me/55DDDNUMERO" (somente números).
 * Enquanto null, o controle mantém o visual e não abre um destino fictício.
 */
export const siteConfig: {
  whatsapp: string | null;
  instagram: string | null;
  linkedin: string | null;
  youtube: string | null;
  trajectory: string | null;
  siteUrl: string | null;
  indexable: boolean;
} = {
  whatsapp: "https://wa.me/553184925887",
  instagram: "https://www.instagram.com/sou.isabellaoliveira/",
  linkedin: null,
  youtube: null,
  trajectory: null,
  siteUrl: null,
  // Ative após confirmar os textos pendentes e os links de contato.
  indexable: false,
};
