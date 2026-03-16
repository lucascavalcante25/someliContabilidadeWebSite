import logo from "@/assets/logo-colorida-03.png";

const SiteFooter = () => {
  return (
    <footer className="py-12 bg-surface-deep border-t border-primary/10">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#home">
              <img src={logo} alt="SOMELI Assessoria Contábil" className="h-10 brightness-0 invert" />
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
              <li>someli@someli.com.br</li>
              <li>(85) 99843-1249</li>
              <li>Fortaleza, CE</li>
              <li>Seg–Sex · 08:00–17:00</li>
              <li>
                <a
                  href="https://www.instagram.com/somelicontabilidade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @somelicontabilidade
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
