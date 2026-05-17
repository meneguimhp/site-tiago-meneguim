const services = [
  {
    title: 'Trilha AWS',
    description:
      'Arquitetura, boas práticas, segurança, resiliência, desenho de soluções e preparação para conversas técnicas.',
  },
  {
    title: 'Trilha FinOps',
    description:
      'Custos cloud, desperdícios, governança, previsibilidade e como transformar economia em argumento de negócio.',
  },
  {
    title: 'Trilha IA aplicada',
    description:
      'Casos de uso reais, automações, GenAI, produtividade e como sair do hype para aplicação prática.',
  },
  {
    title: 'Consultoria pontual',
    description:
      'Diagnóstico para empresas e times que precisam revisar arquitetura, custos cloud ou oportunidades com IA.',
  },
];

export function Services() {
  return (
    <section className="section" id="servicos">
      <div className="section-heading">
        <p className="section-label">Trilhas e consultoria</p>
        <h2>Mentoria como produto principal, consultoria como consequência natural.</h2>
        <p>
          Você pode começar pela mentoria individual ou trazer um problema real
          da empresa para uma conversa de diagnóstico.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
