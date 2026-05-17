type SectionProps = {
  lang: 'pt' | 'en';
};

const copy = {
  pt: {
    label: 'Experiências',
    title: 'Projetos apresentados por impacto, sem expor nomes reais.',
    disclaimer:
      'Parte dos projetos desenvolvidos possuem cláusulas de confidencialidade (NDA), portanto apenas experiências e tecnologias são apresentadas.',
    projects: [
      {
        title: 'Otimização de custos cloud',
        description:
          'Identificação de desperdícios, ajustes de governança e direcionamento FinOps para melhorar previsibilidade.',
      },
      {
        title: 'Arquiteturas SaaS escaláveis',
        description:
          'Desenho de soluções distribuídas com foco em resiliência, APIs, integrações e crescimento sustentável.',
      },
      {
        title: 'Automação com IA',
        description:
          'PoCs e automações para reduzir esforço operacional e acelerar fluxos de trabalho com IA aplicada.',
      },
      {
        title: 'Dashboards operacionais',
        description:
          'Visibilidade para operação, custos, indicadores técnicos e decisões de arquitetura orientadas por dados.',
      },
    ],
  },
  en: {
    label: 'Experience',
    title: 'Projects presented by impact, without exposing real names.',
    disclaimer:
      'Some projects are covered by confidentiality agreements (NDA), so only experiences and technologies are presented.',
    projects: [
      {
        title: 'Cloud cost optimization',
        description:
          'Waste identification, governance improvements and FinOps direction to improve predictability.',
      },
      {
        title: 'Scalable SaaS architectures',
        description:
          'Distributed solution design focused on resilience, APIs, integrations and sustainable growth.',
      },
      {
        title: 'AI automation',
        description:
          'PoCs and automations to reduce operational effort and accelerate workflows with applied AI.',
      },
      {
        title: 'Operational dashboards',
        description:
          'Visibility into operations, costs, technical indicators and data-informed architecture decisions.',
      },
    ],
  },
};

export function Projects({ lang }: SectionProps) {
  const text = copy[lang];

  return (
    <section className="section" id="projetos">
      <div className="section-heading">
        <p className="section-label">{text.label}</p>
        <h2>{text.title}</h2>
      </div>
      <div className="project-list">
        {text.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
      <blockquote>{text.disclaimer}</blockquote>
    </section>
  );
}
