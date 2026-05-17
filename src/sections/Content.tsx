const topics = [
  'FinOps e otimização cloud',
  'AWS e arquitetura de soluções',
  'IA, GenAI e automação',
  'SRE e confiabilidade',
  'C4 Model e documentação arquitetural',
  'APIs, OAuth, JWT e segurança',
];

export function Content() {
  return (
    <section className="section content-section" id="conteudos">
      <div className="section-heading">
        <p className="section-label">Conteúdos técnicos</p>
        <h2>Autoridade construída compartilhando conhecimento técnico.</h2>
        <p>
          Também publico e compartilho reflexões sobre arquitetura, engenharia,
          cloud, IA e práticas modernas para times de tecnologia.
        </p>
      </div>
      <div className="tag-grid">
        {topics.map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </div>
    </section>
  );
}
