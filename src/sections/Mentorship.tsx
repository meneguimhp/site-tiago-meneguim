const topics = ['Carreira tech', 'Arquitetura', 'Cloud', 'FinOps', 'IA'];

export function Mentorship() {
  return (
    <section className="section mentorship" id="mentoria">
      <div>
        <p className="section-label">Mentoria</p>
        <h2>Sessões focadas em evolução técnica e direção de carreira.</h2>
      </div>
      <div className="mentorship__panel">
        <p className="offer">2 sessões gratuitas</p>
        <ul>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
