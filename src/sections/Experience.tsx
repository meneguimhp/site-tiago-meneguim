const areas = [
  'SaaS',
  'Cloud Architecture',
  'FinOps',
  'IA aplicada',
  'Automação',
  'APIs',
  'Sistemas distribuídos',
];

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="section-heading">
        <p className="section-label">Áreas de experiência</p>
        <h2>Da arquitetura ao resultado operacional.</h2>
      </div>
      <div className="tag-grid">
        {areas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </div>
    </section>
  );
}
