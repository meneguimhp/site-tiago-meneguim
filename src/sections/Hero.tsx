import { Button } from '../components/Button';
import { WhatsAppIcon } from '../components/Icons';

type SectionProps = {
  lang: 'pt' | 'en';
};

const links = {
  mentorship:
    'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Quero%20conversar%20sobre%20mentoria%20em%20AWS%2C%20FinOps%20e%20IA.',
  project:
    'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Tenho%20um%20projeto%20ou%20demanda%20pontual%20em%20AWS%2C%20FinOps%2C%20IA%20ou%20arquitetura.',
};

const copy = {
  pt: {
    eyebrow: 'Mentoria e consultoria com Tiago Meneguim',
    title: 'Mentoria tech e projetos pontuais em AWS, FinOps e IA',
    subtitle:
      'Ajudo profissionais tech a evoluir com clareza e também apoio empresas, times e founders em demandas de arquitetura cloud, otimização de custos, automação e IA aplicada.',
    primary: 'Quero mentoria',
    secondary: 'Tenho um projeto',
    highlights: [
      '20+ anos em tecnologia',
      'Solutions Architect',
      'Mentoria, consultoria e projetos pontuais',
      'AWS, FinOps e IA aplicada',
    ],
    noteLabel: '2 sessões gratuitas de mentoria',
    noteTitle: 'Ou uma conversa objetiva sobre sua demanda técnica',
    noteText:
      'Carreira, arquitetura, AWS, FinOps, automação e IA aplicada com orientação prática e sem teoria solta.',
  },
  en: {
    eyebrow: 'Mentorship and consulting with Tiago Meneguim',
    title: 'Tech mentorship and project-based work in AWS, FinOps and AI',
    subtitle:
      'I help tech professionals grow with clarity and support companies, teams and founders with cloud architecture, cost optimization, automation and applied AI initiatives.',
    primary: 'I want mentorship',
    secondary: 'I have a project',
    highlights: [
      '20+ years in technology',
      'Solutions Architect',
      'Mentorship, consulting and project work',
      'AWS, FinOps and applied AI',
    ],
    noteLabel: '2 free mentorship sessions',
    noteTitle: 'Or a focused conversation about your technical demand',
    noteText:
      'Career, architecture, AWS, FinOps, automation and applied AI with practical guidance and no loose theory.',
  },
};

export function Hero({ lang }: SectionProps) {
  const text = copy[lang];

  return (
    <section className="hero section" id="inicio">
      <div className="hero__content">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p className="hero__subtitle">{text.subtitle}</p>
        <div className="hero__actions" aria-label="Ações principais">
          <Button href={links.mentorship} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            {text.primary}
          </Button>
          <Button href={links.project} target="_blank" rel="noreferrer" variant="secondary">
            <WhatsAppIcon />
            {text.secondary}
          </Button>
        </div>
        <div className="hero__proof" aria-label="Destaques profissionais">
          {text.highlights.map((item) => (
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
          <p className="profile-card__role">{text.noteLabel}</p>
          <h2>{text.noteTitle}</h2>
          <p>{text.noteText}</p>
        </div>
      </div>
    </section>
  );
}
