type SectionProps = {
  lang: 'pt' | 'en';
};

const copy = {
  pt: {
    label: 'Mentoria, consultoria e frelas',
    title: 'Você pode me chamar para evoluir sua carreira ou resolver uma demanda técnica.',
    intro:
      'A mentoria é a porta principal. Mas também atuo em projetos pontuais, diagnósticos técnicos e consultorias sob demanda para empresas, times e profissionais independentes.',
    services: [
      {
        title: 'Mentoria AWS',
        description:
          'Arquitetura, boas práticas, segurança, resiliência, desenho de soluções e preparação para conversas técnicas.',
      },
      {
        title: 'Mentoria FinOps',
        description:
          'Custos cloud, desperdícios, governança, previsibilidade e como transformar economia em argumento de negócio.',
      },
      {
        title: 'Mentoria em IA aplicada',
        description:
          'Casos de uso reais, automações, GenAI, produtividade e como sair do hype para aplicação prática.',
      },
      {
        title: 'Projetos pontuais',
        description:
          'Consultoria sob demanda para revisar arquitetura, otimizar custos cloud, automatizar processos ou validar oportunidades com IA.',
      },
    ],
  },
  en: {
    label: 'Mentorship, consulting and projects',
    title: 'You can reach out to grow your career or solve a technical demand.',
    intro:
      'Mentorship is the main entry point. I also work on project-based consulting, technical diagnostics and on-demand support for companies, teams and independent professionals.',
    services: [
      {
        title: 'AWS mentorship',
        description:
          'Architecture, best practices, security, resilience, solution design and preparation for technical conversations.',
      },
      {
        title: 'FinOps mentorship',
        description:
          'Cloud costs, waste reduction, governance, forecasting and turning savings into a business argument.',
      },
      {
        title: 'Applied AI mentorship',
        description:
          'Real use cases, automation, GenAI, productivity and how to move from hype to practical application.',
      },
      {
        title: 'Project-based consulting',
        description:
          'On-demand consulting to review architecture, optimize cloud costs, automate processes or validate AI opportunities.',
      },
    ],
  },
};

export function Services({ lang }: SectionProps) {
  const text = copy[lang];

  return (
    <section className="section" id="servicos">
      <div className="section-heading">
        <p className="section-label">{text.label}</p>
        <h2>{text.title}</h2>
        <p>{text.intro}</p>
      </div>
      <div className="service-grid">
        {text.services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
