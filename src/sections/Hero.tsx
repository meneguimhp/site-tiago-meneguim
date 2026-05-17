import { Button } from '../components/Button';

const whatsappUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Vi%20seu%20site%20e%20quero%20conversar%20sobre%20FinOps%2C%20AWS%20ou%20IA%20aplicada.';

const highlights = [
  '20+ anos em tecnologia',
  'Solutions Architect',
  'AWS, FinOps e IA aplicada',
  'Ambientes corporativos de larga escala',
];

export function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero__content">
        <p className="eyebrow">Tiago Meneguim</p>
        <h1>FinOps, AWS e IA aplicada para gerar resultado real</h1>
        <p className="hero__subtitle">
          Ajudo empresas e profissionais tech a reduzir custos cloud, modernizar
          arquiteturas e aplicar IA de forma prática, segura e orientada a negócio.
        </p>
        <div className="hero__actions" aria-label="Ações principais">
          <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar sobre consultoria
          </Button>
          <Button href="#mentoria" variant="secondary">
            Quero mentoria
          </Button>
        </div>
        <div className="hero__proof" aria-label="Destaques profissionais">
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="hero-visual hero-visual--profile">
        <div className="profile-card">
          <img
            className="profile-card__photo"
            src="/tiago-meneguim.jpg"
            alt="Tiago Meneguim"
          />
          <p className="profile-card__role">Consultoria e mentoria</p>
          <h2>Cloud cost, arquitetura AWS e IA aplicada</h2>
          <p>
            Diagnósticos objetivos, recomendações acionáveis e acompanhamento
            para transformar tecnologia em resultado.
          </p>
        </div>
      </div>
    </section>
  );
}
