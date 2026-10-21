// Para adicionar um novo projeto, basta incluir um item na lista.
const projetos = [
  {
    titulo: "NT Driver",
    slug: "nt-driver",
    imagem: "img/nt-driver.png",
    ano: "2026",
    descricao: "Sistema financeiro completo para motoristas de aplicativo, nascido da minha rotina na Uber, 99 e InDrive. Receitas, despesas, metas, histórico de registros, usuários e dashboard com indicadores. API REST com CRUD em Node.js e Express, com migração de SQLite para PostgreSQL preservando todo o histórico.",
    tecnologias: ["React", "Vite", "Node.js", "Express", "REST", "PostgreSQL", "SQLite"],
    demo: "https://nathansouza-hub.github.io/nt-driver-demo/",
    codigo: "",
    privado: true,
  },
  {
    titulo: "Carimbo",
    slug: "carimbo",
    imagem: "",
    ano: "2026",
    descricao: "Sistema de gestão para agências de marketing: contratos, financeiro com boleto e Pix via Asaas e webhooks, e fluxo de aprovação de conteúdo. Atuação no back-end.",
    tecnologias: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Zod"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "Minha Assistente",
    slug: "minha-assistente",
    imagem: "",
    ano: "2026",
    descricao: "App de assistente pessoal sob medida para uma cliente: pagamentos, compromissos, viagens, medicamentos e compras, com lembretes por Web Push. Fiz o back-end: 14 módulos, 22 migrations em PostgreSQL e 172 testes automatizados, com deploy via Docker e CI no GitHub Actions.",
    tecnologias: ["Node.js", "Express", "PostgreSQL", "Knex", "JWT", "Zod", "Docker", "GitHub Actions"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "Lory's Care",
    slug: "loryscare",
    imagem: "",
    ano: "2026",
    descricao: "Aplicação que centraliza a rotina de cuidados de uma pessoa idosa: sinais vitais, medicamentos, rotinas, agenda, plantões e anotações de enfermagem, com fichas para impressão. API própria com login por JWT e testes automatizados.",
    tecnologias: ["Node.js", "Express", "PostgreSQL", "JWT", "JavaScript", "node:test"],
    demo: "",
    codigo: "https://github.com/NathanSouza-hub/Loryscare",
    privado: false,
  },
  {
    titulo: "Souza Tech OS",
    slug: "souza-tech-os",
    imagem: "",
    ano: "2026",
    descricao: "Sistema interno da Souza Tech que centraliza clientes, projetos, tarefas, roadmap, contratos, licenças e financeiro. Fiz o back-end: API, modelagem do banco e regras de negócio.",
    tecnologias: ["TypeScript", "Express", "Prisma", "PostgreSQL", "Zod", "Vitest", "Docker"],
    status: "Em desenvolvimento",
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "LabSystem",
    slug: "labsystem",
    imagem: "",
    ano: "2026",
    descricao: "Sistema de cadastro de produtos com autenticação completa: login com JWT em cookie httpOnly, senhas com bcrypt, API REST separada em camadas (rotas, serviços e repositório) e testes unitários com Jest.",
    tecnologias: ["Node.js", "Express", "MySQL", "JWT", "bcrypt", "Jest", "JavaScript"],
    demo: "",
    codigo: "https://github.com/NathanSouza-hub/labsystem",
    privado: false,
  },
  {
    titulo: "Vizu",
    slug: "vizu",
    imagem: "",
    ano: "2026",
    status: "Em desenvolvimento",
    descricao: "SaaS de gestão para óticas, que começou como um ERP sob medida para uma rede de óticas, o primeiro cliente. Cobrança mensal por loja, com planos com e sem emissão de nota fiscal. Responsável pelo front-end.",
    tecnologias: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Supabase"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "API de Pagamentos",
    slug: "api-pagamentos",
    imagem: "",
    ano: "Faculdade",
    academico: true,
    descricao: "Aplicação de Web Services em PHP para integração com APIs externas de pagamento.",
    tecnologias: ["PHP", "APIs REST"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "Ajuda Comunitária",
    slug: "ajuda-comunitaria",
    imagem: "",
    ano: "Faculdade",
    academico: true,
    descricao: "Aplicativo para conectar usuários e organizações de ajuda comunitária, com banco de dados para os cadastros de ambos.",
    tecnologias: ["SQL"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "Cloud Computing",
    slug: "cloud",
    imagem: "",
    ano: "Faculdade",
    academico: true,
    descricao: "Configuração de máquinas virtuais, redes virtuais e serviços em nuvem.",
    tecnologias: ["Cloud", "Redes", "VMs"],
    demo: "",
    codigo: "",
    privado: true,
  },
  {
    titulo: "Guardião da Água",
    slug: "guardiao-da-agua",
    imagem: "",
    ano: "Faculdade",
    academico: true,
    descricao: "Jogo 2D de conscientização ambiental feito na engine Construct: o jogador coleta recursos e desvia de obstáculos, com lógica de eventos, pontuação e mecânicas de interação.",
    tecnologias: ["Construct", "Lógica de eventos"],
    demo: "",
    codigo: "",
    privado: true,
  },
];

const tecnologias = [
  "JavaScript", "TypeScript", "Node.js", "Express", "Next.js", "React", "PostgreSQL", "MySQL", "SQL", "SQLite", "APIs REST", "JWT", "Prisma",
  "Docker", "PHP", "Python", "Java", "C++", "HTML", "CSS", "Git", "GitHub", "Cloud Computing",
];

function criarElemento(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto) el.textContent = texto;
  return el;
}

function criarLink(texto, href) {
  const a = criarElemento("a", "", texto);
  a.href = href;
  if (href.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noopener";
  }
  return a;
}

function renderizarProjetos() {
  const lista = document.getElementById("lista-projetos");

  for (const projeto of projetos.filter((p) => !p.academico)) {
    const card = criarElemento("article", "project reveal");

    const topo = criarElemento("div", "project-top");
    topo.append(criarElemento("h3", "", projeto.titulo), criarElemento("span", "project-year", projeto.ano));

    const tags = criarElemento("ul", "tags");
    for (const tec of projeto.tecnologias) tags.append(criarElemento("li", "", tec));
    if (!projeto.tecnologias.length) tags.hidden = true;

    const links = criarElemento("div", "project-links");
    if (projeto.demo) links.append(criarLink("Ver demo ↗", projeto.demo));
    if (projeto.codigo) links.append(criarLink("Código ↗", projeto.codigo));
    if (projeto.privado) links.append(criarElemento("span", "project-private", "Código privado"));

    // Com imagem, mostra a captura de tela; sem imagem, mostra o "caminho" do projeto e o status
    const capa = criarElemento("div", "project-cover");
    if (projeto.imagem) {
      card.classList.add("destaque");
      capa.classList.add("com-imagem");
      const img = criarElemento("img");
      img.src = projeto.imagem;
      img.alt = `Tela do projeto ${projeto.titulo}`;
      img.loading = "lazy";
      capa.append(img);
    } else {
      capa.append(criarElemento("span", "project-slug", projeto.slug));
      if (projeto.status) capa.append(criarElemento("span", "project-status", projeto.status));
    }

    const corpo = criarElemento("div", "project-body");
    corpo.append(topo, criarElemento("p", "", projeto.descricao), tags, links);
    card.append(capa, corpo);
    lista.append(card);
  }
}

// Trabalhos da faculdade ficam numa lista compacta, abaixo dos projetos principais
function renderizarAcademicos() {
  const lista = document.getElementById("lista-academicos");

  for (const projeto of projetos.filter((p) => p.academico)) {
    const item = criarElemento("li", "academic-item");
    const tags = criarElemento("ul", "tags");
    for (const tec of projeto.tecnologias) tags.append(criarElemento("li", "", tec));
    item.append(criarElemento("h4", "", projeto.titulo), criarElemento("p", "", projeto.descricao), tags);
    lista.append(item);
  }
}

function renderizarFaixa() {
  const faixa = document.getElementById("faixa-tecnologias");
  // Lista duplicada para o loop da animação ficar contínuo
  for (const tec of [...tecnologias, ...tecnologias]) faixa.append(criarElemento("span", "", tec));
}

function iniciarTema() {
  const raiz = document.documentElement;
  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const tema = raiz.dataset.theme === "dark" ? "light" : "dark";
    raiz.dataset.theme = tema;
    try {
      localStorage.setItem("tema", tema);
    } catch (e) {}
  });
}

