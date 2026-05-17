import { Button } from '../components/Button';

const mentorshipUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Quero%20conversar%20sobre%20mentoria%20em%20AWS%2C%20FinOps%20e%20IA.';

const projectUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Tenho%20um%20projeto%20ou%20demanda%20pontual%20em%20AWS%2C%20FinOps%2C%20IA%20ou%20arquitetura.';

const highlights = [
  '20+ anos em tecnologia',
  'Solutions Architect',
  'Mentoria, consultoria e projetos pontuais',
  'AWS, FinOps e IA aplicada',
];

export function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="hero__content">
        <p className="eyebrow">Mentoria e consultoria com Tiago Meneguim</p>
        <h1>Mentoria tech e projetos pontuais em AWS, FinOps e IA</h1>
        <p className="hero__subtitle">
          Ajudo profissionais tech a evoluir com clareza e também apoio empresas,
          times e founders em demandas de arquitetura cloud, otimização de custos,
          automação e IA aplicada.
        </p>
        <div className="hero__actions" aria-label="Ações principais">
          <Button href={mentorshipUrl} target="_blank" rel="noreferrer">
            Quero mentoria
          </Button>
          <Button href={projectUrl} target="_blank" rel="noreferrer" variant="secondary">
            Tenho um projeto
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
          <p className="profile-card__role">2 sessões gratuitas de mentoria</p>
          <h2>Ou uma conversa objetiva sobre sua demanda técnica</h2>
          <p>
            Carreira, arquitetura, AWS, FinOps, automação e IA aplicada com
            orientação prática e sem teoria solta.
          </p>
        </div>
      </div>
    </section>
  );
}
