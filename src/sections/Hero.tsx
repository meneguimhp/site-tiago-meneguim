import { Button } from '../components/Button';

const whatsappUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Quero%20conversar%20sobre%20mentoria%20em%20AWS%2C%20FinOps%20e%20IA.';

const highlights = [
  '20+ anos em tecnologia',
  'Solutions Architect',
  'AWS, FinOps e IA aplicada',
  '3k+ seguidores no LinkedIn',
];

export function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero__content">
        <p className="eyebrow">Mentoria técnica com Tiago Meneguim</p>
        <h1>Evolua em AWS, FinOps e IA com direção de quem vive arquitetura na prática</h1>
        <p className="hero__subtitle">
          Mentoria para profissionais tech que querem crescer com clareza,
          tomar melhores decisões técnicas e transformar conhecimento em
          oportunidades reais de carreira e consultoria.
        </p>
        <div className="hero__actions" aria-label="Ações principais">
          <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            Quero mentoria
          </Button>
          <Button
            href="https://www.linkedin.com/in/tiago-meneguim/"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            Ver LinkedIn
          </Button>
        </div>
        <div className="hero__proof" aria-label="Destaques profissionais">
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="hero-visual hero-visual--profile">
        <img
          className="hero-photo"
          src="/tiago-meneguim.jpg"
          alt="Tiago Meneguim"
        />
        <div className="hero-note">
          <p className="profile-card__role">2 sessões gratuitas</p>
          <h2>Plano claro para seu próximo passo técnico</h2>
          <p>
            Carreira, arquitetura, AWS, FinOps e IA aplicada com conversa
            objetiva, sem teoria solta.
          </p>
        </div>
      </div>
    </section>
  );
}
