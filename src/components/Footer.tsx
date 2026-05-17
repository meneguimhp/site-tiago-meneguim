type FooterProps = {
  lang: 'pt' | 'en';
};

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Tiago Meneguim.{' '}
        {lang === 'pt'
          ? 'Mentoria, arquitetura, cloud, FinOps e IA aplicada.'
          : 'Mentorship, architecture, cloud, FinOps and applied AI.'}
      </p>
    </footer>
  );
}
