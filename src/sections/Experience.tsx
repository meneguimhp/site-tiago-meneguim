type SectionProps = {
  lang: 'pt' | 'en';
};

const copy = {
  pt: {
    label: 'Áreas de experiência',
    title: 'Da arquitetura ao resultado operacional.',
    areas: [
      'SaaS',
      'Cloud Architecture',
      'FinOps',
      'IA aplicada',
      'Automação',
      'APIs',
      'Sistemas distribuídos',
    ],
  },
  en: {
    label: 'Experience areas',
    title: 'From architecture to operational outcomes.',
    areas: [
      'SaaS',
      'Cloud Architecture',
      'FinOps',
      'Applied AI',
      'Automation',
      'APIs',
      'Distributed systems',
    ],
  },
};

export function Experience({ lang }: SectionProps) {
  const text = copy[lang];

  return (
    <section className="section" id="experiencia">
      <div className="section-heading">
        <p className="section-label">{text.label}</p>
        <h2>{text.title}</h2>
      </div>
      <div className="tag-grid">
        {text.areas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </div>
    </section>
  );
}