function iniciarAnimacoes() {
  const itens = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    itens.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observer.unobserve(entrada.target);
        }
      }
    },
    { threshold: 0.1 }
  );
  itens.forEach((el) => observer.observe(el));
}

function iniciarMenu() {
  const header = document.querySelector(".site-header");
  const botao = document.querySelector(".nav-toggle");
  const nav = document.getElementById("menu");
  const links = nav.querySelectorAll("a");

  const definirAberto = (aberto) => {
    nav.classList.toggle("open", aberto);
    botao.setAttribute("aria-expanded", String(aberto));
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  };
  const fechar = () => definirAberto(false);

  botao.addEventListener("click", () => definirAberto(!nav.classList.contains("open")));
  links.forEach((link) => link.addEventListener("click", fechar));

  // Fecha com Esc (devolvendo o foco ao botão) ou ao clicar fora do cabeçalho
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      fechar();
      botao.focus();
    }
  });
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("open") && !header.contains(e.target)) fechar();
  });

  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 8), { passive: true });

  // Destaca no menu a seção visível
  const observer = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue;
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entrada.target.id}`));
      }
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((secao) => observer.observe(secao));
}

renderizarProjetos();
renderizarAcademicos();
renderizarFaixa();
iniciarTema();
iniciarAnimacoes();
iniciarMenu();
document.getElementById("ano").textContent = new Date().getFullYear();