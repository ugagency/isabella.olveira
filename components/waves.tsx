export function HeroWave() {
  return <svg className="hero-wave" viewBox="0 0 1440 285" preserveAspectRatio="none" aria-hidden="true"><path fill="#D7C9BE" d="M0 30C490-84 980 164 1440 74V285H0Z" /><path fill="#F1EFEC" d="M0 134C520-68 840 185 1440 110V285H0Z" /></svg>;
}

export function SectionWave({ position }: { position: "top" | "bottom" }) {
  return <svg className={`section-wave wave-${position}`} viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 25C410 105 970-60 1440 30V100H0Z" /></svg>;
}
