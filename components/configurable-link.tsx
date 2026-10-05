import type { ReactNode } from "react";

type Props = { href: string | null; className?: string; children: ReactNode; label?: string };

export function ConfigurableLink({ href, className, children, label }: Props) {
  if (!href) {
    return <button type="button" disabled className={className} title="Link a definir" aria-label={label ? `${label} — link a definir` : undefined}>{children}</button>;
  }
  const external = /^https?:\/\//.test(href);
  return <a href={href} className={className} aria-label={label} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{children}</a>;
}
