const projects = [
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
];

export function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="section-heading">
        <p className="section-label">Experiências</p>
        <h2>Projetos apresentados por impacto, sem expor nomes reais.</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
      <blockquote>
        Parte dos projetos desenvolvidos possuem cláusulas de confidencialidade
        (NDA), portanto apenas experiências e tecnologias são apresentadas.
      </blockquote>
    </section>
  );
}
