const projects = [
  'Plataforma SaaS escalável',
  'Automação com IA',
  'Otimização de custos cloud',
  'Dashboards operacionais',
];

export function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="section-heading">
        <p className="section-label">Projetos</p>
        <h2>Experiências apresentadas sem expor nomes reais.</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project}>
            <h3>{project}</h3>
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
