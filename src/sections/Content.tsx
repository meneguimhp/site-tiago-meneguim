type SectionProps = {
  lang: 'pt' | 'en';
};

const copy = {
  pt: {
    label: 'Conteúdos técnicos',
    title: 'Autoridade construída compartilhando conhecimento técnico.',
    intro:
      'Também publico e compartilho reflexões sobre arquitetura, engenharia, cloud, IA e práticas modernas para times de tecnologia.',
    topics: [
      'FinOps e otimização cloud',
      'AWS e arquitetura de soluções',
      'IA, GenAI e automação',
      'SRE e confiabilidade',
      'C4 Model e documentação arquitetural',
      'APIs, OAuth, JWT e segurança',
    ],
  },
  en: {
    label: 'Technical content',
    title: 'Authority built by sharing technical knowledge.',
    intro:
      'I also publish and share thoughts on architecture, engineering, cloud, AI and modern practices for technology teams.',
    topics: [
      'FinOps and cloud optimization',
      'AWS and solution architecture',
      'AI, GenAI and automation',
      'SRE and reliability',
      'C4 Model and architecture documentation',
      'APIs, OAuth, JWT and security',
    ],
  },
};

export function Content({ lang }: SectionProps) {
  const text = copy[lang];

  return (
    <section className="section content-section" id="conteudos">
      <div className="section-heading">
        <p className="section-label">{text.label}</p>
        <h2>{text.title}</h2>
        <p>{text.intro}</p>
      </div>
      <div className="tag-grid">
        {text.topics.map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </div>
    </section>
  );
}
