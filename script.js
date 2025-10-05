// ====================================================================
// SCRIPT DO QUIZ DE TECNOLOGIA
// Este código controla toda a lógica e interatividade do nosso quiz.
// ====================================================================


// --------------------------------------------------------------------
// BANCO DE PERGUNTAS COMPLETO (30 QUESTÕES)
// --------------------------------------------------------------------
// Esta é a nossa "central" de perguntas. Temos 30 no total.
// A cada novo desafio, o script vai sortear 8 perguntas desta lista.
// Cada pergunta é um "objeto" com o texto da pergunta e uma lista de respostas.
const perguntas = [
  // --- SEÇÃO HARDWARE (20 Questões) ---
  {
    pergunta: "Qual a diferença fundamental entre Hardware e Software?",
    respostas: [
      { texto: "Hardware é a parte física (as peças), Software são os programas", correta: true, explicacao: "Perfeito! Hardware é o que podemos tocar, como o mouse e as peças. Software são os aplicativos e sistemas que dão as ordens." },
      { texto: "Hardware é o que já vem no PC, Software é o que compramos depois", correta: false, explicacao: "Incorreto. O sistema operacional é um software que já vem instalado, e podemos comprar novos hardwares." },
      { texto: "Hardware é mais caro que Software", correta: false, explicacao: "Não necessariamente. Existem softwares extremamente caros e peças de hardware bem baratas." }
    ]
  },
  {
    pergunta: "Se o computador fosse um corpo, qual peça seria o 'cérebro' que executa todas as tarefas?",
    respostas: [
      { texto: "A Memória RAM", correta: false, explicacao: "Quase! A RAM seria a 'memória de curto prazo', mas não o cérebro que pensa." },
      { texto: "O Processador (CPU)", correta: true, explicacao: "Exato! O processador (CPU) é o cérebro do computador, responsável por todos os cálculos e decisões." },
      { texto: "A Placa-mãe", correta: false, explicacao: "Não. A placa-mãe seria o 'sistema nervoso', conectando tudo, mas não o cérebro." }
    ]
  },
  {
    pergunta: "Qual peça parece uma grande placa cheia de 'estradas' e encaixes para conectar todos os componentes?",
    respostas: [
      { texto: "A Fonte de Alimentação", correta: false, explicacao: "Errado. A fonte distribui energia, mas é outra peça que conecta todos os componentes para que eles conversem." },
      { texto: "O Gabinete", correta: false, explicacao: "O gabinete é a 'caixa' que protege as peças, mas a conexão entre elas acontece em outro lugar." },
      { texto: "A Placa-mãe", correta: true, explicacao: "Correto! A placa-mãe é a base que interliga o processador, as memórias e todas as outras partes do computador." }
    ]
  },
  {
    pergunta: "Qual memória guarda seus arquivos e fotos permanentemente, mesmo se o computador for desligado?",
    respostas: [
      { texto: "A Memória RAM", correta: false, explicacao: "Incorreto. A RAM é uma memória temporária, ela esquece tudo quando o PC é desligado." },
      { texto: "O HD ou SSD", correta: true, explicacao: "Isso mesmo! O HD ou o SSD são as memórias de armazenamento, onde seus dados ficam guardados a longo prazo." },
      { texto: "A memória do Processador", correta: false, explicacao: "O processador tem uma memória interna minúscula (cache), mas não serve para guardar seus arquivos." }
    ]
  },
  {
    pergunta: "Qual componente é essencial para gerar as imagens que você vê no monitor, principalmente para jogos?",
    respostas: [
      { texto: "A Placa de Som", correta: false, explicacao: "Não, a placa de som cuida do áudio que você ouve, não do vídeo." },
      { texto: "O Processador (CPU)", correta: false, explicacao: "O processador ajuda, mas existe uma peça especialista em criar as imagens." },
      { texto: "A Placa de Vídeo (GPU)", correta: true, explicacao: "Correto! A placa de vídeo (GPU) é a grande responsável por processar e criar os gráficos, vídeos e tudo que aparece na tela." }
    ]
  },
  {
    pergunta: "O que acontece com os dados na Memória RAM quando você desliga o computador?",
    respostas: [
      { texto: "Eles são apagados", correta: true, explicacao: "Exato! A RAM é uma memória 'volátil', ou seja, precisa de energia para funcionar. Sem energia, ela se esvazia." },
      { texto: "Ficam guardados para a próxima vez", correta: false, explicacao: "Errado, essa é a função do HD/SSD. A RAM funciona como uma lousa que é apagada todo dia." },
      { texto: "São enviados para a 'nuvem'", correta: false, explicacao: "Não, o envio para a nuvem é uma ação que o usuário precisa fazer através de um software." }
    ]
  },
  {
    pergunta: "Qual peça é responsável por pegar a energia da tomada e distribuir para todo o computador?",
    respostas: [
      { texto: "A Placa-mãe", correta: false, explicacao: "A placa-mãe recebe a energia, mas não é ela que a converte da tomada." },
      { texto: "A Fonte de Alimentação", correta: true, explicacao: "Correto! A fonte de alimentação é quem converte a energia elétrica e alimenta todos os componentes do PC." },
      { texto: "O Processador", correta: false, explicacao: "O processador é um dos maiores consumidores de energia, mas ele não a distribui." }
    ]
  },
  {
    pergunta: "O que é um 'Software'?",
    respostas: [
      { texto: "Qualquer peça que vai dentro do computador", correta: false, explicacao: "Isso é a definição de Hardware. Software é a parte que não podemos tocar." },
      { texto: "Um conjunto de instruções que diz ao computador o que fazer", correta: true, explicacao: "Exato! Software são os programas, aplicativos e jogos. É a 'mente' que comanda as peças (Hardware)." },
      { texto: "Um cabo que conecta o monitor ao PC", correta: false, explicacao: "Cabos também são hardware, ou seja, parte física." }
    ]
  },
  {
    pergunta: "Mouse e teclado são dispositivos que servem para...?",
    respostas: [
      { texto: "Mostrar informações para o usuário", correta: false, explicacao: "Não, quem mostra informações é o monitor ou a caixa de som. Eles são dispositivos de 'saída'." },
      { texto: "Enviar informações PARA o computador", correta: true, explicacao: "Correto! Eles são dispositivos de 'entrada', pois usamos eles para mandar comandos e textos para o sistema." },
      { texto: "Armazenar arquivos", correta: false, explicacao: "Incorreto. Quem armazena arquivos são os dispositivos de armazenamento, como HD, SSD ou pen drive." }
    ]
  },
  {
    pergunta: "Qual a principal vantagem de um SSD sobre um HD tradicional?",
    respostas: [
      { texto: "Ele é muito mais rápido", correta: true, explicacao: "Correto! Por não ter discos girando, o SSD acessa os dados eletronicamente, o que torna o PC muito mais rápido para ligar e abrir programas." },
      { texto: "Ele armazena muito mais coisas", correta: false, explicacao: "Geralmente, pelo mesmo preço, os HDs ainda oferecem mais espaço de armazenamento." },
      { texto: "Ele não precisa de energia para funcionar", correta: false, explicacao: "Ele até gasta um pouco menos, mas sua principal vantagem disparada é a velocidade." }
    ]
  },
  {
    pergunta: "Qual componente esquenta muito e geralmente precisa de um 'ventilador' (cooler) em cima para funcionar bem?",
    respostas: [
      { texto: "A Memória RAM", correta: false, explicacao: "A RAM esquenta um pouco, mas não tanto quanto o cérebro do computador." },
      { texto: "O HD/SSD", correta: false, explicacao: "O armazenamento não gera tanto calor a ponto de precisar de um cooler dedicado." },
      { texto: "O Processador (CPU)", correta: true, explicacao: "Exato! A CPU trabalha tanto que gera muito calor, e o cooler é essencial para evitar que ela superaqueça." }
    ]
  },
  {
    pergunta: "Monitor, impressora e caixas de som são exemplos de dispositivos de...",
    respostas: [
      { texto: "Entrada", correta: false, explicacao: "Errado. Dispositivos de 'entrada' mandam dados PARA o PC, como o microfone." },
      { texto: "Saída", correta: true, explicacao: "Correto! Eles 'tiram' informações de dentro do computador e mostram para nós, seja em forma de imagem, papel ou som." },
      { texto: "Armazenamento", correta: false, explicacao: "Não. Eles exibem ou reproduzem informações, mas não as guardam permanentemente." }
    ]
  },
  {
    pergunta: "Windows, Linux e macOS são exemplos de que tipo de software essencial?",
    respostas: [
      { texto: "Navegadores de Internet", correta: false, explicacao: "Errado. Navegadores (como o Chrome) são programas que rodam DENTRO desses sistemas." },
      { texto: "Sistemas Operacionais", correta: true, explicacao: "Correto! O Sistema Operacional é o 'chefe' de todos os outros programas e gerencia todo o hardware do computador." },
      { texto: "Editores de Texto", correta: false, explicacao: "Errado. Editores de texto (como o Word) são aplicativos, não o sistema principal." }
    ]
  },
  {
    pergunta: "Se a Memória RAM é a 'mesa de trabalho' temporária, o que seria o HD/SSD?",
    respostas: [
      { texto: "O 'cérebro' que pensa", correta: false, explicacao: "Não, o cérebro é o Processador (CPU)." },
      { texto: "A 'estante de livros' ou arquivo", correta: true, explicacao: "Perfeita analogia! O HD/SSD é onde você guarda tudo (seus 'livros') para consultar quando precisar." },
      { texto: "A 'tomada' que dá energia", correta: false, explicacao: "Não, quem dá energia é a Fonte de Alimentação." }
    ]
  },
  {
    pergunta: "Em qual componente principal você encaixa os 'pentes' de Memória RAM?",
    respostas: [
      { texto: "Na Fonte de Alimentação", correta: false, explicacao: "Incorreto. A fonte de alimentação fornece energia, mas não tem encaixes para memórias." },
      { texto: "No Processador", correta: false, explicacao: "Errado. O processador é o cérebro, mas as memórias se conectam ao lado dele, em outro componente." },
      { texto: "Na Placa-mãe", correta: true, explicacao: "Exato! A placa-mãe tem os encaixes (slots) específicos para que a Memória RAM seja conectada e funcione." }
    ]
  },
  {
    pergunta: "O que dá as ordens e controla as peças físicas (o Hardware) de um computador?",
    respostas: [
      { texto: "O Software (programas e sistema operacional)", correta: true, explicacao: "Correto! O software é a 'inteligência' que comanda o hardware, dizendo a cada peça o que fazer e quando fazer." },
      { texto: "Os cabos de energia", correta: false, explicacao: "Errado. Os cabos de energia fornecem a eletricidade, mas não dão as ordens lógicas sobre o que o hardware deve fazer." },
      { texto: "O usuário, clicando no mouse", correta: false, explicacao: "Quase! O usuário dá o comando, mas é o software que traduz esse clique em milhões de instruções para o hardware executar a tarefa." }
    ]
  },
  {
    pergunta: "O que o 'gabinete' de um computador faz?",
    respostas: [
      { texto: "Processa todas as informações", correta: false, explicacao: "Não, quem faz o processamento é a CPU, que fica dentro do gabinete." },
      { texto: "Serve como a 'caixa' para proteger os componentes internos", correta: true, explicacao: "Isso mesmo! A principal função do gabinete é proteger as peças delicadas contra poeira e impactos." },
      { texto: "Gera as imagens para o monitor", correta: false, explicacao: "Não, essa é a função da placa de vídeo, que também fica dentro do gabinete." }
    ]
  },
  {
    pergunta: "Se você quer melhorar o desempenho do seu PC em jogos, quais são as DUAS peças mais importantes para um upgrade?",
    respostas: [
      { texto: "Fonte e Gabinete", correta: false, explicacao: "Uma boa fonte é importante, mas trocar essas peças sozinhas não aumenta a velocidade nos jogos." },
      { texto: "Placa de Vídeo e Processador", correta: true, explicacao: "Correto! A Placa de Vídeo (GPU) desenha os gráficos e o Processador (CPU) cuida da lógica do jogo. São a dupla dinâmica para a performance." },
      { texto: "HD e Placa de Som", correta: false, explicacao: "Um SSD (tipo de HD) ajuda a carregar o jogo mais rápido, mas durante o jogo, outras peças são mais importantes." }
    ]
  },
  {
    pergunta: "Por que um computador precisa de ventoinhas (coolers) para funcionar bem?",
    respostas: [
      { texto: "Para empurrar a poeira para fora do gabinete", correta: false, explicacao: "Embora ajudem na circulação de ar, a função principal delas não é a limpeza, mas sim o controle de temperatura." },
      { texto: "Para resfriar componentes que esquentam muito, como o Processador", correta: true, explicacao: "Correto! Peças como o CPU e a Placa de Vídeo geram muito calor, e as ventoinhas são essenciais para evitar o superaquecimento." },
      { texto: "Para fazer barulho e sabermos que o computador está ligado", correta: false, explicacao: "Errado. O barulho é um efeito colateral do trabalho delas. O objetivo é a refrigeração, não o som." }
    ]
  },
  {
    pergunta: "O que é mais rápido para o computador: buscar um dado na Memória RAM ou no SSD?",
    respostas: [
      { texto: "É a mesma velocidade", correta: false, explicacao: "Não, existe uma diferença gigantesca de velocidade entre as duas memórias." },
      { texto: "Buscar na Memória RAM", correta: true, explicacao: "Correto! A RAM é milhares de vezes mais rápida que o SSD. É por isso que os programas são carregados do SSD para a RAM para poderem rodar rapidamente." },
      { texto: "Buscar no SSD", correta: false, explicacao: "O SSD é muito rápido para armazenamento, mas não se compara à velocidade de acesso da Memória RAM." }
    ]
  },
  // --- SEÇÃO LINGUAGENS DE PROGRAMAÇÃO (10 Questões) ---
  {
    pergunta: "O que é uma 'linguagem de programação'?",
    respostas: [
        { texto: "Um conjunto de regras e comandos para dar instruções a um computador", correta: true, explicacao: "Exato! É como um idioma que usamos para 'conversar' com a máquina e dizer a ela o que fazer." },
        { texto: "Um idioma falado por robôs em filmes de ficção", correta: false, explicacao: "Hehe, não exatamente. As linguagens de programação são bem reais e usadas para criar os softwares que usamos todos os dias." },
        { texto: "O idioma que está escrito nas teclas do teclado (Português, Inglês)", correta: false, explicacao: "Não, isso é apenas o layout do teclado. A linguagem de programação é o código que escrevemos." }
    ]
  },
  {
    pergunta: "Qual linguagem é a base para construir a 'estrutura' de uma página da web, como esta do quiz?",
    respostas: [
        { texto: "JavaScript", correta: false, explicacao: "O JavaScript dá a interatividade, mas não a estrutura. Ele é o 'cérebro' da página, não o 'esqueleto'." },
        { texto: "HTML", correta: true, explicacao: "Correto! HTML (HyperText Markup Language) é usado para criar os blocos fundamentais de uma página: títulos, parágrafos, botões, etc." },
        { texto: "Photoshop", correta: false, explicacao: "Photoshop é uma ferramenta para criar imagens e design, mas não o código que estrutura a página." }
    ]
  },
  {
    pergunta: "Para 'estilizar' uma página web, definindo cores e fontes, qual linguagem usamos junto com o HTML?",
    respostas: [
        { texto: "CSS", correta: true, explicacao: "Isso mesmo! CSS (Cascading Style Sheets) é a linguagem de estilo. É como a 'roupa' e a 'maquiagem' da página web." },
        { texto: "Python", correta: false, explicacao: "Python é uma linguagem muito poderosa para outras áreas, como servidores e dados, mas não para estilizar páginas." },
        { texto: "HTML", correta: false, explicacao: "O HTML cria a estrutura, mas é o CSS que a deixa bonita." }
    ]
  },
  {
    pergunta: "Qual linguagem de programação dá 'vida' a uma página, criando a lógica deste quiz e outras interações?",
    respostas: [
        { texto: "HTML", correta: false, explicacao: "O HTML cria os botões, mas não a lógica do que acontece quando você clica neles." },
        { texto: "CSS", correta: false, explicacao: "O CSS pode criar animações visuais, mas não a lógica de certo/errado e contagem de pontos." },
        { texto: "JavaScript", correta: true, explicacao: "Exato! O JavaScript roda no navegador e é responsável por toda a interatividade e inteligência da página." }
    ]
  },
  {
    pergunta: "Qual linguagem é famosa pela sua simplicidade e muito usada em Inteligência Artificial?",
    respostas: [
        { texto: "Python", correta: true, explicacao: "Correto! Python é conhecido por sua sintaxe clara e é a linguagem preferida para muitos projetos de IA e ciência de dados." },
        { texto: "Assembly", correta: false, explicacao: "Na verdade, Assembly é uma das linguagens mais complexas e de mais baixo nível que existem." },
        { texto: "Java", correta: false, explicacao: "Java é muito poderosa e usada em grandes sistemas, mas Python é geralmente considerada mais simples para iniciantes." }
    ]
  },
  {
    pergunta: "Linguagens como Java, Kotlin e Swift são as mais populares para criar qual tipo de software?",
    respostas: [
        { texto: "Sites de internet", correta: false, explicacao: "Embora Java possa ser usado em servidores web, o trio é mais famoso por outra área." },
        { texto: "Aplicativos para celular (Android e iOS)", correta: true, explicacao: "Exato! Kotlin e Java são as linguagens oficiais do Android, enquanto Swift é a linguagem principal da Apple para iOS." },
        { texto: "Peças de computador (Hardware)", correta: false, explicacao: "Linguagens de programação criam software (a lógica), não as peças físicas." }
    ]
  },
  {
    pergunta: "Para criar jogos de videogame com gráficos de ponta, qual linguagem é conhecida por seu alto desempenho?",
    respostas: [
        { texto: "HTML", correta: false, explicacao: "HTML é para páginas web, não para jogos de alta performance." },
        { texto: "C++", correta: true, explicacao: "Correto! C++ é uma linguagem extremamente rápida e poderosa, usada nos 'motores' dos principais jogos do mercado." },
        { texto: "Python", correta: false, explicacao: "Python é ótimo para criar jogos simples, mas não tem o mesmo desempenho do C++ para games complexos." }
    ]
  },
  {
    pergunta: "No mundo da programação, o que é um 'bug'?",
    respostas: [
        { texto: "Um vírus de computador", correta: false, explicacao: "Não exatamente. Um vírus é um programa malicioso feito de propósito. Um bug é geralmente um erro não intencional." },
        { texto: "Um erro no código que causa um comportamento inesperado", correta: true, explicacao: "Isso! Um bug é uma falha na lógica ou na escrita do código. 'Debugar' é o ato de caçar e consertar esses bugs." },
        { texto: "Uma peça de hardware com defeito", correta: false, explicacao: "Um defeito físico seria um problema de hardware, enquanto um bug é um problema de software." }
    ]
  },
  {
    pergunta: "O que é um 'algoritmo'?",
    respostas: [
        { texto: "Uma sequência de passos para resolver um problema, como uma receita de bolo", correta: true, explicacao: "Perfeito! Um algoritmo é o plano, a receita. A linguagem de programação é a ferramenta que usamos para escrever essa receita para o computador." },
        { texto: "Uma marca famosa de processadores", correta: false, explicacao: "Isso seriam empresas como Intel ou AMD. Algoritmo é um conceito lógico." },
        { texto: "Um tipo específico de software", correta: false, explicacao: "Não, um algoritmo é a ideia por trás do software. Vários softwares podem usar o mesmo algoritmo." }
    ]
  },
  {
    pergunta: "O que um programador faz quando está 'debugando' um código?",
    respostas: [
        { texto: "Escrevendo o código pela primeira vez", correta: false, explicacao: "Isso é 'codificar' ou 'programar'. O debug vem depois." },
        { texto: "Deixando o código mais bonito e organizado", correta: false, explicacao: "Isso se chama 'refatoração'. É importante, mas não é o mesmo que 'debugar'." },
        { texto: "Procurando e consertando 'bugs' (erros) no programa", correta: true, explicacao: "Exato! 'Debugar' é o processo de investigação para encontrar a causa de um erro e corrigi-lo." }
    ]
  }
];


