/*
 * O arquivo JavaScript é o "cérebro" do seu site.
 * Ele controla as ações, a navegação entre as telas e a busca de informações.
 */

/* Seleciona e armazena referências para os elementos HTML que o script vai manipular */
const appContent = document.getElementById('app-content'); /* Onde o conteúdo é renderizado */
const header = document.getElementById('main-header');
const backButton = document.getElementById('back-button');
const aboutButton = document.getElementById('about-button');
const searchBar = document.querySelector('.search-bar');
const searchInput = searchBar.querySelector('input');
const body = document.body;
const main = document.querySelector('main');

/* --- FUNÇÕES PARA RENDERIZAR (DESENHAR) AS TELAS --- */

/* FUNÇÃO 1: Desenha a tela inicial do site */
function mostrarTelaInicial() {
    body.classList.add('homepage-body'); /* Adiciona a classe para esconder o cabeçalho */
    header.style.display = 'none';
    appContent.classList.remove('content-wrapper');
    searchBar.style.display = 'flex';

    main.classList.remove('internal-page-main'); /* Remove a classe de layout de páginas internas */

    /* Insere o HTML da homepage no elemento 'appContent' */
    appContent.innerHTML = `
        <section class="top-section">
            <div class="content-wrapper">
                <h1>Cidadania Pop</h1>
                <p class="homepage-slogan">Conectando você às informações essenciais de Itabuna e Itacaré.</p>
            </div>
            <div class="wave-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
        <section class="bottom-section">
            <div class="content-wrapper">
                <p class="homepage-cta-text">Escolha sua cidade para começar:</p>
                <div class="category-grid">
                    <a href="#" class="category-button" onclick="mostrarTelaCidade('itabuna')"><i class="fa-solid fa-house-chimney-city"></i> Itabuna</a>
                    <a href="#" class="category-button" onclick="mostrarTelaCidade('itacare')"><i class="fa-solid fa-umbrella-beach"></i> Itacaré</a>
                </div>
            </div>
        </section>
    `;

    /* Configura os eventos de clique e limpa o campo de busca */
    aboutButton.onclick = mostrarPaginaSobre;
    searchInput.removeEventListener('keyup', handleSearch);
    searchInput.value = '';
}

/* FUNÇÃO 2: Desenha a tela de categorias de uma cidade */
function mostrarTelaCidade(nomeDaCidade) {
    const cidade = dadosDoSite[nomeDaCidade];

    body.classList.remove('homepage-body');
    header.style.display = 'flex';
    backButton.style.display = 'block';
    aboutButton.style.display = 'block';
    backButton.innerHTML = '↩';
    backButton.onclick = mostrarTelaInicial; /* Volta para a tela inicial */
    searchBar.style.display = 'flex';
    searchInput.placeholder = `Pesquisar em ${nomeDaCidade}...`;
    searchInput.value = '';

    main.classList.add('internal-page-main'); /* Adiciona a classe para o fundo azul */
    appContent.classList.add('content-wrapper');

    let botoesHTML = '';
    const categorias = Object.keys(cidade.categorias);
    const icones = { /* Dicionário de ícones para as categorias */
        'saude': 'fa-solid fa-heart-circle-plus',
        'trabalho': 'fa-solid fa-briefcase',
        'politica': 'fa-solid fa-landmark',
        'financas': 'fa-solid fa-sack-dollar',
        'educacao': 'fa-solid fa-graduation-cap'
    };

    /* Cria os botões para cada categoria com seus ícones */
    categorias.forEach(nomeCategoria => {
        const iconeClasse = icones[nomeCategoria] || 'fa-solid fa-star';
        const titulo = cidade.categorias[nomeCategoria].titulo || nomeCategoria.charAt(0).toUpperCase() + nomeCategoria.slice(1);
        botoesHTML += `<a href="#" class="category-button" onclick="mostrarTelaCategoria('${nomeDaCidade}', '${nomeCategoria}')"><i class="${iconeClasse}"></i>${titulo}</a>`;
    });

    appContent.innerHTML = `
        <h2>${cidade.titulo}</h2>
        <p>${cidade.descricao}</p>
        <div class="category-grid">${botoesHTML}</div>
    `;

    const gridElement = document.querySelector('.category-grid');
    if (categorias.length % 2 !== 0) {
        gridElement.classList.add('three-column-layout'); /* Adiciona layout especial se for ímpar */
    }

    /* Configura o listener para a barra de busca */
    searchInput.removeEventListener('keyup', handleSearch);
    searchInput.addEventListener('keyup', handleSearch);
}

