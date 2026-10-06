import Image from "next/image";
import { Header } from "@/components/header";
import { ContactButton } from "@/components/contact-button";
import { ConfigurableLink } from "@/components/configurable-link";
import { Icon, type IconName } from "@/components/icons";
import { HeroWave, SectionWave } from "@/components/waves";
import { content } from "@/config/content";
import { siteConfig } from "@/config/site";

function Monogram({ className = "" }: { className?: string }) {
  return <Image src="/images/monogram-areia.svg" alt="" width={996} height={1106} className={className} unoptimized aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <div className="hero-stage">
            <Monogram className="hero-monogram" />
            <Image src="/images/hero-isabella.webp" width={1004} height={1567} alt="Isabella Oliveira sorrindo, de óculos e camisa verde oliva" className="hero-portrait" preload unoptimized sizes="(max-width: 767px) 100vw, 56vw" />
            <div className="hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 id="hero-title"><span>Desenvolver pessoas.</span>{" "}<span>Fortalecer <em>lideranças.</em></span>{" "}<span>Construir resultados</span>{" "}<span>que permanecem.</span></h1>
              <p className="hero-description">{content.hero.description}</p>
              <ContactButton />
            </div>
          </div>
          <HeroWave />
        </section>

        <section className="manifesto" aria-labelledby="manifesto-title">
          <div className="manifesto-inner">
            <Monogram className="manifesto-monogram" />
            <p className="eyebrow">{content.manifesto.eyebrow}</p>
            <h2 id="manifesto-title">{content.manifesto.title}</h2>
            <p className="manifesto-description">{content.manifesto.description}</p>
          </div>
        </section>

        <section id="minha-trajetoria" className="about" aria-labelledby="about-title">
          <SectionWave position="top" />
          <div className="about-inner">
            <div className="about-photos">
              <div className="script-words" aria-hidden="true"><span><Image src="/images/word-pessoas.svg" alt="" width={2660} height={1200} unoptimized /></span><span><Image src="/images/word-lideranca.svg" alt="" width={3540} height={1200} unoptimized /></span><span><Image src="/images/word-estrategia.svg" alt="" width={3700} height={1200} unoptimized /></span><span><Image src="/images/word-resultados.svg" alt="" width={3860} height={1200} unoptimized /></span><i /></div>
              <Image src="/images/trajectory-main.webp" width={906} height={1370} alt="Isabella Oliveira sentada, em um retrato com conjunto marrom" className="about-main-photo" sizes="(max-width: 767px) 70vw, 32vw" />
              <Image src="/images/trajectory-reading.webp" width={576} height={812} alt="Isabella Oliveira lendo um livro" className="about-reading-photo" sizes="(max-width: 767px) 45vw, 20vw" />
            </div>
            <div className="about-copy">
              <p className="eyebrow">Sobre mim</p>
              <h2 id="about-title">Oi, eu sou<br /><em>Isabella Oliveira.</em></h2>
              <p>{content.about.description}</p>
            </div>
          </div>
          <SectionWave position="bottom" />
        </section>

        <section id="solucoes" className="solutions" aria-labelledby="solutions-title">
          <div className="solutions-inner">
            <div className="solutions-heading">
              <p className="eyebrow">Como posso ajudar</p>
              <h2 id="solutions-title">{content.solutions.title}</h2>
            </div>
            <div className="solutions-list">
              <p className="solutions-description">{content.solutions.description}</p>
              {content.solutions.items.map(item => <article key={item.id} id={item.id} className="solution-row">
                <span className="solution-icon"><Icon name={item.icon} /></span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
                <ConfigurableLink href={siteConfig.whatsapp} className="solution-link" label={item.title}><Icon name="arrow" /></ConfigurableLink>
              </article>)}
            </div>
          </div>
        </section>

        <section id="produtos" className="products" aria-labelledby="products-title">
          <div className="products-inner">
            <p className="eyebrow">Produtos</p>
            <h2 id="products-title">{content.products.title}</h2>
            <p className="products-description">{content.products.description}</p>
            <div className="products-list">
              {content.products.items.map(item => <article key={item.id} className="product-card">
                <div className="product-cover">
                  <Image src={item.image} width={800} height={1200} alt={item.alt} style={{ objectPosition: item.position }} sizes="(max-width: 767px) 36vw, 312px" />
                </div>
                <div className="product-body">
                  <span className="product-badge">Em breve</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="minha-abordagem"className="approach" aria-labelledby="approach-title">
          <SectionWave position="top" />
          <div className="approach-inner">
            <p className="eyebrow">Meu método</p>
            <h2 id="approach-title">Minha abordagem.</h2>
            <p className="approach-subtitle">{content.approach.subtitle}</p>
            <div className="pillars">
              {content.approach.pillars.map(item => <article className="pillar" key={item.title}>
                <span className="pillar-icon"><Icon name={item.icon as IconName} /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section id="contato" className="contact" aria-labelledby="contact-title">
          <div className="contact-stage">
            <Image src="/images/cta-isabella.webp" width={720} height={800} alt="Isabella Oliveira sorrindo, com camisa verde e celular nas mãos" className="contact-photo" unoptimized sizes="(max-width: 767px) 100vw, 43vw" />
            <Monogram className="contact-monogram" />
            <div className="contact-copy">
              <p className="eyebrow">Vamos juntos?</p>
              <h2 id="contact-title">{content.contact.title}</h2>
              <p className="contact-description">{content.contact.description}</p>
              <p className="contact-description contact-support">{content.contact.support}</p>
              <ContactButton olive />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <a href="#inicio" className="footer-brand" aria-label="Isabella Oliveira — início"><Image src="/images/logo-isabella.webp" width={971} height={351} alt="Isabella Oliveira — Liderança e Desenvolvimento de Pessoas" unoptimized /></a>
            <p className="footer-tagline">Liderança que transforma</p>
            <div className="social-links">
              <ConfigurableLink href={siteConfig.instagram} label="Instagram"><Icon name="instagram" /></ConfigurableLink>
            </div>
          </div>
          <div className="footer-bottom"><p>© 2026 Isabella Oliveira. Todos os direitos reservados.</p></div>
        </div>
      </footer>
    </>
  );
}
