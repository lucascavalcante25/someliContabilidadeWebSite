/**
 * Ilustração animada do topo: painel financeiro com barras crescendo, linha de tendência
 * e cartões flutuantes. SVG próprio (leve, nítido em qualquer tela). As animações ficam em
 * index.css e são desligadas quando o sistema pede menos movimento.
 */
const bars = [
  { x: 88, h: 70 },
  { x: 148, h: 95 },
  { x: 208, h: 85 },
  { x: 268, h: 120 },
  { x: 328, h: 140 },
  { x: 388, h: 162 },
];

const HeroIllustration = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 520 440"
    className={className}
    role="img"
    aria-label="Painel financeiro com gráfico em crescimento, impostos em dia e folha fechada"
  >
    <defs>
      <linearGradient id="hero-bar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="hsl(320 78% 70%)" />
        <stop offset="1" stopColor="hsl(289 60% 38%)" />
      </linearGradient>
      <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="hsl(289 70% 55%)" />
        <stop offset="1" stopColor="hsl(320 85% 62%)" />
      </linearGradient>
      <filter id="hero-shadow" filterUnits="userSpaceOnUse" x="-60" y="-60" width="640" height="560">
        <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#1b0326" floodOpacity="0.35" />
      </filter>
    </defs>

    {/* janela principal */}
    <g filter="url(#hero-shadow)">
      <rect x="40" y="40" width="440" height="330" rx="22" fill="#fff" />
    </g>
    <path d="M62 40h396a22 22 0 0 1 22 22v24H40V62a22 22 0 0 1 22-22z" fill="hsl(300 40% 97%)" />
    <circle cx="68" cy="63" r="6" fill="hsl(320 78% 80%)" />
    <circle cx="88" cy="63" r="6" fill="hsl(289 50% 82%)" />
    <circle cx="108" cy="63" r="6" fill="hsl(289 40% 90%)" />
    <rect x="300" y="55" width="150" height="16" rx="8" fill="hsl(300 30% 93%)" />

    <text x="70" y="122" fontSize="13" fill="#6b7280" fontFamily="Inter, sans-serif">
      Resultado do ano
    </text>
    <text x="70" y="150" fontSize="24" fontWeight="700" fill="hsl(289 77% 19%)" fontFamily="Montserrat, sans-serif">
      Tudo organizado
    </text>

    <g stroke="hsl(300 30% 93%)" strokeWidth="1">
      {[190, 240, 290, 340].map((y) => (
        <line key={y} x1="70" y1={y} x2="450" y2={y} />
      ))}
    </g>

    {bars.map((b, i) => (
      <rect
        key={b.x}
        className="hero-bar"
        style={{ animationDelay: `${0.15 + i * 0.12}s` }}
        x={b.x}
        y={340 - b.h}
        width="34"
        height={b.h}
        rx="8"
        fill="url(#hero-bar)"
      />
    ))}

    <polyline
      className="hero-line"
      points="105,250 165,228 225,236 285,200 345,182 405,158"
      fill="none"
      stroke="url(#hero-line)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle className="hero-dot" cx="405" cy="158" r="7" fill="hsl(320 85% 62%)" stroke="#fff" strokeWidth="3" />

    {/* cartão: impostos em dia */}
    <g className="hero-float">
      <g filter="url(#hero-shadow)">
        <rect x="0" y="330" width="214" height="72" rx="16" fill="#fff" />
      </g>
      <circle cx="36" cy="366" r="18" fill="#dcfce7" />
      <path d="M28 366l6 6 11-12" fill="none" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="64" y="361" fontSize="14" fontWeight="700" fill="#1f2937" fontFamily="Inter, sans-serif">
        Impostos em dia
      </text>
      <text x="64" y="381" fontSize="12" fill="#6b7280" fontFamily="Inter, sans-serif">
        Guias pagas no prazo
      </text>
    </g>

    {/* cartão: folha fechada */}
    <g className="hero-float hero-float--late">
      <g filter="url(#hero-shadow)">
        <rect x="326" y="0" width="194" height="66" rx="16" fill="#fff" />
      </g>
      <circle cx="360" cy="33" r="17" fill="hsl(300 40% 94%)" />
      <circle cx="360" cy="28" r="5" fill="hsl(289 60% 38%)" />
      <path d="M350 42a10 8 0 0 1 20 0z" fill="hsl(289 60% 38%)" />
      <text x="386" y="29" fontSize="14" fontWeight="700" fill="#1f2937" fontFamily="Inter, sans-serif">
        Folha fechada
      </text>
      <text x="386" y="48" fontSize="12" fill="#6b7280" fontFamily="Inter, sans-serif">
        Equipe paga em dia
      </text>
    </g>
  </svg>
);

export default HeroIllustration;
