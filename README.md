<div align="center">

<img src="public/og-image.png" alt="SOMELI Assessoria Contábil" width="720" />

# SOMELI Assessoria Contábil · Site oficial

**Contabilidade moderna para empresas que querem crescer.**

[![Site no ar](https://img.shields.io/badge/site-someli.com.br-8e1b8c?style=for-the-badge)](https://www.someli.com.br/)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## Sobre o projeto

Site institucional da **SOMELI Assessoria Contábil**, escritório de contabilidade em Fortaleza (CE) com atendimento digital.
O objetivo do site é apresentar os serviços, transmitir confiança e levar o visitante a uma conversa pelo **WhatsApp** ou pelo formulário de contato.

### O que tem na página

| Seção | O que mostra |
| --- | --- |
| **Início** | Chamada principal, nota 5,0 no Google e ilustração animada de painel financeiro |
| **Sobre** | Quem somos, com foto e selos de confiança |
| **Serviços** | Abertura de empresas, contabilidade, assessoria fiscal e trabalhista, planejamento tributário e regularização |
| **Diferenciais** | Por que escolher a SOMELI |
| **Para quem atendemos** | MEI, novos negócios, comércio, serviços, profissionais liberais e pessoa física |
| **Como funciona** | Os 4 passos para começar |
| **Depoimentos** | Carrossel com avaliações reais de clientes no Google |
| **Dúvidas frequentes** | Perguntas comuns em acordeão |
| **Contato** | Formulário (enviado por e-mail via EmailJS), WhatsApp, Instagram e horário |

Ainda há um botão flutuante de WhatsApp em todas as telas.

### Destaques de experiência

- **Responsivo:** pensado primeiro para o celular e conferido em 375 px e 1280 px.
- **Animações leves:** entradas suaves ao rolar a página, desligadas automaticamente quando o sistema pede menos movimento (`prefers-reduced-motion`).
- **Leve:** ilustração do topo em SVG próprio e fotos em WebP otimizado.
- **Acessível:** textos alternativos, rótulos em português nos botões e navegação por teclado.
- **Pronto para compartilhar:** favicon e ícones da marca, imagem de prévia para WhatsApp e redes sociais (Open Graph) e manifesto para "Adicionar à tela inicial".

---

## Tecnologias

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) para desenvolvimento e build
- [Tailwind CSS](https://tailwindcss.com/) com componentes [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- [Embla Carousel](https://www.embla-carousel.com/) nos depoimentos
- [lucide-react](https://lucide.dev/) para ícones
- [EmailJS](https://www.emailjs.com/) para enviar o formulário de contato
- [Vitest](https://vitest.dev/) + Testing Library para testes

---

## Como rodar localmente

Pré-requisito: **Node.js 18 ou superior**.

```bash
npm install
```

```bash
npm run dev
```

O site abre em `http://localhost:8080`. Para usar outra porta, por exemplo quando a 8080 estiver ocupada:

```bash
npx vite --port 5173
```

### Comandos disponíveis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento com recarga automática |
| `npm test` | Roda os testes uma vez |
| `npm run lint` | Verifica o código com ESLint |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Serve a pasta `dist/` localmente para conferir o build |
| `npm run deploy` | Publica a pasta `dist/` na branch `gh-pages` |

---

## Publicação

O site é hospedado no **GitHub Pages** com o domínio próprio `www.someli.com.br` (arquivo `public/CNAME`).

1. Confira localmente com `npm run dev`.
2. Rode os testes e gere o build:
   ```bash
   npm test && npm run build
   ```
3. Publique:
   ```bash
   npm run deploy
   ```

O comando envia o conteúdo de `dist/` para a branch `gh-pages`, que é a que o GitHub Pages serve. A branch `main` guarda o código-fonte.

---

## Estrutura

```
public/                  favicon, ícones, imagem de compartilhamento, CNAME
src/
├── assets/              logos da marca e fotos (créditos em assets/CREDITOS.md)
├── components/          uma seção do site por arquivo (HeroSection, FaqSection, ...)
│   └── ui/              componentes base shadcn/ui
├── hooks/               useScrollReveal (animação ao rolar)
├── lib/
│   ├── contato.ts       WhatsApp, Instagram e link das avaliações num só lugar
│   └── navegacao.ts     itens do menu (topo e rodapé)
├── pages/Index.tsx      monta a página na ordem das seções
└── test/                testes da página
```

### Alterações comuns

- **Telefone, WhatsApp ou Instagram:** `src/lib/contato.ts`.
- **Itens do menu:** `src/lib/navegacao.ts`. Cada link precisa apontar para um `id` existente na página, e um teste confere isso.
- **Textos de uma seção:** o componente correspondente em `src/components/`.
- **Cores da marca:** variáveis em `src/index.css`.

---

## Identidade visual e créditos

- Logos, símbolo e cores vêm do **Brand Pack oficial da SOMELI**.
- Fotos do [Unsplash](https://unsplash.com/license), com autores listados em [`src/assets/CREDITOS.md`](src/assets/CREDITOS.md).
- A ilustração do topo é um SVG feito para o site.

---

<div align="center">

**SOMELI Assessoria Contábil** · Fortaleza, CE
[someli.com.br](https://www.someli.com.br/) · [WhatsApp](https://wa.me/5585998431249) · [Instagram](https://www.instagram.com/somelicontabilidade/)

</div>