// --------------------------------------------------------------------
// VARIÁVEIS GLOBAIS
// --------------------------------------------------------------------
// Estas são como "caixas" que guardam informações importantes para o quiz funcionar.
let perguntasDaRodada = []; // Guarda as 8 perguntas que foram sorteadas para o jogo atual.
let perguntaAtual = 0;      // Controla qual pergunta (de 0 a 7) estamos mostrando.
let acertos = 0;            // Conta o número de acertos da equipe.
let erros = 0;              // Conta o número de erros da equipe.
let intervaloTempo;         // Guarda a referência do nosso cronômetro para podermos pará-lo.
let tempoRestante = 30;     // Controla o tempo restante para responder.


// --------------------------------------------------------------------
// CONEXÃO COM OS ELEMENTOS HTML (DOM)
// --------------------------------------------------------------------
// Aqui, criamos "apelidos" para os elementos da nossa página HTML.
// Isso nos permite manipular (mudar texto, esconder, mostrar) esses elementos usando JavaScript.
const areaQuiz = document.getElementById("area-quiz");
const elementoPlacar = document.getElementById("placar");
const botaoProxima = document.getElementById("botao-proxima");
const botaoReiniciar = document.getElementById("botao-reiniciar");
const botaoOutro = document.getElementById("botao-outro");
const elementoTempo = document.getElementById("temporizador");
const botaoIniciar = document.getElementById("botao-iniciar");
const telaInicial = document.getElementById("tela-inicial");


