const dadosDoSite = {
  itabuna: {
    titulo: "Bem-vindo ao Se Cidadania Pop Itabuna!",
    descricao: "Aqui você encontra informações relevantes sobre nossa cidade, organizadas para facilitar sua busca.",
    categorias: {
      saude: { // Mantido conteúdo detalhado de dados(2).js e dados(1).js
        titulo: "Saúde",
        subcategorias: [{
          titulo: "UPAS",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🚑 UPA Monte Cristo — Itabuna</h2>
                        <p>A UPA Monte Cristo funciona 24 horas por dia, todos os dias da semana, para atender casos de urgência e emergência de média complexidade.</p><br>
                        <p><strong>Serviços prestados:</strong></p>
                        <ul>
                            <li>Atendimentos de urgência e emergência (como casos agudos: hipertensão, febre alta, cortes, fraturas etc.)</li>
                            <li>Consultas ambulatoriais como complemento aos atendimentos de urgência</li>
                            <li>Apoio diagnóstico, exames e dispensação/entrega de medicamentos</li>
                            <li>Estabilização do paciente e encaminhamento para hospital, quando necessário</li>
                        </ul><br>
                        <p><strong>Localização:</strong> Situada no bairro Monte Cristo, Rua O, sem número (“s/n”) — CEP 45604-523 — em Itabuna, Bahia.</p>
                    </div>`
        }, {
          titulo: "Regularização do SUS",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🩺 Regularização do SUS em Itabuna</h2><br>
                        <p>A regularização do SUS em Itabuna consiste em medidas para garantir que todos os cidadãos tenham acesso pleno aos serviços de saúde fornecidos pelo Sistema Único de Saúde, com documentação correta e formas de atendimento mais simples e eficazes.</p><br>
                        <p>🧾<strong>Para que serve e serviços oferecidos:</strong></p>
                        <ul>
                            <li><strong>Garantir acesso aos serviços de saúde pública:</strong> Sem cadastro regularizado, o paciente pode ter dificuldade para marcar consultas, exames ou receber medicamentos e vacinas.</li>
                            <li><strong>Atualizar dados do Cartão SUS (CNS):</strong> Corrige informações erradas, vincula o CPF ao cadastro e evita duplicidade de registros.</li>
                            <li><strong>Melhorar o atendimento médico:</strong> Com dados corretos, os profissionais de saúde conseguem acessar o histórico do paciente, acompanhar tratamentos e identificar o território de atendimento (UBS/USF responsável).</li>
                            <li><strong>Organizar o sistema municipal de saúde:</strong> A Prefeitura e o Ministério da Saúde usam esses cadastros atualizados para planejar ações, enviar recursos e mapear demandas da população.</li>
                            <li><strong>Garantir participação em programas públicos de saúde:</strong> Exemplo: campanhas de vacinação, programas de controle de doenças crônicas (como diabetes e hipertensão), pré-natal, entre outros, dependem de um cadastro ativo e regularizado.</li>
                        </ul><br>
                        <h2>💻 Meu SUS Digital</h2><br>
                        <p>O Meu SUS Digital é a plataforma oficial do Ministério da Saúde que permite acessar informações e serviços do SUS pelo celular ou computador.</p><br>
                        <p><strong>🧾 Por meio dele, o cidadão pode:</strong></p>
                        <ul>
                            <li>Consultar o Cartão SUS (agora integrado ao CPF).</li>
                            <li>Ver histórico de consultas, vacinas e exames.</li>
                            <li>Emitir comprovante de vacinação.</li>
                            <li>Acompanhar consultas e receitas digitais.</li>
                            <li>Conferir se o cadastro do SUS está regularizado.</li>
                        </ul><br>
                        <p>🔗 Para usar, basta ter uma Conta Gov.br e acessar: <a href="https://meususdigital.saude.gov.br" target="_blank" rel="noopener noreferrer">Meu SUS Digital</a></p><br>
                        <p>📍 Importante: mesmo usando o aplicativo, é essencial manter os dados atualizados na unidade de saúde local, pois o sistema puxa essas informações do cadastro municipal.</p>
                    </div>`
        }, {
          titulo: "Bolsa Família",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>👨‍👩‍👧 Bolsa Familia</h2>
                        <p>O <strong>Bolsa Família</strong> é um programa federal de transferência de renda que apoia famílias em situação de pobreza e extrema pobreza. O objetivo é garantir renda mínima e condicionalidades nas áreas de saúde e educação.</p><br>
                        <p><strong>🔍 Quem tem direito:</strong> Famílias inscritas no <strong>Cadastro Único (CadÚnico)</strong> que atendam aos critérios de renda e cumpram as condicionalidades (frequência escolar, vacinação etc.). Informações oficiais: <a href="https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia" target="_blank" rel="noopener noreferrer">Receber o Bolsa Família — Gov.br</a>.</p><br>
                        <p><strong>💸 Calendário de pagamento:</strong> Organizado pelo último dígito do NIS. Calendário oficial (PDF): <a href="https://www.gov.br/mds/pt-br/noticias-e-conteudos/desenvolvimento-social/noticias-desenvolvimento-social/calendario-de-pagamento-do-bolsa-familia-de-2025-ja-esta-disponivel/CalendarioPBF2025.pdf" target="_blank" rel="noopener noreferrer">Calendário 2025 — Gov.br</a>.</p><br>
                        <p><strong>💡 Dicas rápidas:</strong> Mantenha o CadÚnico atualizado. Cumpra as condicionalidades. Dúvidas? Procure o CRAS.</p>
                    </div>`
        }, {
          titulo: "CRAS",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🏛️ CRAS em Itabuna</h2><br>
                        <p>O Centro de Referência de Assistência Social (CRAS) é o equipamento público de Proteção Social Básica do SUAS, atuando preventivamente com famílias em vulnerabilidade.</p><br>
                        <p><strong>💡 Serviços oferecidos:</strong></p><br>
                        <ul>
                            <li>Atendimento e orientação para CadÚnico (inscrição e atualizações).</li>
                            <li>Apoio para inclusão em programas como Bolsa Família.</li>
                            <li>Orientações sobre o Benefício de Prestação Continuada (BPC).</li>
                            <li>Serviço de Convivência e Fortalecimento de Vínculos (SCFV).</li>
                            <li>Proteção e Atendimento Integral à Família (PAIF).</li>
                            <li>Atendimento técnico/social (assistentes sociais, psicólogos).</li>
                            <li>Palestras e campanhas comunitárias.</li>
                        </ul><br>
                        <p><strong>Locais em Itabuna:</strong></p><br>
                        <ul>
                            <li>CRAS I – Bairro Jardim Grapiúna.</li>
                            <li>CRAS II – Bairro Nova Ferradas.</li>
                            <li>CRAS III – Bairro Urbis IV ( CRAS Ceu).</li>
                            <li>CRAS IV – São Caetano.</li>
                        </ul><br>
                        <p>🔗 Fonte: <a href="https://itabuna.ba.gov.br/" target="_blank" rel="noopener noreferrer">Prefeitura de Itabuna</a></p>
                    </div>`
        }]
      },
      trabalho: { // Mantido conteúdo detalhado de dados(3).js
        titulo: "Trabalho",
        subcategorias: [{
          titulo: "Mercado de Trabalho Formal",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Mercado de Trabalho Formal</h2>
                        <p>Itabuna vem apresentando avanços consistentes no mercado de trabalho formal. Segundo dados recentes do Novo CAGED, o município registrou um saldo de <strong>288 postos com carteira assinada</strong> nos oito primeiros meses de 2025. <a href="https://itabuna.ba.gov.br/2025/09/29/itabuna-registra-crescimento-na-geracao-de-empregos-em-agosto-e-abertura-de-empresas-em-2025/" target="_blank" rel="noopener noreferrer">Fonte Prefeitura Itabuna</a>.</p>
                        <p><strong>Setores que mais se destacaram:</strong> Serviços (+502), Comércio (+427), Construção Civil (+112), Indústria (+109).</p>
                        <p><strong>O que isso significa:</strong> Indica consolidação como polo regional, gerando oportunidades formais e melhoria da renda local.</p>
                        <p><strong>Dica:</strong> Acompanhe editais e cadastros via Prefeitura/SICER. Mantenha o currículo atualizado, focando nos setores em alta (serviços, comércio, construção).</p>
                    </div>`
        }, {
          titulo: "Empreendedorismo e MEI",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Empreendedorismo e Microempreendedor Individual (MEI)</h2>
                        <p>O MEI é a forma mais simples de formalizar um pequeno empreendimento, obtendo CNPJ, pagando impostos unificados (DAS-MEI), emitindo notas fiscais e acessando benefícios previdenciários.</p>
                        <p><strong>Vantagens:</strong> CNPJ (acesso a crédito, conta empresarial), tributação simplificada, previdência (aposentadoria, auxílio-doença, etc.).</p>
                        <p><strong>Como se formalizar:</strong> Registro online via Portal do Empreendedor (gov.br) ou buscando orientação e cursos no SEBRAE local.</p>
                    </div>`
        }, {
          titulo: "Programas Municipais de Emprego (PROATE)",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>PROATE – Programa de Apoio ao Trabalhador e às Empresas</h2>
                        <p>Plataforma pública da SICER (Prefeitura de Itabuna) para intermediação de mão de obra e suporte ao emprego.</p>
                        <p><strong>Funcionalidades:</strong> Cadastro online de trabalhadores/empresas, elaboração de currículo, apoio psicológico, divulgação de vagas, cursos de qualificação.</p>
                        <p><strong>Como se cadastrar:</strong> Presencialmente na SICER (Centro Administrativo Firmino Alves) ou online pelo site <a href="https://proate.prefeituradeitabuna.com.br/" target="_blank" rel="noopener noreferrer">proate.prefeituradeitabuna.com.br</a>.</p>
                        <p><strong>Documentos:</strong> RG, CPF, Título de eleitor, Comprovante de residência, Currículo.</p>
                        <p><strong>Contato:</strong> <a href="mailto:proate@prefeituradeitabuna.com.br">proate@prefeituradeitabuna.com.br</a></p>
                    </div>`
        }, {
          titulo: "Processos Seletivos & Estágios",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Processos Seletivos e Estágios</h2>
                        <p>A Prefeitura de Itabuna publica processos seletivos simplificados (contratos temporários) e editais de convocação. Há também oportunidades de estágio via convênios com CIEE e instituições de ensino.</p>
                        <p><strong>Onde acompanhar:</strong> Editais, resultados e convocações são publicados no portal oficial da Prefeitura e no Diário Oficial Municipal.</p>
                        <p><strong>Agentes de integração:</strong> CIEE, IEL e agências de emprego locais são boas fontes para vagas de estágio. Verifique também murais e coordenações em sua instituição de ensino.</p>
                    </div>`
        }, {
          titulo: "Proteção ao Trabalhador e Combate ao Trabalho Infantil",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Proteção ao Trabalhador e Combate ao Trabalho Infantil</h2>
                        <p>A Prefeitura de Itabuna, via SEMPS e em parceria com órgãos como o MPT-BA, atua para proteger direitos trabalhistas e erradicar o trabalho infantil.</p>
                        <p><strong>Ações:</strong> Programa de Erradicação do Trabalho Infantil (PETI) com conscientização em escolas; acordo com MPT para eliminar trabalho infantil no antigo lixão; audiências públicas e campanhas educativas.</p>
                        <p><strong>Como denunciar exploração ou trabalho infantil:</strong></p>
                        <ul>
                            <li><strong>Disque 100</strong> (Central Nacional de Direitos Humanos)</li>
                            <li><strong>MPT-BA Itabuna:</strong> Rua Duque de Caxias, 655, Centro. <a href="https://www.prt5.mpt.mp.br/procuradorias/ptm-itabuna" target="_blank" rel="noopener noreferrer">Página oficial</a></li>
                            <li><strong>Conselho Tutelar de Itabuna:</strong> Atendimento via <a href="https://itabuna.ba.gov.br/" target="_blank" rel="noopener noreferrer">site da Prefeitura</a> ou presencialmente na sede da SEMPS.</li>
                        </ul>
                    </div>`
        }, {
          titulo: "SINE",
          link: "https://www.ba.gov.br/trabalho/280/vagas-do-dia-sinebahia",
          conteudo: ""
        }]
      },
      politica: { // Mantido conteúdo detalhado de dados(2).js
        titulo: "Política",
        subcategorias: [{
          titulo: "Combate a Fake News",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>⚠️ Combate às Fake News</h2> <br>
                        <p>A disseminação de informações falsas ameaça a credibilidade do processo eleitoral e prejudica escolhas conscientes. Verificar antes de compartilhar é essencial para fortalecer a democracia.</p><br>
                        <br>
                        <h3>🔎 Por que verificar informações?</h3><br>
                        <ul>
                            <li><strong>Preservar a democracia:</strong> Fake news distorcem debates e influenciam votos.</li>
                            <li><strong>Ação coletiva:</strong> Justiça Eleitoral mantém o programa <em>Fato ou Boato</em>.</li>
                            <li><strong>Checagem confiável:</strong> Agências parceiras do TSE apuram conteúdos suspeitos.</li>
                            <li><strong>Monitoramento:</strong> CIEDDE atua contra desinformação.</li>
                            <li><strong>Responsabilização:</strong> TSE pune autores e plataformas.</li>
                            <li><strong>Denúncia cidadã:</strong> Use o Siade ou disque 1491.</li>
                            <li><strong>Educação digital:</strong> Fique atento a erros, sites duvidosos, títulos sensacionalistas.</li>
                        </ul><br>
                        <br>
                        <h3>💡 Dicas rápidas</h3><br>
                        <ul>
                            <li>Confira em fontes oficiais como <a href="https://www.justicaeleitoral.jus.br/fato-ou-boato/" target="_blank" rel="noopener noreferrer">Fato ou Boato</a>.</li>
                            <li>Questione autoria, data e credibilidade.</li>
                            <li>Denuncie conteúdos suspeitos.</li>
                            <li>Compartilhe apenas o que for correto.</li>
                        </ul><br>
                        <p><strong>Resumo:</strong> Na dúvida, não compartilhe.</p>
                        <p>👉 Saiba mais: <a href="https://www.justicaeleitoral.jus.br/fato-ou-boato/" target="_blank" rel="noopener noreferrer">Fato ou Boato — Justiça Eleitoral</a></p>
                    </div>`
        }, {
          titulo: "Mesário",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>✨ Mesário Voluntário</h2>
                        <p>Ser mesário voluntário é ser protagonista da democracia, ajudando a organizar a eleição e garantindo a contagem correta dos votos, contribuindo para a transparência do processo.</p><br>
                        <br>
                        <h3>📈 Benefícios de ser mesário</h3><br>
                        <ul>
                            <li>Folgas em dobro pelo dia de trabalho e treinamentos.</li>
                            <li>Auxílio-alimentação no dia da eleição.</li>
                            <li>Certificado oficial de participação.</li>
                            <li>Horas de atividade complementar para estudantes universitários.</li>
                            <li>Vantagem em concursos públicos (se previsto em edital).</li>
                        </ul><br>
                        <p>Quer saber mais e se inscrever? Acesse: <a href="https://www.tre-ba.jus.br/servicos-eleitorais/mesarios/mesarios" target="_blank" rel="noopener noreferrer">Mesário Voluntário TRE-BA</a></p>
                    </div>`
        }, {
          titulo: "Estrutura Governamental",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🧩 Estrutura Governamental</h2>
                        <p>Entender quem faz o quê nos níveis municipal, estadual e federal é essencial para a cidadania.</p><br>
                        <h3>👮🏽 Executivo (Administra e Executa Leis)</h3><br>
                        <ul>
                            <li><strong>Prefeito (Município):</strong> Chefe do executivo municipal (saúde, educação, transporte local). <a href="https://www.tre-ba.jus.br/comunicacao/noticias/2024/Setembro/o-que-fazem-os-prefeitos-e-vereadores?SearchableText=prefeito" target="_blank" rel="noopener noreferrer">Ref</a></li>
                            <li><strong>Governador (Estado):</strong> Chefe do executivo estadual (segurança pública, hospitais regionais). <a href="https://www12.senado.leg.br/noticias/materias/2014/09/15/o-que-faz-o-governador" target="_blank" rel="noopener noreferrer">Ref</a></li>
                            <li><strong>Presidente (País):</strong> Chefe do executivo federal (defesa, relações exteriores, economia). <a href="https://www12.senado.leg.br/noticias/materias/2014/09/15/o-que-faz-o-presidente-da-repaoblica" target="_blank" rel="noopener noreferrer">Ref</a></li>
                        </ul><br>
                        <h3>📝 Legislativo (Cria Leis e Fiscaliza o Executivo)</h3><br>
                        <ul>
                            <li><strong>Vereadores (Município):</strong> Criam leis municipais e fiscalizam o prefeito. <a href="https://www.tre-ba.jus.br/comunicacao/noticias/2024/Setembro/o-que-fazem-os-prefeitos-e-vereadores?SearchableText=prefeito" target="_blank" rel="noopener noreferrer">Ref</a></li>
                            <li><strong>Deputados Estaduais/Federais:</strong> Criam leis estaduais/federais e fiscalizam governador/presidente. <a href="https://www.camara.leg.br/noticias/903471-SAIBA-QUAIS-SAO-AS-ATRIBUICOES-DO-DEPUTADO-FEDERAL/" target="_blank" rel="noopener noreferrer">Ref</a></li>
                            <li><strong>Senadores:</strong> Representam os estados, votam leis federais e fiscalizam o presidente. <a href="https://www12.senado.leg.br/noticias/materias/2022/08/05/voce-sabe-o-que-faz-um-senador-entenda-aqui" target="_blank" rel="noopener noreferrer">Ref</a></li>
                        </ul><br>
                         <h3>Outros Órgãos</h3><br>
                        <ul>
                             <li><strong>Secretarias e Ministérios:</strong> Executam políticas específicas (saúde, educação, etc.). <a href="https://www.gov.br/pt-br/orgaos-do-governo?com" target="_blank" rel="noopener noreferrer">Ref</a></li>
                             <li><strong>Tribunais de Contas e Controladorias:</strong> Fiscalizam o uso do dinheiro público. <a href="https://www.gov.br/cgu/pt-br" target="_blank" rel="noopener noreferrer">Ref</a></li>
                        </ul>
                    </div>`
        }, {
          titulo: "Acompanhe seu político",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Acompanhe Seu Político</h2>
                        <p>Fiscalizar o trabalho dos seus representantes é um direito e dever cidadão. Use as ferramentas oficiais:</p>
                        <br>
                        <h3>🏛️ Portal da Câmara dos Deputados</h3>
                        <p>Acompanhe deputados federais: perfil, projetos, votações, presença, gastos (cota parlamentar), transmissões ao vivo. 🔗 <a href="https://www2.camara.leg.br/transparencia/servicos-ao-cidadao/transparencia" target="_blank" rel="noopener noreferrer">Portal da Câmara</a></p>
                        <br>
                        <h3>💰 Portal da Transparência (CGU)</h3>
                        <p>Consulte gastos públicos federais: emendas parlamentares, salários, contratos, licitações, benefícios sociais, cartões corporativos. 🔗 <a href="https://portaltransparencia.gov.br" target="_blank" rel="noopener noreferrer">Portal da Transparência</a></p>
                        <br>
                        <h3>📲 App e Site do Senado Federal</h3>
                        <p>Acompanhe senadores: perfil, projetos, votações, notícias, transmissões, agenda. 🔗 <a href="https://www12.senado.leg.br" target="_blank" rel="noopener noreferrer">Site do Senado</a> (ou baixe o app)</p>
                    </div>`
        }, {
          titulo: "Cartório Eleitoral de Itabuna",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🏛️ Cartório Eleitoral de Itabuna</h2>
                        <p>Unidade da Justiça Eleitoral responsável por serviços ao eleitor.</p>
                        <br>
                        <h3>🔧 Principais Serviços:</h3><br>
                        <ul><li>Emissão e transferência do título de eleitor.</li><li>Atualização cadastral.</li><li>Coleta de biometria.</li><li>Regularização da situação eleitoral.</li></ul><br>
                        <br>
                        <h3>📋 Agendamento e Contato</h3><br>
                        <p>O atendimento presencial geralmente requer agendamento prévio online no site do TRE-BA. Consulte também endereços e horários atualizados.</p>
                        <ul>
                            <li><a href="https://www.tre-ba.jus.br/servicos-eleitorais/agendamento-do-atendimento-presencial" target="_blank" rel="noopener noreferrer">Agendamento TRE-BA</a></li>
                            <li><a href="https://www.tre-ba.jus.br/servicos-eleitorais/servicos-horarios-e-locais/atendimento-no-interior-do-estado" target="_blank" rel="noopener noreferrer">Locais de Atendimento no Interior</a></li>
                        </ul><br>
                         <h3>📍 Alistamento e Voto</h3><br>
                         <p>Entender as regras de alistamento (obrigatório 18-70 anos, facultativo 16-18 e +70) e prazos é crucial para garantir o direito ao voto.</p>
                         <p>🔗 Dúvidas: <a href="https://www.tre-ba.jus.br/servicos-eleitorais/informacoes-uteis/informacoes-eleitorais" target="_blank" rel="noopener noreferrer">Informações Eleitorais TRE-BA</a></p>
                    </div>`
        }]
      },
      financas: { // Mantido conteúdo detalhado de dados(2).js e preenchimento anterior
        titulo: "Finanças",
        subcategorias: [{
          titulo: "Ferramentas para acompanhar gastos públicos",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🔍 Ferramentas para acompanhar gastos públicos em Itabuna</h2>
                        <p>A transparência pública permite fiscalizar como o dinheiro é arrecadado e utilizado. Use os portais oficiais:</p>
                        <br>
                        <h3>📊 Portal da Transparência da Prefeitura</h3><p>Consulte receitas, despesas, atos normativos, relatórios de gestão e legislação. 🔗 <a href="https://itabuna.procede.org/transparencia" target="_blank" rel="noopener noreferrer">Acesse o Portal da Prefeitura</a></p>
                        <br>
                        <h3>🏛️ Portal da Transparência da Câmara Municipal</h3><p>Informações sobre atividades legislativas, contratos, gastos e e-SIC (Selo Ouro em Transparência). 🔗 <a href="https://cmitabuna-ba.portaltp.com.br/consultas/informacoes/sobre.aspx" target="_blank" rel="noopener noreferrer">Acesse o Portal da Câmara</a></p>
                        <br>
                        <h3>📢 Audiências Públicas</h3><p>Participe das apresentações dos Relatórios de Gestão Fiscal para acompanhar a execução orçamentária. 🔗 <a href="https://itabuna.ba.gov.br/2025/09/17/prefeitura-de-itabuna-apresenta-a-populacao-as-contas-publicas-no-2o-quadrimestre-de-2025-em-audiencia-publica/" target="_blank" rel="noopener noreferrer">Saiba mais</a></p>
                    </div>`
        }, {
          titulo: "Educação Fiscal",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>📚 Educação Fiscal: Entendendo o destino dos impostos e o papel do cidadão</h2>
                        <p>Educação fiscal é entender para onde vai o dinheiro dos impostos e a importância da participação cidadã na fiscalização dos recursos públicos.</p>
                        <br>
                        <h3>💰 Para onde vai o dinheiro dos impostos?</h3>
                        <p>Financia serviços essenciais para a população: Saúde (hospitais, vacinas), Educação (escolas, merenda), Segurança (policiamento), Infraestrutura (ruas, saneamento), etc.</p>
                        <br>
                        <h3>🧾 Por que declarar e pedir nota fiscal?</h3>
                        <br>
                        <p><strong>Declaração do IR:</strong> Garante que a Receita verifique se os tributos foram pagos corretamente. Parte pode ser destinada a fundos sociais.</p>
                        <p><strong>Emissão da Nota Fiscal:</strong> Ajuda a combater a sonegação, garantindo que o dinheiro chegue aos cofres públicos. Alguns estados oferecem incentivos (sorteios, créditos).</p>
                        <p><strong>O papel do cidadão:</strong> Entender o ciclo dos impostos permite cobrar transparência, fiscalizar o uso do dinheiro e apoiar políticas que melhorem a comunidade.</p>
                        <p><strong>Fontes oficiais:</strong> <a href="https://www.gov.br/receitafederal/pt-br/assuntos/educacao-fiscal" target="_blank" rel="noopener noreferrer">Receita Federal — Ed. Fiscal</a> | <a href="https://www.gov.br/receitafederal/pt-br/assuntos/educacao-fiscal/programa-nacional-de-educacao-fiscal-pnef" target="_blank" rel="noopener noreferrer">PNEF</a></p>
                    </div>`
        }, {
          titulo: "Tributos",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>💰 Tributos no Brasil</h2>
                        <p>Divididos entre União (federais), Estados e Municípios, financiam serviços públicos.</p>
                        <br>
                        <h3>🏛️ Tributos Federais</h3>
                        <br>
                        <p>Administrados pela União. Ex: <strong>IR</strong> (renda), <strong>IPI</strong> (produtos industrializados), <strong>IOF</strong> (operações financeiras), <strong>INSS</strong> (previdência), <strong>PIS/COFINS</strong> (empresas). 🔗 <a href="https://www.gov.br/receitafederal/pt-br/assuntos/tributos" target="_blank" rel="noopener noreferrer">Receita Federal</a></p>
                        <br>
                        <h3>🌎 Tributos Estaduais</h3>
                        <br>
                        <p>Administrados pelos Estados. Ex: <strong>ICMS</strong> (mercadorias/serviços), <strong>IPVA</strong> (veículos), <strong>ITCMD</strong> (herança/doação). 🔗 <a href="https://www.sefaz.ba.gov.br/" target="_blank" rel="noopener noreferrer">SEFAZ-BA</a></p>
                        <br>
                        <h3>🏘️ Tributos Municipais (Itabuna)</h3>
                        <br>
                        <p>Administrados pela Prefeitura. Ex: <strong>IPTU</strong> (imóveis urbanos), <strong>ISS</strong> (serviços), <strong>ITBI</strong> (compra/venda de imóveis). 🔗 <a href="http://161.97.81.38:8490/" target="_blank" rel="noopener noreferrer">Portal de Tributos da Prefeitura</a></p>
                    </div>`
        }, {
          titulo: "Imposto de Renda",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>📑 Imposto de Renda Pessoa Física (IRPF)</h2>
                        <p>Declaração anual à Receita Federal sobre rendimentos, bens, despesas e dívidas do ano anterior, para calcular imposto devido ou restituição.</p>
                        <br>
                        <h3>📝 Declaração e Prazos</h3><p>Obrigatória para quem se enquadra nos critérios da Receita. Prazo 2025: <strong>17/03 a 30/05</strong>. Entrega via programa Meu Imposto de Renda ou portal <a href="https://www.gov.br/receitafederal/pt-br/assuntos/atendimento-virtual-e-cac" target="_blank" rel="noopener noreferrer">e-CAC</a>. 🔗 <a href="https://www.gov.br/pt-br/servicos/declarar-meu-imposto-de-renda" target="_blank" rel="noopener noreferrer"> Saiba mais</a></p>
                        <br>
                        <h3>💰 Restituição</h3><p>Devolução de imposto pago a mais, feita em lotes mensais. Consulte: <a href="https://www.gov.br/pt-br/servicos/consultar-restituicao-de-imposto-de-renda" target="_blank" rel="noopener noreferrer">Consulta Restituição</a>.</p>
                        <br>
                        <h3>⚠️ Malha Fina</h3><p>Ocorre por inconsistências entre a declaração e dados de terceiros. Exige correção via declaração retificadora. 🔗 <a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/malha-fiscal" target="_blank" rel="noopener noreferrer"> Malha Fiscal</a></p>
                        <br>
                        <br>
                        <h3>✅ Onde Acompanhar e Dúvidas</h3>
                        <ul>
                            <li><a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda" target="_blank" rel="noopener noreferrer">Portal Meu Imposto de Renda</a></li>
                            <li><a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/servicos" target="_blank" rel="noopener noreferrer">Serviços IRPF</a></li>
                            <li><a href="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/perguntas-frequentes/imposto-de-renda/dirpf" target="_blank" rel="noopener noreferrer">Perguntas Frequentes (Obrigatoriedade, Isenção, etc.)</a></li>
                        </ul>
                    </div>`
        }]
      },
      educacao: {
        titulo: "Educação",
        subcategorias: [{
          titulo: "Creches e Pré-Escola",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Creches e Pré-Escola em Itabuna</h2>
                        <p>A SEDUC busca ampliar vagas na educação infantil (0-5 anos). Novas unidades estão em reforma/construção (ex: Nova Itabuna, Ferradas).</p>
                        <p><strong>Matrículas:</strong> Iniciam em janeiro. Documentos: Certidão de nascimento, CPF/RG do responsável, comprovante de residência, cartão de vacina. Locais: Unidades escolares ou SEDUC (Rua Francisco Ferreira da Silva, 100).</p>
                        <p>🔗 <a href="https://itabuna.ba.gov.br/2025/01/13/matriculas-para-o-ano-letivo-de-2025-na-rede-municipal-de-ensino-comecam-na-quinta-feira-em-itabuna/" target="_blank" rel="noopener noreferrer">Matrículas 2025</a> | <a href="https://itabuna.ba.gov.br/categoria/educacao/" target="_blank" rel="noopener noreferrer">SEDUC Itabuna</a></p>
                    </div>`
        }, {
          titulo: "Ensino Fundamental e Médio",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Ensino Fundamental e Médio em Itabuna</h2>
                        <p><strong>Fundamental (1º-9º ano):</strong> Gestão da SEDUC (municipal), mais de 80 escolas. <strong>Médio:</strong> Gestão da SEC-BA (estadual), com escolas como Colégio Estadual e Modelo.</p>
                        <p><strong>Matrículas:</strong> Municipal (Janeiro, presencial/SEDUC); Estadual (Online, via <a href="https://matriculadigital.educacao.ba.gov.br" target="_blank" rel="noopener noreferrer">Matrícula Digital Bahia</a>).</p>
                        <p>🔗 <a href="https://itabuna.ba.gov.br/categoria/educacao/" target="_blank" rel="noopener noreferrer">SEDUC Itabuna</a> | <a href="https://www.educacao.ba.gov.br/" target="_blank" rel="noopener noreferrer">SEC Bahia</a></p>
                    </div>`
        }, {
          titulo: "Educação de Jovens e Adultos (EJA)",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Educação de Jovens e Adultos (EJA) em Itabuna</h2>
                        <p>Modalidade para quem não concluiu os estudos na idade adequada, coordenada pela SEDUC.</p>
                        <p><strong>Como funciona:</strong> Gratuito para maiores de 15 (Fundamental) / 18 (Médio - rede estadual). Aulas noturnas/vespertinas em escolas municipais.</p>
                        <p><strong>Inscrições:</strong> Janeiro e Julho, na escola mais próxima ou na SEDUC. Documentos: RG, CPF, comprovante residência, histórico escolar (se tiver).</p>
                        <p>🔗 <a href="https://itabuna.ba.gov.br/categoria/educacao/" target="_blank" rel="noopener noreferrer">SEDUC Itabuna</a> | <a href="https://www.gov.br/mec/pt-br/assuntos/educacao-basica/eja" target="_blank" rel="noopener noreferrer">MEC - EJA</a></p>
                    </div>`
        }, {
          titulo: "Formação Profissional e Ensino Técnico", // Conteúdo expandido
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🛠️ Formação Profissional e Ensino Técnico em Itabuna</h2>
                        <p>Investir em formação técnica e profissionalizante é um caminho importante para aumentar as chances de inserção no mercado de trabalho e gerar renda. Itabuna conta com diversas instituições que oferecem cursos nessas áreas, preparando os cidadãos para as demandas locais e regionais.</p>
                        
                        <h3>Principais Instituições e Tipos de Cursos:</h3>
                        <ul>
                            <li><strong><a href="https://portal.ifba.edu.br/itabuna" target="_blank" rel="noopener noreferrer">IFBA (Instituto Federal da Bahia):</a></strong> Oferece cursos técnicos gratuitos integrados ao ensino médio e subsequentes (para quem já concluiu) em áreas como Informática, Eletrotécnica, Meio Ambiente e Segurança do Trabalho. É uma referência em educação pública de qualidade.</li>
                            <li><strong><a href="https://www.ba.senac.br/" target="_blank" rel="noopener noreferrer">SENAC (Serviço Nacional de Aprendizagem Comercial):</a></strong> Focado em cursos para o setor de comércio e serviços. Oferece desde cursos livres rápidos (ex: Culinária, Atendimento) até técnicos (ex: Administração, Logística, Enfermagem). Possui programas de gratuidade (PSG).</li>
                            <li><strong><a href="https://www.fieb.org.br/senai" target="_blank" rel="noopener noreferrer">SENAI (Serviço Nacional de Aprendizagem Industrial):</a></strong> Voltado para a indústria. Oferece cursos em áreas como Mecânica, Elétrica, Automação, Construção Civil e Soldagem. Essencial para quem busca qualificação para o setor industrial da região.</li>
                            <li><strong><a href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/ba" target="_blank" rel="noopener noreferrer">SEBRAE (Serviço Brasileiro de Apoio às Micro e Pequenas Empresas):</a></strong> Embora não ofereça cursos técnicos longos, é fundamental para quem quer empreender. Promove oficinas, palestras e consultorias sobre gestão, marketing, finanças e formalização (MEI).</li>
                        </ul>

                        <h3>Programas Municipais e Parcerias:</h3>
                        <p>A Prefeitura, através da SICER e do <a href="https://proate.prefeituradeitabuna.com.br" target="_blank" rel="noopener noreferrer">PROATE</a>, frequentemente promove cursos gratuitos em parceria com essas instituições ou através de programas como o Qualifica Bahia (Governo Estadual). Fique atento às notícias no site da prefeitura.</p>
                        
                        <p><strong>Dica:</strong> Verifique os pré-requisitos de cada curso (escolaridade, idade) e os períodos de inscrição diretamente nos sites das instituições.</p>
                    </div>`
        }, {
          titulo: "Programas Especiais de Alfabetização",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Programas Especiais de Alfabetização</h2>
                        <p>Iniciativas para garantir alfabetização a crianças, jovens e adultos.</p>
                        <p><strong>Programas:</strong> Brasil Alfabetizado (PBA - parceria MEC/Prefeitura), Alfabetiza Bahia (Estado/Prefeitura - foco crianças), EJA (Rede Municipal).</p>
                        <p><strong>Inscrições:</strong> Escolas com EJA ou na SEDUC (Rua Francisco Ferreira da Silva, 100).</p>
                        <p>🔗 <a href="https://itabuna.ba.gov.br/categoria/educacao/" target="_blank" rel="noopener noreferrer">SEDUC Itabuna</a> | <a href="https://www.educacao.ba.gov.br/alfabetizabahia" target="_blank" rel="noopener noreferrer">Alfabetiza Bahia</a> | <a href="https://www.gov.br/mec/pt-br/assuntos/educacao-basica/alfabetizacao" target="_blank" rel="noopener noreferrer">MEC Alfabetização</a></p>
                    </div>`
        }, {
          titulo: "Acessibilidade Educacional",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>♿ Programas Federais de Acesso ao Ensino Superior</h2>
                        <p>Os principais programas federais que facilitam o ingresso e a permanência no ensino superior são:</p>
                        <ul>
                            <li>
                                <strong>Sisu (Sistema de Seleção Unificada):</strong> Utiliza a nota do Enem para selecionar estudantes para vagas em universidades públicas federais e estaduais. As inscrições abrem geralmente duas vezes ao ano.<br>
                                🔗 <a href="https://acessounico.mec.gov.br/sisu" target="_blank" rel="noopener noreferrer">Site Oficial Sisu</a>
                            </li>
                            <li>
                                <strong>Prouni (Programa Universidade para Todos):</strong> Concede bolsas de estudo integrais (100%) e parciais (50%) em faculdades privadas para estudantes brasileiros sem diploma de nível superior, com base na nota do Enem e critérios de renda.<br>
                                🔗 <a href="https://acessounico.mec.gov.br/prouni" target="_blank" rel="noopener noreferrer">Site Oficial Prouni</a>
                            </li>
                            <li>
                                <strong>Fies (Fundo de Financiamento Estudantil):</strong> Oferece financiamento das mensalidades em cursos superiores de faculdades privadas, com condições de pagamento facilitadas (juros baixos ou zero) após a formatura, de acordo com a renda familiar do estudante.<br>
                                🔗 <a href="https://acessounico.mec.gov.br/fies" target="_blank" rel="noopener noreferrer">Site Oficial Fies</a>
                            </li>
                        </ul>
                        <p><strong>Como funciona:</strong> É necessário ter feito o Enem recente (verificar regras de cada edital), não ter zerado a redação e atender aos critérios específicos de cada programa (renda, tipo de escola cursada no ensino médio, etc.).</p>
                        <p><strong>Portal Centralizado:</strong> Todas as informações, cronogramas e inscrições são feitas pelo Portal Único de Acesso ao Ensino Superior do MEC.</p>
                        🔗 <a href="https://acessounico.mec.gov.br/" target="_blank" rel="noopener noreferrer">Portal Único de Acesso ao Ensino Superior</a>
                    </div>`
        }, {
          titulo: "Universidades parceiras dos programas educacionais",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🎓 Instituições de Ensino Superior na Região de Itabuna (Parceiras Prouni/Sisu/Fies)</h2>
                        <p>Muitas universidades e faculdades públicas e privadas na região de Itabuna costumam aderir aos programas federais (Sisu, Prouni, Fies), oferecendo vagas para estudantes locais.</p>
                        <br>
                        <h3>Exemplos de Instituições (Verificar Adesão a Cada Edital):</h3>
                        <p><em>A participação pode variar a cada semestre. Confirme sempre nos sites oficiais dos programas e das instituições.</em></p>
                        <br>
                        <ul>
                            <li><strong>Públicas (geralmente Sisu):</strong></li>
                            <ul>
                                <li><strong>Universidade Federal do Sul da Bahia (UFSB):</strong> Campus Jorge Amado em Itabuna. <a href="https://ufsb.edu.br/" target="_blank" rel="noopener noreferrer">Site UFSB</a></li>
                                <li><strong>Universidade Estadual de Santa Cruz (UESC):</strong> Localizada entre Itabuna e Ilhéus. <a href="https://www.uesc.br/" target="_blank" rel="noopener noreferrer">Site UESC</a></li>
                                <li><strong>Instituto Federal da Bahia (IFBA):</strong> Campus Itabuna (oferece cursos superiores também). <a href="https://portal.ifba.edu.br/itabuna" target="_blank" rel="noopener noreferrer">Site IFBA Itabuna</a></li>
                            </ul>
                            <br>
                            <li><strong>Privadas (geralmente Prouni e/ou Fies):</strong></li>
                            <ul>
                                <li><strong>UNIME Itabuna:</strong> Parte do grupo Cogna. <a href="https://www.anhanguera.com/unime" target="_blank" rel="noopener noreferrer">Site UNIME</a></li>
                                <li><strong>UniFTC Itabuna:</strong> Rede UniFTC. <a href="https://www.uniftc.edu.br/itabuna" target="_blank" rel="noopener noreferrer">Site UniFTC Itabuna</a></li>
                                <li><strong>UNEX (Antiga FTC Itabuna):</strong> Rede UNEX. <a href="https://unex.edu.br/faculdade/itabuna/" target="_blank" rel="noopener noreferrer">Site UNEX Itabuna</a></li>
                                <li><strong>Faculdade Madre Thais:</strong> Em Ilhéus, mas recebe muitos alunos de Itabuna. <a href="https://www.faculdademadrethais.com.br/" target="_blank" rel="noopener noreferrer">Site Madre Thais</a></li>
                            </ul>
                        </ul>
                        <p><strong>Como Saber as Vagas Disponíveis:</strong> A forma mais segura é consultar o <a href="https://acessounico.mec.gov.br/" target="_blank" rel="noopener noreferrer">Portal Único de Acesso</a> durante os períodos de inscrição. Lá é possível filtrar vagas por curso, cidade e instituição para cada programa (Sisu, Prouni, Fies).</p>
                    </div>`
        }, {
          titulo: "Institutos de cursos profissionalizantes",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🛠️ Institutos de Cursos Profissionalizantes em Itabuna</h2> 
                        <p>Além do ensino superior, Itabuna possui instituições focadas em formação técnica e profissionalizante, essenciais para rápida inserção no mercado.</p>
                        <p><strong>Principais:</strong> <a href="https://portal.ifba.edu.br/itabuna" target="_blank" rel="noopener noreferrer">IFBA</a>, <a href="https://www.ba.senac.br/" target="_blank" rel="noopener noreferrer">SENAC</a>, <a href="https://www.fieb.org.br/senai" target="_blank" rel="noopener noreferrer">SENAI</a>, <a href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/ba" target="_blank" rel="noopener noreferrer">SEBRAE</a> (cursos e oficinas).</p>
                        <p><em>(Veja mais detalhes no subtópico "Formação Profissional e Ensino Técnico")</em></p>
                     </div>`
        }]
      }
    }
  },
  itacare: {
    titulo: "Bem-vindo ao Cidadania Pop Itacaré!",
    descricao: "Aqui você encontra informações relevantes sobre nossa cidade, organizadas para facilitar sua busca.",
    categorias: {
      saude: {
        titulo: "Saúde",
        subcategorias: [{
          titulo: "UPAS",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🚑 Atendimento de Urgência em Itacaré</h2>
                        <p>O atendimento é centralizado no Hospital Municipal e na rede de atenção primária. SAMU (192) para casos críticos.</p>
                        <p><strong>Canais:</strong> SAMU (192), Hospital Municipal, UBS do bairro (casos menos urgentes).</p>
                        <p><strong>⚠️ Atenção a Boatos:</strong> Antes de compartilhar sobre "fechamento de hospital" ou "nova UPA 24h", verifique nos canais oficiais da <a href="http://itacare.ba.gov.br/category/saude/" target="_blank" rel="noopener noreferrer">Prefeitura (Saúde)</a>.</p>
                    </div>`
        }, {
          titulo: "Regularização do SUS",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🩺 Regularização do SUS em Itacaré</h2>
                        <p>Para atualizar ou emitir o Cartão SUS, procure a Secretaria Municipal de Saúde ou a UBS do seu bairro.</p>
                        <p><strong>Documentos:</strong> RG, CPF, Comprovante de Residência.</p>
                        <p><strong>❌ Erros Comuns:</strong> É falso que só pode ser feito no hospital ou que exige comprovação de renda. O cartão é direito de todos.</p>
                        <p>🔗 Contatos das UBS: <a href="http://itacare.ba.gov.br/category/saude/" target="_blank" rel="noopener noreferrer">Secretaria de Saúde de Itacaré</a>.</p>
                    </div>`
        }, {
          titulo: "Bolsa Família",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>👨‍👩‍👧 Bolsa Família e CadÚnico em Itacaré</h2>
                        <br>
                        <p>Inscrição e atualização do CadÚnico (necessário para Bolsa Família) são feitos no CRAS de Itacaré.</p>
                        <p><strong>📍 Local:</strong> CRAS (Centro de Referência de Assistência Social).</p>
                        <p><strong>📋 Passos:</strong> Reúna documentos (RG, CPF, certidão dependentes, comprovante residência), agende no CRAS, mantenha dados atualizados.</p>
                        <p><strong>💸 Pagamentos:</strong> Consulte via apps Caixa Tem ou Bolsa Família.</p>
                        <p><strong>⚠️ Cuidado com Golpes:</strong> Mensagens cobrando taxa ou prometendo liberação expressa são fraudes. Cadastro é gratuito.</p>
                        <p>🔗 Infos: <a href="https://www.gov.br/mds/pt-br/acoes-e-programas/bolsa-familia" target="_blank" rel="noopener noreferrer">Gov.br - Bolsa Família</a> | <a href="http://itacare.ba.gov.br/" target="_blank" rel="noopener noreferrer">Prefeitura de Itacaré</a>.</p>
                    </div>`
        }, {
          titulo: "CRAS",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🏛️ CRAS em Itacaré</h2>
                        <p>Unidade municipal para serviços de proteção social básica.</p>
                        <p><strong>💡 Serviços:</strong> CadÚnico, orientação sobre Bolsa Família e BPC, PAIF, encaminhamentos.</p>
                        <p><strong>📍 Localização:</strong> Verifique endereço e telefone atualizados no site oficial da prefeitura.</p>
                        <p><strong>⚠️ Como Verificar Infos:</strong> Confirme mudanças de endereço ou novos benefícios ligando para o CRAS/Secretaria de Desenvolvimento Social ou checando o site da <a href="http://itacare.ba.gov.br/" target="_blank" rel="noopener noreferrer">Prefeitura de Itacaré</a>.</p>
                    </div>`
        }]
      },
      trabalho: {
        titulo: "Trabalho",
        subcategorias: [{
          titulo: "SINE",
          link: "https://www.ba.gov.br/trabalho/280/vagas-do-dia-sinebahia",
          conteudo: ""
        }, {
          titulo: "PROATE",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>❓ PROATE em Itacaré</h2>
                        <p><strong>Não foi encontrada documentação oficial que comprove a existência de um programa PROATE em Itacaré.</strong> Afirmar sua existência pode gerar falsas expectativas.</p>
                        <p><strong>🔍 O que fazer:</strong> Busque qualificação/emprego na Secretaria de Desenvolvimento Social, SINE regional (Itabuna/Ilhéus) ou instituições como SENAC/SENAI.</p>
                        <p><strong>⚠️ Verificar anúncios:</strong> Confirme editais no site da prefeitura, Diário Oficial ou ligando para a secretaria responsável.</p>
                    </div>`
        }]
      },
      politica: { // Mantido conteúdo detalhado de dados(2).js
        titulo: "Política",
        subcategorias: [{
          titulo: "Combate a Fake News",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>⚠️ Combate às Fake News</h2> <br>
                        <p>A disseminação de informações falsas ameaça a credibilidade do processo eleitoral e prejudica escolhas conscientes. Verificar antes de compartilhar é essencial para fortalecer a democracia.</p><br>
                        <br>
                        <h3>🔎 Por que verificar informações?</h3><br>
                        <ul>
                            <li><strong>Preservar a democracia:</strong> Fake news distorcem debates e influenciam votos.</li>
                            <li><strong>Ação coletiva:</strong> Justiça Eleitoral mantém o programa <em>Fato ou Boato</em>.</li>
                            <li><strong>Checagem confiável:</strong> Agências parceiras do TSE apuram conteúdos suspeitos.</li>
                            <li><strong>Monitoramento:</strong> CIEDDE atua contra desinformação.</li>
                            <li><strong>Responsabilização:</strong> TSE pune autores e plataformas.</li>
                            <li><strong>Denúncia cidadã:</strong> Use o Siade ou disque 1491.</li>
                            <li><strong>Educação digital:</strong> Fique atento a erros, sites duvidosos, títulos sensacionalistas.</li>
                        </ul><br>
                        <br>
                        <h3>💡 Dicas rápidas</h3><br>
                        <ul>
                            <li>Confira em fontes oficiais como <a href="https://www.justicaeleitoral.jus.br/fato-ou-boato/" target="_blank" rel="noopener noreferrer">Fato ou Boato</a>.</li>
                            <li>Questione autoria, data e credibilidade.</li>
                            <li>Denuncie conteúdos suspeitos.</li>
                            <li>Compartilhe apenas o que for correto.</li>
                        </ul><br>
                        <p><strong>Resumo:</strong> Na dúvida, não compartilhe.</p>
                        <p>👉 Saiba mais: <a href="https://www.justicaeleitoral.jus.br/fato-ou-boato/" target="_blank" rel="noopener noreferrer">Fato ou Boato — Justiça Eleitoral</a></p>
                    </div>`
        }, {
          titulo: "Mesário",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>✨ Mesário Voluntário</h2>
                        <p>Ser mesário voluntário é ser protagonista da democracia, ajudando a organizar a eleição e garantindo a contagem correta dos votos, contribuindo para a transparência do processo.</p><br>
                        <br>
                        <h3>📈 Benefícios de ser mesário</h3><br>
                        <ul>
                            <li>Folgas em dobro pelo dia de trabalho e treinamentos.</li>
                            <li>Auxílio-alimentação no dia da eleição.</li>
                            <li>Certificado oficial de participação.</li>
                            <li>Horas de atividade complementar para estudantes universitários.</li>
                            <li>Vantagem em concursos públicos (se previsto em edital).</li>
                        </ul><br>
                        <p>Quer saber mais e se inscrever? Acesse: <a href="https://www.tre-ba.jus.br/servicos-eleitorais/mesarios/mesarios" target="_blank" rel="noopener noreferrer">Mesário Voluntário TRE-BA</a></p>
                    </div>`
        }, {
          titulo: "Estrutura Governamental",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🧩 Estrutura Governamental</h2>
                        <p>Entender quem faz o quê nos níveis municipal, estadual e federal é essencial para a cidadania.</p><br>
                        <h3>👮🏽 Executivo (Administra e Executa Leis)</h3><br>
                        <ul>
                            <li><strong>Prefeito (Município):</strong> Chefe do executivo municipal (saúde, educação, transporte local). <a href="https://www.tre-ba.jus.br/comunicacao/noticias/2024/Setembro/o-que-fazem-os-prefeitos-e-vereadores?SearchableText=prefeito" target="_blank" rel="noopener noreferrer">Ref</a></li>
                            <li><strong>Governador (Estado):</strong> Chefe do executivo estadual (segurança pública, hospitais regionais). <a href="https://www12.senado.leg.br/noticias/materias/2014/09/15/o-que-faz-o-governador" target="_blank" rel="noopener noreferrer">Ref</a></li>
                            <li><strong>Presidente (País):</strong> Chefe do executivo federal (defesa, relações exteriores, economia). <a href="https://www12.senado.leg.br/noticias/materias/2014/09/15/o-que-faz-o-presidente-da-repaoblica" target="_blank" rel="noopener noreferrer">Ref</a></li>
                        </ul><br>
                        <h3>📝 Legislativo (Cria Leis e Fiscaliza o Executivo)</h3><br>
                        <ul>
                            <li><strong>Vereadores (Município):</strong> Criam leis municipais e fiscalizam o prefeito. <a href="https://www.tre-ba.jus.br/comunicacao/noticias/2024/Setembro/o-que-fazem-os-prefeitos-e-vereadores?SearchableText=prefeito" target="_blank" rel="noopener noreferrer">Ref</a></li>
                            <li><strong>Deputados Estaduais/Federais:</strong> Criam leis estaduais/federais e fiscalizam governador/presidente. <a href="https://www.camara.leg.br/noticias/903471-SAIBA-QUAIS-SAO-AS-ATRIBUICOES-DO-DEPUTADO-FEDERAL/" target="_blank" rel="noopener noreferrer">Ref</a></li>
                            <li><strong>Senadores:</strong> Representam os estados, votam leis federais e fiscalizam o presidente. <a href="https://www12.senado.leg.br/noticias/materias/2022/08/05/voce-sabe-o-que-faz-um-senador-entenda-aqui" target="_blank" rel="noopener noreferrer">Ref</a></li>
                        </ul><br>
                         <h3>Outros Órgãos</h3><br>
                        <ul>
                             <li><strong>Secretarias e Ministérios:</strong> Executam políticas específicas (saúde, educação, etc.). <a href="https://www.gov.br/pt-br/orgaos-do-governo?com" target="_blank" rel="noopener noreferrer">Ref</a></li>
                             <li><strong>Tribunais de Contas e Controladorias:</strong> Fiscalizam o uso do dinheiro público. <a href="https://www.gov.br/cgu/pt-br" target="_blank" rel="noopener noreferrer">Ref</a></li>
                        </ul>
                    </div>`
        }, {
          titulo: "Acompanhe seu político",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>Acompanhe Seu Político</h2>
                        <p>Fiscalizar o trabalho dos seus representantes é um direito e dever cidadão. Use as ferramentas oficiais:</p>
                        <br>
                        <h3>🏛️ Portal da Câmara dos Deputados</h3>
                        <p>Acompanhe deputados federais: perfil, projetos, votações, presença, gastos (cota parlamentar), transmissões ao vivo. 🔗 <a href="https://www2.camara.leg.br/transparencia/servicos-ao-cidadao/transparencia" target="_blank" rel="noopener noreferrer">Portal da Câmara</a></p>
                        <br>
                        <h3>💰 Portal da Transparência (CGU)</h3>
                        <p>Consulte gastos públicos federais: emendas parlamentares, salários, contratos, licitações, benefícios sociais, cartões corporativos. 🔗 <a href="https://portaltransparencia.gov.br" target="_blank" rel="noopener noreferrer">Portal da Transparência</a></p>
                        <br>
                        <h3>📲 App e Site do Senado Federal</h3>
                        <p>Acompanhe senadores: perfil, projetos, votações, notícias, transmissões, agenda. 🔗 <a href="https://www12.senado.leg.br" target="_blank" rel="noopener noreferrer">Site do Senado</a> (ou baixe o app)</p>
                    </div>`
        }, {
          titulo: "Cartório Eleitoral de Itacaré",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🏛️ Cartório Eleitoral de Itacaré</h2>
                        <p>Unidade da Justiça Eleitoral responsável por serviços ao eleitor.</p>
                        <br>
                        <h3>🔧 Principais Serviços:</h3><br>
                        <ul><li>Emissão e transferência do título de eleitor.</li><li>Atualização cadastral.</li><li>Coleta de biometria.</li><li>Regularização da situação eleitoral.</li></ul><br>
                        <br>
                        <h3>📋 Agendamento e Contato</h3><br>
                        <p>O atendimento presencial geralmente requer agendamento prévio online no site do TRE-BA. Consulte também endereços e horários atualizados.</p>
                        <ul>
                            <li><a href="https://www.tre-ba.jus.br/servicos-eleitorais/agendamento-do-atendimento-presencial" target="_blank" rel="noopener noreferrer">Agendamento TRE-BA</a></li>
                            <li><a href="https://www.tre-ba.jus.br/servicos-eleitorais/servicos-horarios-e-locais/atendimento-no-interior-do-estado" target="_blank" rel="noopener noreferrer">Locais de Atendimento no Interior</a></li>
                        </ul><br>
                         <h3>📍 Alistamento e Voto</h3><br>
                         <p>Entender as regras de alistamento (obrigatório 18-70 anos, facultativo 16-18 e +70) e prazos é crucial para garantir o direito ao voto.</p>
                         <p>🔗 Dúvidas: <a href="https://www.tre-ba.jus.br/servicos-eleitorais/informacoes-uteis/informacoes-eleitorais" target="_blank" rel="noopener noreferrer">Informações Eleitorais TRE-BA</a></p>
                    </div>`
        }]
      },
      financas: { // <<< SEÇÃO DE FINANÇAS DE ITACARÉ ATUALIZADA >>>
        titulo: "Finanças",
        subcategorias: [{
          titulo: "Ferramentas para acompanhar gastos públicos",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🔍 Ferramentas para acompanhar gastos públicos em Itacaré</h2>
                        <p>A transparência pública é fundamental para que o cidadão possa fiscalizar como o dinheiro público é arrecadado e utilizado. Em Itacaré, existem portais oficiais que permitem acompanhar receitas, despesas, contratações e ações da gestão municipal.</p>
                        <br>
                        <h3>📊 Portal da Transparência Municipal</h3>
                        <p>Plataforma oficial onde a prefeitura publica receitas, despesas, contratos, licitações e pagamentos. É essencial para verificar se os gastos estão de acordo com o orçamento. 🔗 <a href="http://itacare.ba.gov.br/transparencia/" target="_blank" rel="noopener noreferrer">Acesse o Portal da Transparência de Itacaré</a></p>
                        <br>
                        <h3>🏛️ TCM-BA (Tribunal de Contas dos Municípios)</h3>
                        <p>O TCM também agrega e fiscaliza dados financeiros dos municípios baianos, oferecendo outra fonte de consulta. 🔗 <a href="https://www.tcm.ba.gov.br/" target="_blank" rel="noopener noreferrer">Acesse o TCM-BA</a></p>
                        <br>
                        <h3>📢 Audiências Públicas</h3>
                        <p>Fique atento às convocações para audiências públicas sobre orçamento e gestão fiscal. É uma oportunidade de entender e questionar a aplicação dos recursos.</p>
                        <p><strong>Como usar:</strong> Acesse os portais, pesquise por despesas específicas (ex: "obra X", "fornecedor Y"), compare empenhos (autorizações) com pagamentos e verifique se estão alinhados ao planejamento (LOA/PPA).</p>
                    </div>`
        }, {
          titulo: "Educação Fiscal",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>📚 Educação Fiscal em Itacaré: Entendendo os Impostos</h2>
                        <p>Educação fiscal é a prática que ajuda o cidadão a entender de onde vem e para onde vai o dinheiro dos impostos, fortalecendo a capacidade de fiscalizar e combater boatos sobre finanças públicas.</p>
                        <br>
                        <h3>💰 Para onde vai o dinheiro?</h3>
                        <p>O dinheiro arrecadado com impostos (municipais, estaduais, federais) financia serviços essenciais como postos de saúde, escolas, limpeza urbana, segurança, etc.</p>
                        <br>
                        <h3>🧾 Por que pedir nota fiscal?</h3>
                        <p>Ao pedir nota fiscal em compras e serviços, você garante que o imposto seja recolhido e chegue aos cofres públicos, ajudando a combater a sonegação.</p>
                        <br>
                        <h3>Como Fiscalizar na Prática em Itacaré?</h3>
                         <ul>
                             <li>Acesse e leia a LOA (Lei Orçamentária Anual) e o PPA (Plano Plurianual) no site da prefeitura ou câmara para entender o planejamento de gastos.</li>
                             <li>Use o Portal da Transparência para comparar o planejado com o que foi efetivamente gasto.</li>
                             <li>Participe das audiências públicas sobre o orçamento.</li>
                         </ul>
                        <p><strong>Fontes Gerais:</strong> <a href="https://www.gov.br/receitafederal/pt-br/assuntos/educacao-fiscal" target="_blank" rel="noopener noreferrer">Receita Federal</a> | <a href="https://www.gov.br/receitafederal/pt-br/assuntos/educacao-fiscal/programa-nacional-de-educacao-fiscal-pnef" target="_blank" rel="noopener noreferrer">PNEF</a> | <a href="https://www.tcm.ba.gov.br/" target="_blank" rel="noopener noreferrer">TCM-BA</a></p>
                    </div>`
        }, {
          titulo: "Tributos",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>💰 Tributos: Federais, Estaduais e Municipais</h2>
                        <p>Os tributos financiam os serviços públicos e são divididos em três níveis:</p>
                        <br>
                        <h3>🏛️ Federais</h3>
                        <p>Administrados pela União. Ex: Imposto de Renda (IR), IPI, IOF, INSS, PIS/COFINS. São os mesmos em todo o Brasil. 🔗 <a href="https://www.gov.br/receitafederal/pt-br/assuntos/tributos" target="_blank" rel="noopener noreferrer">Receita Federal</a></p>
                        <br>
                        <h3>🌎 Estaduais</h3>
                        <p>Administrados pelo Estado da Bahia. Ex: ICMS (sobre mercadorias e alguns serviços), IPVA (veículos), ITCMD (herança/doação). 🔗 <a href="https://www.sefaz.ba.gov.br/" target="_blank" rel="noopener noreferrer">SEFAZ-BA</a></p>
                        <br>
                        <h3>🏘️ Municipais (Itacaré)</h3>
                        <p>Administrados pela Prefeitura de Itacaré. Ex: <strong>IPTU</strong> (imóveis urbanos), <strong>ISS</strong> (serviços prestados na cidade), <strong>ITBI</strong> (transmissão de imóveis).</p>
                        <p><strong>Canais Oficiais em Itacaré:</strong> Use o <a href="http://itacare.saatri.com.br/" target="_blank" rel="noopener noreferrer">Itacaré SAATRI</a> para emitir guias online (IPTU, DAMs). Dúvidas sobre valores, isenções ou prazos devem ser resolvidas presencialmente na Secretaria Municipal de Finanças / Setor de Tributos.</p>
                        <p><strong>⚠️ Cuidado com Golpes:</strong> Pagamento oficial é sempre via guia (boleto) com código de barras emitido pelo sistema municipal (SAATRI) ou bancos autorizados. Desconfie de cobranças por WhatsApp ou links suspeitos.</p>
                    </div>`
        }, {
          titulo: "Imposto de Renda",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>📑 Imposto de Renda Pessoa Física (IRPF)</h2>
                        <p>É um tributo federal, ou seja, as regras são as mesmas em todo o Brasil. Trata-se da declaração anual de rendimentos à Receita Federal.</p>
                        <br>
                        <h3>📝 Declaração e Prazos</h3><p>O prazo e a forma de entrega (programa/app Meu Imposto de Renda ou e-CAC) são definidos nacionalmente. Consulte o calendário anual no site da Receita.</p>
                        <br>
                        <h3>💰 Restituição</h3><p>Devolução de imposto pago a mais, feita em lotes nacionais.</p>
                        <br>
                        <h3>⚠️ Malha Fina</h3><p>Ocorre por inconsistências; exige correção via declaração retificadora.</p>
                        <br>
                        <h3>✅ Atendimento para Moradores de Itacaré</h3>
                        <p>A maioria dos serviços é online. Para atendimento presencial (casos específicos), geralmente é necessário buscar as agências da Receita Federal em cidades maiores como Ilhéus ou Itabuna, sempre com <a href="https://www.gov.br/receitafederal/pt-br/servicos/agendamento" target="_blank" rel="noopener noreferrer">agendamento prévio</a> no site da Receita.</p>
                        <p><strong>Canais Oficiais:</strong> <a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda" target="_blank" rel="noopener noreferrer">Portal Meu Imposto de Renda</a> | <a href="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/perguntas-frequentes/imposto-de-renda/dirpf" target="_blank" rel="noopener noreferrer">Perguntas Frequentes</a></p>
                        <br>
                        <br>
                        <p><strong>⚠️ Desconfie:</strong> Promessas de "isenção automática" ou "declaração grátis com restituição garantida". Serviços oficiais da Receita são gratuitos.</p>
                    </div>`
        }]
      },
      educacao: {
        titulo: "Educação",
        subcategorias: [{
          titulo: "Universidades parceiras dos programas educacionais",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🎓 Instituições de Ensino Superior e Programas Federais (Prouni, Sisu, Fies)</h2>
                        <p>Moradores de Itacaré podem buscar acesso ao ensino superior através dos programas federais (Sisu, Prouni, Fies) em instituições públicas e privadas da região, principalmente nas cidades próximas como Ilhéus e Itabuna.</p>

                        <h3>Links Oficiais dos Programas:</h3>
                        <ul>
                            <li><strong>Portal Único de Acesso:</strong> Centraliza Sisu, Prouni e Fies. <a href="https://acessounico.mec.gov.br/" target="_blank" rel="noopener noreferrer">Acesse aqui</a></li>
                            <li><strong>Sisu:</strong> <a href="https://acessounico.mec.gov.br/sisu" target="_blank" rel="noopener noreferrer">Site Oficial Sisu</a> (para universidades públicas)</li>
                            <li><strong>Prouni:</strong> <a href="https://acessounico.mec.gov.br/prouni" target="_blank" rel="noopener noreferrer">Site Oficial Prouni</a> (bolsas em faculdades privadas)</li>
                            <li><strong>Fies:</strong> <a href="https://acessounico.mec.gov.br/fies" target="_blank" rel="noopener noreferrer">Site Oficial Fies</a> (financiamento em faculdades privadas)</li>
                        </ul>

                        <h3>Instituições Relevantes na Região (Exemplos):</h3>
                        <p><em>Verifique a participação e vagas nos sites oficiais dos programas e das instituições.</em></p>
                        <ul>
                            <li><strong>Públicas (Sisu):</strong> UESC (Ilhéus/Itabuna), UFSB (Campi em Ilhéus, Itabuna, Porto Seguro), IFBA (Campi em Ilhéus, Eunápolis).</li>
                            <li><strong>Privadas (Prouni/Fies):</strong> Faculdades em Ilhéus (ex: Madre Thais) e Itabuna (ex: UNIME, UniFTC, UNEX).</li>
                        </ul>
                        <p><strong>Como Pesquisar Vagas:</strong> Use o <a href="https://acessounico.mec.gov.br/" target="_blank" rel="noopener noreferrer">Portal Único de Acesso</a> durante as inscrições, filtrando por curso e cidade (Ilhéus, Itabuna, etc.).</p>
                    </div>`
        }, {
          titulo: "Acessibilidade Educacional",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>♿ Programas Federais de Acesso ao Ensino Superior (Prouni, Sisu, Fies)</h2>
                        <p>Para estudantes de Itacaré que buscam o ensino superior, os programas federais são as principais portas de entrada:</p>
                        <ul>
                            <li><strong>Sisu:</strong> Usa a nota do Enem para vagas em <strong>universidades públicas</strong> (UESC, UFSB, IFBA na região). 🔗 <a href="https://acessounico.mec.gov.br/sisu" target="_blank" rel="noopener noreferrer">Site Oficial Sisu</a></li>
                            <li><strong>Prouni:</strong> Oferece <strong>bolsas</strong> (100% ou 50%) em <strong>faculdades privadas</strong> (verificar instituições em Ilhéus/Itabuna) baseado no Enem e renda. 🔗 <a href="https://acessounico.mec.gov.br/prouni" target="_blank" rel="noopener noreferrer">Site Oficial Prouni</a></li>
                            <li><strong>Fies:</strong> <strong>Financia mensalidades</strong> em <strong>faculdades privadas</strong> com pagamento facilitado após a formatura, dependendo da renda. 🔗 <a href="https://acessounico.mec.gov.br/fies" target="_blank" rel="noopener noreferrer">Site Oficial Fies</a></li>
                        </ul>
                        <p><strong>Como funciona:</strong> É preciso ter feito o Enem recente e atender aos critérios de cada programa. Todas as informações estão no <a href="https://acessounico.mec.gov.br/" target="_blank" rel="noopener noreferrer">Portal Único de Acesso ao Ensino Superior</a>.</p>
                        <hr style="margin: 20px 0;">
                        <p>Para informações sobre acessibilidade na <strong>rede municipal</strong> de Itacaré (ensino fundamental, creches), procure a <strong>Secretaria Municipal de Educação</strong>.</p>
                        <p>🔗 <a href="http://itacare.ba.gov.br/" target="_blank" rel="noopener noreferrer">Prefeitura de Itacaré (Educação)</a></p>
                    </div>`
        }, {
          titulo: "Institutos de cursos profissionalizantes",
          link: "",
          conteudo: `<div class="conteudo-final" style="text-align: left;">
                        <h2>🛠️ Cursos Profissionalizantes e Técnicos para Itacaré</h2>
                        <p>A qualificação profissional é fundamental para aproveitar oportunidades no turismo, comércio e serviços, áreas fortes em Itacaré e região. Embora a oferta local possa ser limitada, existem opções através de parcerias e instituições regionais.</p>
                        
                        <h3>Onde Buscar Cursos:</h3>
                        <ul>
                            <li><strong>Parcerias da Prefeitura:</strong> Fique atento a notícias no site oficial da <a href="http://itacare.ba.gov.br/" target="_blank" rel="noopener noreferrer">Prefeitura de Itacaré</a> sobre cursos gratuitos oferecidos em colaboração com SENAC, SENAI ou outros programas (ex: Qualifica Bahia).</li>
                            <li><strong><a href="https://www.ba.senac.br/" target="_blank" rel="noopener noreferrer">SENAC (Regional):</a></strong> Unidades em Ilhéus e Itabuna oferecem cursos em áreas como Hospitalidade, Gastronomia, Gestão, Beleza e Informática. Verifique a possibilidade de turmas EAD ou presenciais acessíveis.</li>
                            <li><strong><a href="https://www.fieb.org.br/senai" target="_blank" rel="noopener noreferrer">SENAI (Regional):</a></strong> Unidades próximas (Ilhéus/Itabuna) focam em áreas industriais, manutenção, elétrica, construção civil. Útil para quem busca trabalho nesses setores.</li>
                            <li><strong><a href="https://portal.ifba.edu.br/" target="_blank" rel="noopener noreferrer">IFBA (Campi Regionais):</a></strong> Campus em Ilhéus oferece cursos técnicos e superiores gratuitos que podem ser uma opção.</li>
                            <li><strong><a href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/ba" target="_blank" rel="noopener noreferrer">SEBRAE:</a></strong> Oferece oficinas e cursos online focados em empreendedorismo e gestão de pequenos negócios, muito relevante para a economia local.</li>
                        </ul>
                        
                        <p><strong>Dica Anti-Golpe:</strong> Desconfie de cursos rápidos com promessas de emprego imediato e taxas altas. Verifique sempre se a instituição é reconhecida e se o curso tem validade (ex: registro no MEC para cursos técnicos).</p>
                    </div>`
        }]
      }
    }
  },
  sobre: {
    titulo: "Sobre o Site",
    conteudo: `<div class="conteudo-final" style="text-align: left;">
            <h2>Nossa Missão</h2>
            <p>A ideia do website surgiu da necessidade de centralizar informações confiáveis sobre serviços sociais disponíveis em Itabuna-BA e Itacaré-BA. Com o avanço da tecnologia e a expansão do uso das redes digitais, a disseminação de fake news tornou-se cada vez mais recorrente, causando transtornos em diversas esferas sociais e confundindo a população com dados incoerentes ou desatualizados. Nesse contexto, o projeto busca oferecer uma fonte segura e acessível, reunindo em um só espaço informações verificadas e de origem oficial, contribuindo para o fortalecimento da cidadania e o combate à desinformação.</p>
        </div>`
  }
};