document.addEventListener("DOMContentLoaded", () => {
  // --- ÍCONES (SVG como strings) ---
  const icons = {
    film: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 3v18" /><path d="M3 7h18" /><path d="M3 17h18" /><path d="M17 3v18" /></svg>',
    book: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>',
    tv: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></svg>',
    gamepad:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" /><path d="M18 12h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" /><path d="M12 18V6" /><path d="M17.4 15.4 22 17l-1.6 4.6" /><path d="M6.6 8.6 2 7l1.6-4.6" /><path d="m10 10 4 4" /><path d="m14 10-4 4" /></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>',
    music:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>',
  };

  // --- DADOS DAS OBRAS FAVORITAS ---
  const myFavoriteWorks = [
    {
      id: 1,
      title: "Shingeki no Kyojin",
      description:
        'Uma história complexa sobre humanidade, sacrifício e liberdade, "Shingeki no Kyojin" nos transporta para um mundo devastado por titãs, onde os protagonistas enfrentam forças além de sua compreensão. A série explora não apenas a luta pela sobrevivência, mas também os dilemas morais, os efeitos do poder e a natureza das sociedades.',
      image: "shingekinokyojin.jpg",
      alt: "Pôster de Shingeki no Kyojin",
      tag: "ação, fantasia, filosofia, guerra",
      category: "Anime",
    },
    {
      id: 2,
      title: "Sonny Boy",
      description:
        'Com uma narrativa surreal e introspectiva, "Sonny Boy" é uma obra que mistura mistério, ficção científica e drama psicológico. O anime segue um grupo de estudantes que, após serem transportados para uma dimensão paralela, precisam lidar com os próprios poderes e os conflitos internos que surgem entre eles.',
      image: "sonnyboy.jpg",
      alt: "Pôster de Sonny Boy",
      tag: "ficção científica, psicológico, surrealismo",
      category: "Anime",
    },
    {
      id: 3,
      title: "Koe no Katachi",
      description:
        'Uma obra tocante e delicada sobre redenção, aceitação e as complexas relações humanas. "Koe no Katachi" (A Silent Voice) conta a história de Shoya Ishida, um jovem que, após ter intimidado uma colega surda, tenta se redimir anos depois.',
      image: "koenokatachi.jpg",
      alt: "Pôster de Koe no Katachi",
      tag: "drama, romance, empatia",
      category: "Anime Filme",
    },
    {
      id: 4,
      title: "Arcane",
      description:
        'Baseada no universo de "League of Legends", "Arcane" é uma série animada que transcende a simples adaptação de jogo, oferecendo uma narrativa poderosa sobre classe social, ambição, e os vínculos entre irmãs.',
      image: "arcane.jpg",
      alt: "Pôster de Arcane",
      tag: "ação, fantasia, drama",
      category: "Série",
    },
    {
      id: 5,
      title: "Dungeon Meshi",
      description:
        'Uma série de fantasia única que mistura aventura e culinária de maneira inusitada. "Dungeon Meshi" acompanha um grupo de aventureiros que exploram masmorras e enfrentam monstros, enquanto buscam ingredientes raros para preparar pratos deliciosos.',
      image: "dungeonmeshi.jpg",
      alt: "Pôster de Dungeon Meshi",
      tag: "fantasia, culinária, aventura",
      category: "Anime",
    },
    {
      id: 6,
      title: "In This Corner of the World",
      description:
        'Com uma abordagem sensível e profunda, "In This Corner of the World" retrata a vida de uma jovem durante a Segunda Guerra Mundial no Japão, oferecendo uma visão humanista e delicada da guerra.',
      image: "inthiscornerofthworld.jpg",
      alt: "Pôster de In This Corner of the World",
      tag: "drama, histórico, guerra",
      category: "Anime Filme",
    },
    {
      id: 7,
      title: "Todas as Obras do Studio Ghibli",
      description:
        "O Studio Ghibli, sob a direção de mestres como Hayao Miyazaki e Isao Takahata, criou uma vasta gama de filmes que exploram temas como a natureza, a vida, e a complexidade humana, tudo dentro de um universo estético e narrativo único.",
      image: "ghibli3.jpg",
      alt: "Pôster das obras do Studio Ghibli",
      tag: "anime, fantasia, aventura",
      category: "Anime Filme",
    },
    {
      id: 8,
      title: "Omori",
      description:
        '"Omori" é uma obra de RPG que combina estética colorida com uma narrativa profundamente sombria, abordando questões de identidade, trauma e crescimento.',
      image: "omori1.jpg",
      alt: "Pôster de Omori",
      tag: "RPG, psicológico, aventura",
      category: "Jogo",
    },
    {
      id: 9,
      title: "The Last of Us",
      description:
        '"The Last of Us" é mais do que um jogo de sobrevivência pós-apocalíptico; é uma jornada emocional sobre os laços humanos e o custo da humanidade em um mundo devastado.',
      image: "lastofus.jpg",
      alt: "Pôster de The Last of Us",
      tag: "aventura, drama, sobrevivência",
      category: "Jogo",
    },
    {
      id: 10,
      title: "Monster (2023)",
      description:
        'Em Monster (2023), Hirokazu Kore-eda mergulha na questão de quem é o verdadeiro "monstro". A história segue a jornada de uma criança, sua mãe e seu professor, cujas vidas se entrelaçam após um incidente envolvendo acusações de bullying e abuso.',
      image: "monster2023_koreeda.jpg",
      alt: "Pôster de Monster (2023)",
      tag: "drama, psicológico, reflexão",
      category: "Filme",
    },
    {
      id: 11,
      title: "Clair Obscur: Expedition 33",
      description:
        'Em um mundo inspirado na Belle Époque francesa, uma entidade sombria chamada "Artífice" apaga da existência todos que atingem uma certa idade, número que diminui a cada ano. A "Expedição 33" é a última esperança da humanidade para detê-la. É uma história trágica sobre o impacto devastador do luto e a frágil linha entre realidade e ilusão.',
      image: "clair_obscur_expedition33.png",
      alt: "Arte promocional de Clair Obscur: Expedition 33",
      tag: "RPG, fantasia, narrativo, drama, luto, mistério",
      category: "Jogo",
    },
    {
      id: 12,
      title: "Adolescência",
      description:
        "Jamie Miller, um garoto de 13 anos, é preso sob a acusação de assassinar uma colega de escola. A minissérie acompanha o impacto devastador dessa acusação sobre sua família, a investigação policial e os dilemas psicológicos que emergem. Filmada em plano-sequência, a produção mergulha nos perigos da cultura digital, masculinidade tóxica e isolamento juvenil, oferecendo uma reflexão intensa sobre os desafios da adolescência na era moderna.",
      image: "adolescence.png",
      alt: "Pôster oficial da minissérie Adolescência da Netflix",
      tag: "Drama, crime, psicológico, plano-sequência, adolescência, crítica social",
      category: "Série",
    },
    {
      id: 13,
      title: "Our Little Sister",
      description:
        "Apesar de não verem o pai há muito tempo, três irmãs de vinte e poucos anos resolvem ir ao enterro dele. Lá, elas descobrem que também têm uma meia-irmã adolescente e a convidam para ir morar com elas na cidade litorânea de Kamakura. Com o passar dos dias, a presença da garota as leva a enfrentar profundas reflexões sobre suas vidas e o significado dos laços familiares, o que muda completamente a vida de todas.",
      image: "ols.png",
      alt: "Pôster Our Little Sister",
      tag: "Drama, cotidiano, família, reflexão, laços familiares",
      category: "Filme",
    },
    {
      id: 14,
      title: "Nobody Knows",
      description:
        "O filme conta a história de quatro irmãos que vivem escondidos em um pequeno apartamento em Tóquio, após serem abandonados pela mãe. O irmão mais velho, Akira, assume a responsabilidade de cuidar dos irmãos, enfrentando dificuldades para conseguir dinheiro, comida e proteger a família. Baseado em uma história real, o filme retrata com sensibilidade e delicadeza a infância negligenciada e a luta silenciosa dessas crianças pela sobrevivência.",
      image: "nobodyknows.png",
      alt: "Pôster Nobody Knows",
      tag: "Drama, cotidiano, família, abandono, infância",
      category: "Filme",
    },
    {
      id: 15,
      title: "One Day, You Will Reach the Sea",
      description:
        "O filme acompanha a jornada de Mana, uma jovem que lida com a perda de sua melhor amiga, Sumire, que desapareceu durante o tsunami de 2011 no Japão. À medida que Mana revive memórias da amizade, do afeto e da ausência, ela embarca em um processo de luto, reflexão e amadurecimento. Com uma abordagem poética e contemplativa, a obra fala sobre saudade, aceitação e a tentativa de seguir em frente enquanto carrega as marcas do passado.",
      image: "oneday.png",
      alt: "Pôster One Day, You Will Reach the Sea",
      tag: "Drama, luto, amizade, memória, superação",
      category: "Filme",
    },
    {
      id: 16,
      title: "O Ceifador",
      description:
        "Em um futuro onde a morte natural foi erradicada, a humanidade depende dos Ceifadores para controlar a população. Citra e Rowan são dois jovens escolhidos para se tornarem aprendizes de Ceifador, enfrentando dilemas éticos, conflitos morais e uma sociedade que teme e reverencia aqueles que detêm o poder de tirar vidas. A obra reflete sobre o valor da vida, as consequências do poder absoluto e as escolhas que definem quem somos.",
      image: "oceifador.png",
      alt: "Capa do livro O Ceifador",
      tag: "Distopia, ética, vida, morte, futuro",
      category: "Livro",
    },
    {
  id: 17,
  title: "Gatos Alados (serie)",
  description:
    "A Sra. Jane Malhada nunca soube explicar por que seus quatro filhotes — Thelma, Roger, James e Harriet — nasceram com asas. Com esse dom, os gatinhos fogem da cidade perigosa onde nasceram e embarcam em quatro aventuras encantadoras. A série, escrita por Ursula K. Le Guin e ilustrada por S. D. Schindler, é uma história sensível sobre família, liberdade, amizade e descobertas.",
  image: "gatosalados.png",
  alt: "Capa do livro Gatos Alados",
  tag: "Fantasia, aventura, amizade, infância, animais",
  category: "Livro",
},

    {
      id: 18,
      title: "Alicia - Expedition 33 OST",
      description:
      "'Alicia' é uma das faixas mais emocionantes da trilha sonora do RPG Clair Obscur: Expedition 33. A música é interpretada por vocais etéreos que evocam sentimentos profundos de perda e esperança. A canção é acompanhada por arranjos orquestrais delicados, incluindo violino e violoncelo. A letra é cantada em uma língua fictícia que adiciona uma camada de misticismo à peça.",
      image: "alicia.jpg", 
      alt: "Capa do álbum qp de Ichiko Aoba",
      tag: "RPG, fantasia, trilha sonora, orquestral, vocal",
      category: "Música",
    },
  ];

  const mediaByCategories = {
    filmes: [],
    seriesAnimes: [],
    livros: [],
    jogos: [],
    musicas: [],
  };

  myFavoriteWorks.forEach((item) => {
    const preparedItem = {
      id: item.id,
      title: item.title,
      description: item.description,
      imageUrl: `images/${item.image}`,
      categoryForDisplay: item.category,
      tag: item.tag,
      alt: item.alt || item.title,
    };

    const itemCategoryLower = item.category.toLowerCase();

    // Adiciona a 'filmes' se for Filme ou Anime Filme
    if (itemCategoryLower === "filme" || itemCategoryLower === "anime filme") {
      if (!mediaByCategories.filmes.find(existing => existing.id === preparedItem.id)) {
          mediaByCategories.filmes.push(preparedItem);
      }
    }

    // Adiciona a 'seriesAnimes' APENAS se for Anime (série) ou Série
    if (itemCategoryLower === "anime" || itemCategoryLower === "série") {
      if (!mediaByCategories.seriesAnimes.find(existing => existing.id === preparedItem.id)) {
        mediaByCategories.seriesAnimes.push(preparedItem);
      }
    }

    if (itemCategoryLower === "livro") {
      if (!mediaByCategories.livros.find(existing => existing.id === preparedItem.id)) {
        mediaByCategories.livros.push(preparedItem);
      }
    }

    if (
      itemCategoryLower === "jogo" ||
      (item.tag && item.tag.toLowerCase().includes("rpg"))
    ) {
      if (!mediaByCategories.jogos.find(existing => existing.id === preparedItem.id)) {
        mediaByCategories.jogos.push(preparedItem);
      }
    }
    
    if (itemCategoryLower === "música") {
      if (!mediaByCategories.musicas.find(existing => existing.id === preparedItem.id)) {
        mediaByCategories.musicas.push(preparedItem);
      }
    }
  });

  // --- Elementos do DOM ---
  const mainContent = document.getElementById("main-content");
  const tabsNav = document.getElementById("tabs-nav");
  const tabButtons = tabsNav.querySelectorAll(".tab-button");
  const currentYearSpan = document.getElementById("current-year");

  let activeTab = "filmes"; 

  // --- FUNÇÕES DE RENDERIZAÇÃO ---
  function createMediaCard(media) {
    const placeholderImage = `https://placehold.co/400x300/e2e8f0/4a5568?text=${encodeURIComponent(
      media.title
    )}`;
    return `
      <div class="media-card">
          <img 
              src="${media.imageUrl}" 
              alt="${media.alt}" 
              onerror="this.onerror=null; this.src='${placeholderImage}';"
          />
          <div class="card-content">
              <h3 class="card-title">${media.title}</h3>
              <p class="card-description">${media.description}</p>
              <div class="mt-auto">
                  <span class="card-category-tag">${media.categoryForDisplay}</span>
                  ${media.tag ? `<p class="card-extra-tags">Tags: ${media.tag}</p>` : ""}
              </div>
          </div>
      </div>
    `;
  }

  function renderMediaList(mediaArray, categoryTitleIgnored) { // categoryTitleIgnored não é mais usado para display
    let contentHTML = ""; 
    if (!mediaArray || mediaArray.length === 0) {
      contentHTML +=
        '<p class="text-center text-brand-textSecondary py-10">Nenhuma obra encontrada nesta categoria por enquanto.</p>';
    } else {
      const mediaHTML = mediaArray.map(createMediaCard).join("");
      contentHTML += `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 xl:gap-8 pt-8"> <!-- Adicionado pt-8 para espaço no topo -->
              ${mediaHTML}
          </div>
      `;
    }
    mainContent.innerHTML = contentHTML;
  }

  function renderAboutSection() {
    mainContent.innerHTML = `
      <div class="about-section">
          <h2 class="text-3xl font-bold text-brand-textPrimary mb-8 text-center">Sobre o Site</h2> <!-- Mantém título específico para "Sobre" -->
          <p>
              Este site é um espaço dedicado à celebração das obras que nos tocam e nos inspiram,
              sejam elas filmes, séries, animes, livros, jogos ou músicas.
              Em um mundo repleto de diversas formas de expressão artística, cada um de nós encontra
              narrativas, personagens, universos e melodias que ressoam profundamente com nossa própria
              experiência e imaginação.
          </p>
          <p>
              A paixão por essas mídias vai além do simples entretenimento.
              É através delas que exploramos novas perspectivas, desenvolvemos empatia,
              e até mesmo encontramos conforto e refúgio. Expressar o que gostamos,
              compartilhar nossas "obras favoritas", é uma forma poderosa de autoconhecimento
              e de conexão com outras pessoas que compartilham dos mesmos interesses.
          </p>
          <p>
              Cada obra que escolhemos como favorita é um reflexo de quem somos,
              dos valores que prezamos e das emoções que nos movem. Este site é um convite para
              você celebrar essas conexões e compartilhar um pedaço do seu mundo interior.
          </p>
      </div>
    `;
  }

  function updateContent() {
    mainContent.innerHTML =
      '<div class="text-center py-10"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div><p class="mt-4 text-brand-textSecondary">Carregando...</p></div>';

    setTimeout(() => {
      switch (activeTab) {
        case "filmes":
          renderMediaList(mediaByCategories.filmes, "Ignorado");
          break;
        case "seriesAnimes":
          renderMediaList(mediaByCategories.seriesAnimes, "Ignorado");
          break;
        case "livros":
          renderMediaList(mediaByCategories.livros, "Ignorado");
          break;
        case "jogos":
          renderMediaList(mediaByCategories.jogos, "Ignorado");
          break;
        case "musicas":
          renderMediaList(mediaByCategories.musicas, "Ignorado");
          break;
        case "sobre":
          renderAboutSection();
          break;
        default:
          mainContent.innerHTML =
            '<p class="text-center text-red-500">Erro: Conteúdo da aba não encontrado.</p>';
      }
    }, 150); 
  }

  // --- LÓGICA DAS ABAS ---
  tabButtons.forEach((button) => {
    const tabType = button.dataset.tab;
    let iconSvg = "";

    Object.keys(icons).forEach(key => {
        if (icons[key] && !icons[key].includes('stroke-width')) { // Checa se icons[key] existe
            icons[key] = icons[key].replace('<svg ', '<svg stroke-width="2" ');
        }
    });

    if (tabType === "filmes") iconSvg = icons.film;
    else if (tabType === "seriesAnimes") iconSvg = icons.tv;
    else if (tabType === "livros") iconSvg = icons.book;
    else if (tabType === "jogos") iconSvg = icons.gamepad;
    else if (tabType === "musicas") iconSvg = icons.music;
    else if (tabType === "sobre") iconSvg = icons.info;

    if (iconSvg) {
        // Remove qualquer SVG existente para evitar duplicação se o script rodar mais de uma vez ou em hot-reloads
        const existingSvg = button.querySelector('svg');
        if (existingSvg) {
            existingSvg.remove();
        }
        button.insertAdjacentHTML("afterbegin", iconSvg);
    }


    button.addEventListener("click", () => {
      if (activeTab === button.dataset.tab) return; 
      activeTab = button.dataset.tab;
      tabButtons.forEach((btn) => btn.classList.remove("active-tab"));
      button.classList.add("active-tab");
      updateContent();
    });
  });

  // --- INICIALIZAÇÃO ---
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  
  const firstTabWithContentKey =
    Object.keys(mediaByCategories).find(
      (key) => mediaByCategories[key] && mediaByCategories[key].length > 0
    );
  
  const categoryKeyToTab = {
    filmes: "filmes",
    seriesAnimes: "seriesAnimes",
    livros: "livros",
    jogos: "jogos",
    musicas: "musicas"
  };

  if (myFavoriteWorks.length > 0 && firstTabWithContentKey) {
    activeTab = categoryKeyToTab[firstTabWithContentKey] || "filmes";
  } else {
    activeTab = "sobre"; 
  }

  tabButtons.forEach((btn) => {
    if (btn.dataset.tab === activeTab) {
      btn.classList.add("active-tab");
    } else {
      btn.classList.remove("active-tab");
    }
  });
  updateContent(); 
});