// --------------------------------------------------------------------
// FUNÇÃO PARA EMBARALHAR O ARRAY DE PERGUNTAS
// --------------------------------------------------------------------
// Esta função pega nossa lista de 30 perguntas e mistura a ordem delas.
// É o que garante que cada desafio seja diferente do anterior.
function embaralharArray(array) {
  // O loop começa do último item e vai até o primeiro.
  for (let i = array.length - 1; i > 0; i--) {
    // Sorteia um índice aleatório entre 0 e o índice atual (i).
    const j = Math.floor(Math.random() * (i + 1));
    // Troca o elemento da posição atual com o da posição sorteada.
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// --------------------------------------------------------------------
// FUNÇÕES PRINCIPAIS DO QUIZ
// --------------------------------------------------------------------

/**
 * Atualiza o texto do placar na tela com os valores atuais de acertos e erros.
 */
function atualizarPlacar() {
  elementoPlacar.innerText = `Acertos: ${acertos} | Erros: ${erros}`;
}

/**
 * Inicia ou reinicia o cronômetro de 30 segundos para uma nova pergunta.
 */
function iniciarTemporizador() {
  tempoRestante = 30; // Reseta o tempo para 30.
  elementoTempo.innerText = tempoRestante; // Mostra "30" na tela.
  elementoTempo.classList.remove("urgente"); // Garante que o cronômetro não comece vermelho.
  
  clearInterval(intervaloTempo); // Limpa qualquer cronômetro anterior para evitar bugs.

  // Cria um novo cronômetro que executa a cada 1 segundo (1000 milissegundos).
  intervaloTempo = setInterval(() => {
    tempoRestante--; // Diminui 1 segundo do tempo.
    elementoTempo.innerText = tempoRestante; // Atualiza o número na tela.
    
    // Se o tempo estiver acabando (10s ou menos), adiciona a classe "urgente" para ficar vermelho.
    if (tempoRestante <= 10) {
      elementoTempo.classList.add("urgente");
    }
    
    // Se o tempo acabar (chegar a 0)...
    if (tempoRestante <= 0) {
      clearInterval(intervaloTempo); // Para o cronômetro.
      tempoEsgotado(); // Chama a função que avisa que o tempo esgotou.
    }
  }, 1000);
}

/**
 * É chamada quando o tempo para responder uma pergunta acaba.
 */
function tempoEsgotado() {
  // Desabilita todos os botões de resposta para que ninguém possa clicar.
  const botoes = document.querySelectorAll(".respostas button");
  botoes.forEach(botao => { botao.disabled = true; });

  // Encontra qual era a resposta correta na lista.
  const respostaCorreta = perguntasDaRodada[perguntaAtual].respostas.find(resposta => resposta.correta);
  
  // Destaca a resposta correta em verde e as erradas em vermelho.
  destacarRespostas(null, respostaCorreta);
  
  // Mostra a mensagem de tempo esgotado.
  const feedback = document.querySelector(".feedback");
  feedback.style.display = "block";
  feedback.className = "feedback errada";
  feedback.innerText = `Tempo esgotado! A resposta correta era: "${respostaCorreta.texto}". ${respostaCorreta.explicacao}`;
  
  erros++; // Adiciona 1 ao contador de erros.
  atualizarPlacar(); // Atualiza o placar na tela.
  
  botaoProxima.style.display = "block"; // Mostra o botão "Próxima Pergunta".
}

/**
 * Monta e exibe uma nova pergunta na tela.
 * @param {number} indice O número da pergunta (de 0 a 7) que será carregada.
 */
function carregarPergunta(indice) {
  areaQuiz.innerHTML = ""; // Limpa a área do quiz para a nova pergunta.
  
  const pergunta = perguntasDaRodada[indice]; // Pega a pergunta da rodada atual.
  
  // Cria os elementos HTML (pergunta, botões, etc.) dinamicamente com JavaScript.
  const elementoPergunta = document.createElement("div");
  elementoPergunta.classList.add("pergunta");
  elementoPergunta.innerText = `(${indice + 1}/${perguntasDaRodada.length}) ${pergunta.pergunta}`;

  const containerRespostas = document.createElement("div");
  containerRespostas.classList.add("respostas");

  const feedback = document.createElement("div");
  feedback.classList.add("feedback");

  // Cria um botão para cada resposta disponível.
  pergunta.respostas.forEach(resposta => {
    const botao = document.createElement("button");
    botao.innerText = resposta.texto;
    // Define o que acontece quando o botão é clicado.
    botao.onclick = () => {
      clearInterval(intervaloTempo); // Para o cronômetro.
      mostrarFeedback(feedback, resposta.correta, resposta.explicacao, resposta, pergunta.respostas);
    };
    containerRespostas.appendChild(botao);
  });

  // Adiciona os elementos criados na página.
  areaQuiz.appendChild(elementoPergunta);
  areaQuiz.appendChild(containerRespostas);
  areaQuiz.appendChild(feedback);

  iniciarTemporizador(); // Inicia o cronômetro para a nova pergunta.
  atualizarPlacar(); // Garante que o placar esteja atualizado.
  
  // Esconde os botões de controle que não devem aparecer agora.
  botaoProxima.style.display = "none";
  botaoReiniciar.style.display = "none";
  botaoOutro.style.display = "none";
}

/**
 * Muda a cor dos botões para verde (correta) e vermelho (incorreta) após uma resposta.
 * @param {object} respostaSelecionada A resposta que o usuário clicou.
 * @param {object} respostaCorreta A resposta correta da pergunta.
 */
function destacarRespostas(respostaSelecionada, respostaCorreta) {
  const botoes = document.querySelectorAll(".respostas button");
  const respostas = perguntasDaRodada[perguntaAtual].respostas;
  botoes.forEach((botao, index) => {
    botao.disabled = true; // Desabilita o botão.
    if (respostas[index].correta) {
      botao.classList.add("resposta-correta"); // Pinta de verde a correta.
    } else if (respostas[index] === respostaSelecionada) {
      botao.classList.add("resposta-incorreta"); // Pinta de vermelho a que foi clicada (se errada).
    }
  });
}

/**
 * Exibe a explicação da resposta (certa ou errada) e atualiza os contadores.
 */
function mostrarFeedback(feedback, correta, explicacao, respostaSelecionada, todasRespostas) {
  feedback.style.display = "block";
  feedback.innerText = explicacao;
  
  const respostaCorretaObj = todasRespostas.find(r => r.correta);
  destacarRespostas(respostaSelecionada, respostaCorretaObj);
  
  if (correta) {
    feedback.className = "feedback certa"; // Adiciona classe para estilizar o feedback de acerto.
    acertos++;
  } else {
    feedback.className = "feedback errada"; // Adiciona classe para estilizar o feedback de erro.
    erros++;
  }
  
  atualizarPlacar();
  botaoProxima.style.display = "block"; // Mostra o botão para ir para a próxima pergunta.
}

/**
 * É chamada no final das 8 perguntas para mostrar o resultado final da equipe.
 */
function finalizarQuiz() {
  clearInterval(intervaloTempo); // Para qualquer cronômetro que ainda esteja rodando.
  
  let mensagemFinal = "";
  // Define a mensagem de vitória ou derrota.
  if (acertos >= 5) {
    mensagemFinal = "Parabéns, equipe! Vocês mandaram muito bem e ganharam o prêmio! 🥳";
  } else {
    mensagemFinal = "Quase lá! Foi um ótimo esforço em equipe. Continuem explorando o mundo da TI!";
  }
  
  // Monta a tela final com o resultado.
  areaQuiz.innerHTML = `
    <div class="tela-inicial">
      <h2>🏆 Desafio Concluído! 🏆</h2>
      <h3>Resultado Final da Equipe:</h3>
      <p>Acertos: ${acertos} de ${perguntasDaRodada.length}</p>
      <p>Erros: ${erros}</p>
      <p style="font-weight: bold; font-size: 1.1rem;">${mensagemFinal}</p>
    </div>
  `;
  
  botaoProxima.style.display = "none";
  botaoReiniciar.style.display = "block";
  botaoOutro.style.display = "none";
}


// --------------------------------------------------------------------
// EVENTOS DOS BOTÕES (O QUE ACONTECE QUANDO CLICAMOS NELES)
// --------------------------------------------------------------------

// Quando o botão "Próxima Pergunta" é clicado:
botaoProxima.addEventListener("click", () => {
  perguntaAtual++; // Avança para a próxima pergunta.
  // Se ainda não chegamos na última pergunta...
  if (perguntaAtual < perguntasDaRodada.length) {
    carregarPergunta(perguntaAtual); // Carrega a próxima.
  } else {
    finalizarQuiz(); // Senão, finaliza o quiz.
  }
});

// Quando o botão "Novo Desafio" (Reiniciar) é clicado:
botaoReiniciar.addEventListener("click", () => {
  // Simplesmente volta para a tela inicial.
  telaInicial.style.display = "block";
  areaQuiz.innerHTML = ""; 
  areaQuiz.appendChild(telaInicial);
});

// Quando o botão "Outro Quiz" é clicado:
botaoOutro.addEventListener("click", () => {
  alert("Em breve teremos mais quizzes disponíveis!");
});

// Quando o botão "Iniciar Desafio" é clicado:
botaoIniciar.addEventListener("click", () => {
  telaInicial.style.display = "none"; // Esconde a tela inicial.
  
  // --- A MÁGICA FINAL ACONTECE AQUI ---
  // 1. Embaralha todo o nosso banco de 30 perguntas.
  const perguntasEmbaralhadas = embaralharArray([...perguntas]);
  
  // 2. Pega as 8 primeiras perguntas da lista embaralhada para criar o desafio da rodada.
  perguntasDaRodada = perguntasEmbaralhadas.slice(0, 8);
  
  // 3. Reseta os contadores para um novo jogo.
  perguntaAtual = 0;
  acertos = 0;
  erros = 0;
  
  // 4. Carrega a primeira pergunta do novo desafio.
  carregarPergunta(perguntaAtual);
});


// --------------------------------------------------------------------
// ESTADO INICIAL DO QUIZ
// --------------------------------------------------------------------
// Garante que, ao carregar a página, os botões de controle estejam escondidos.
botaoProxima.style.display = "none";
botaoReiniciar.style.display = "none";
botaoOutro.style.display = "none";