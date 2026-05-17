const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#conteudos', label: 'Conteúdos' },
  { href: '#mentoria', label: 'Mentoria' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        TM
      </a>
      <nav aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
