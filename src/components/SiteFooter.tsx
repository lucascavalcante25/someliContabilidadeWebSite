const SiteFooter = () => {
  return (
    <footer className="py-12 bg-surface-deep border-t border-primary/10">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#home" className="text-2xl font-display font-bold text-surface-deep-foreground">
              SOMELI<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-surface-deep-foreground/60 mt-3 leading-relaxed">
              Contabilidade moderna e consultiva para empresas que querem crescer com segurança.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-surface-deep-foreground mb-4 text-sm">
              Menu
            </h4>
            <ul className="space-y-2">
              {["Home", "Sobre", "Serviços", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-surface-deep-foreground/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-surface-deep-foreground mb-4 text-sm">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-surface-deep-foreground/60">
              <li>contato@someli.com.br</li>
              <li>Fortaleza, CE</li>
              <li>
                <a
                  href="https://instagram.com/someli.contabil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @someli.contabil
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center">
          <p className="text-xs text-surface-deep-foreground/40">
            © {new Date().getFullYear()} SOMELI Assessoria Contábil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
