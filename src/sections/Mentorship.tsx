import { Button } from '../components/Button';

type SectionProps = {
  lang: 'pt' | 'en';
};

const whatsappUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Quero%20minha%20mentoria%20gratuita.';

const copy = {
  pt: {
    label: 'Mentoria',
    title: 'Uma mentoria para sair do estudo solto e virar profissional mais estratégico.',
    intro:
      'O foco é ajudar você a conectar tecnologia com carreira, negócio e resultado: o tipo de visão que diferencia profissionais em arquitetura, cloud, FinOps e IA.',
    steps: [
      {
        title: 'Diagnóstico',
        description:
          'Entendemos seu momento, objetivos, lacunas técnicas e oportunidades de crescimento.',
      },
      {
        title: 'Direção',
        description:
          'Montamos um plano prático para evoluir em AWS, FinOps, arquitetura ou IA aplicada.',
      },
      {
        title: 'Execução',
        description:
          'Você sai com próximos passos, materiais, temas de estudo e ações concretas.',
      },
    ],
    offer: '2 sessões gratuitas',
    panel:
      'Para profissionais tech que querem clareza, posicionamento e evolução em temas valorizados no mercado.',
    topics: ['AWS', 'FinOps', 'IA aplicada', 'Arquitetura', 'Carreira tech'],
    cta: 'Quero minha mentoria',
  },
  en: {
    label: 'Mentorship',
    title: 'Mentorship to move from random studying to a more strategic tech career.',
    intro:
      'The goal is to connect technology with career, business and outcomes: the kind of perspective that differentiates professionals in architecture, cloud, FinOps and AI.',
    steps: [
      {
        title: 'Diagnosis',
        description:
          'We map your current stage, goals, technical gaps and growth opportunities.',
      },
      {
        title: 'Direction',
        description:
          'We build a practical plan to grow in AWS, FinOps, architecture or applied AI.',
      },
      {
        title: 'Execution',
        description:
          'You leave with next steps, study topics, useful references and concrete actions.',
      },
    ],
    offer: '2 free sessions',
    panel:
      'For tech professionals looking for clarity, positioning and growth in high-value market topics.',
    topics: ['AWS', 'FinOps', 'Applied AI', 'Architecture', 'Tech career'],
    cta: 'I want mentorship',
  },
};

export function Mentorship({ lang }: SectionProps) {
  const text = copy[lang];

  return (
    <section className="section mentorship mentorship--featured" id="mentoria">
      <div className="section-heading">
        <p className="section-label">{text.label}</p>
        <h2>{text.title}</h2>
        <p>{text.intro}</p>
      </div>
      <div className="mentorship-layout">
        <div className="mentorship-steps">
          {text.steps.map((step) => (
            <article className="step-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <aside className="mentorship__panel">
          <p className="offer">{text.offer}</p>
          <p>{text.panel}</p>
          <div className="mini-tags">
            {text.topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
          <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            {text.cta}
          </Button>
        </aside>
      </div>
    </section>
  );
}
