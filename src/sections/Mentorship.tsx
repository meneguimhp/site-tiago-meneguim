import { Button } from '../components/Button';

const whatsappUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Quero%20minha%20mentoria%20gratuita.';

const steps = [
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
];

const topics = ['AWS', 'FinOps', 'IA aplicada', 'Arquitetura', 'Carreira tech'];

export function Mentorship() {
  return (
    <section className="section mentorship mentorship--featured" id="mentoria">
      <div className="section-heading">
        <p className="section-label">Mentoria</p>
        <h2>Uma mentoria para sair do “estudo solto” e virar profissional mais estratégico.</h2>
        <p>
          O foco é ajudar você a conectar tecnologia com carreira, negócio e
          resultado: o tipo de visão que diferencia profissionais em arquitetura,
          cloud, FinOps e IA.
        </p>
      </div>
      <div className="mentorship-layout">
        <div className="mentorship-steps">
          {steps.map((step) => (
            <article className="step-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <aside className="mentorship__panel">
          <p className="offer">2 sessões gratuitas</p>
          <p>
            Para profissionais tech que querem clareza, posicionamento e evolução
            em temas valorizados no mercado.
          </p>
          <div className="mini-tags">
            {topics.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>
          <Button href={whatsappUrl} target="_blank" rel="noreferrer">
            Quero minha mentoria
          </Button>
        </aside>
      </div>
    </section>
  );
}