/* FUNÇÃO 3: Desenha a tela de subtópicos de uma categoria */
function mostrarTelaCategoria(nomeDaCidade, nomeDaCategoria) {
    const categoria = dadosDoSite[nomeDaCidade].categorias[nomeDaCategoria];

    body.classList.remove('homepage-body');
    header.style.display = 'flex';
    backButton.style.display = 'block';
    aboutButton.style.display = 'block';
    backButton.innerHTML = '↩';
    backButton.onclick = () => mostrarTelaCidade(nomeDaCidade);
    searchBar.style.display = 'flex';
    searchInput.placeholder = `Pesquisar em ${categoria.titulo}...`;
    searchInput.value = '';

    main.classList.add('internal-page-main');
    appContent.classList.add('content-wrapper');

    let botoesSubtopicosHTML = '';
    const subcategorias = categoria.subcategorias;
    subcategorias.forEach((subtopico, index) => {
        if (subtopico.link) {
            botoesSubtopicosHTML += `<a href="${subtopico.link}" target="_blank" rel="noopener noreferrer" class="category-button">${subtopico.titulo}</a>`;
        } else {
            botoesSubtopicosHTML += `<a href="#" class="category-button" onclick="mostrarTelaSubtopico('${nomeDaCidade}', '${nomeDaCategoria}', ${index})">${subtopico.titulo}</a>`;
        }
    });

    appContent.innerHTML = `
        <h2>${categoria.titulo}</h2>
        <div class="category-grid">${botoesSubtopicosHTML}</div>
    `;

    const gridElement = document.querySelector('.category-grid');
    if (subcategorias.length % 2 !== 0) {
        gridElement.classList.add('three-column-layout');
    }

    searchInput.removeEventListener('keyup', handleSearch);
    searchInput.addEventListener('keyup', handleSearch);
}

/* FUNÇÃO 4: Desenha a tela de conteúdo final de um subtópico */
function mostrarTelaSubtopico(nomeDaCidade, nomeDaCategoria, indexDoSubtopico) {
    const subtopico = dadosDoSite[nomeDaCidade].categorias[nomeDaCategoria].subcategorias[indexDoSubtopico];

    body.classList.remove('homepage-body');
    header.style.display = 'flex';
    backButton.style.display = 'block';
    aboutButton.style.display = 'block';
    backButton.innerHTML = '↩';
    backButton.onclick = () => mostrarTelaCategoria(nomeDaCidade, nomeDaCategoria);
    searchBar.style.display = 'flex';
    searchInput.placeholder = `Pesquisar em ${subtopico.titulo}...`;
    searchInput.value = '';

    main.classList.add('internal-page-main');
    appContent.classList.add('content-wrapper');

    appContent.innerHTML = `<div class="conteudo-final">${subtopico.conteudo}</div>`;

    searchInput.removeEventListener('keyup', handleSearch); /* Remove o listener de busca para evitar filtro em conteúdo */
}

/* FUNÇÃO: Desenha a página "Sobre" */
function mostrarPaginaSobre() {
    const sobre = dadosDoSite.sobre;

    body.classList.remove('homepage-body');
    header.style.display = 'flex';
    backButton.style.display = 'block';
    backButton.innerHTML = '↩';
    backButton.onclick = mostrarTelaInicial; /* Volta para a tela inicial */
    aboutButton.style.display = 'none';
    searchBar.style.display = 'none';

    main.classList.add('internal-page-main');
    appContent.classList.add('content-wrapper');
    appContent.innerHTML = `<h2>${sobre.titulo}</h2>${sobre.conteudo}`;

    searchInput.removeEventListener('keyup', handleSearch);
}

/* FUNÇÃO: Trata a lógica da barra de busca */
function handleSearch() {
    const query = searchInput.value.toLowerCase();
    const buttons = appContent.querySelectorAll('.category-button');

    buttons.forEach(button => {
        const text = button.textContent.toLowerCase();
        if (text.includes(query)) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
}

/* --- PONTO DE PARTIDA --- */
/* Esta linha é executada quando a página carrega, desenhando a tela inicial */
mostrarTelaInicial();