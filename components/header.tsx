"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ContactButton } from "./contact-button";

const links = [
  { href: "#minha-trajetoria", label: "Minha Trajetória" },
  { href: "#minha-abordagem", label: "Minha Abordagem" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); };
  }, [open]);

  return (
    <header className="site-header" ref={root}>
      <div className="header-inner">
        <a href="#inicio" className="brand" aria-label="Isabella Oliveira — início">
          <Image src="/images/logo-isabella.webp" width={971} height={351} alt="Isabella Oliveira — Liderança e Desenvolvimento de Pessoas" loading="eager" unoptimized />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-contact"><ContactButton /></div>
        <button className="menu-toggle" type="button" ref={toggle} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>
          <span className={open ? "menu-bars is-open" : "menu-bars"}><i /><i /></span>
        </button>
        <nav id="mobile-menu" className="mobile-nav" hidden={!open} aria-label="Navegação móvel">
          {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <ContactButton />
        </nav>
      </div>
    </header>
  );
}
