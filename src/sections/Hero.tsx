import { Button } from '../components/Button';

const whatsappUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Vi%20seu%20site%20e%20quero%20conversar.';

export function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero__content">
        <p className="eyebrow">Tiago Meneguim</p>
        <h1>Arquitetura, Cloud, FinOps e IA aplicada</h1>
        <p className="hero__subtitle">
          Construindo soluções escaláveis, eficientes e orientadas a resultado.
        </p>
        <div className="hero__actions" aria-label="Ações principais">
          <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar comigo
          </Button>
          <Button href="#mentoria" variant="secondary">
            Mentoria gratuita
          </Button>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="visual-node visual-node--core">Cloud</div>
        <div className="visual-node">FinOps</div>
        <div className="visual-node">IA</div>
        <div className="visual-node">APIs</div>
        <div className="visual-line visual-line--one" />
        <div className="visual-line visual-line--two" />
        <div className="visual-line visual-line--three" />
      </div>
    </section>
  );
}
