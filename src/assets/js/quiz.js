
// Array de objetos contendo as perguntas do quiz, opções e a resposta correta
const questions = [
    {
        question: "Qual o principal problema que a Iniciativa NIMBOS busca resolver?",
        options: [
            "Aumento do tráfego urbano",
            "Entupimento de bueiros e enchentes",
            "Poluição do ar nas cidades",
            "Falta de áreas verdes"
        ],
        correctAnswer: "Entupimento de bueiros e enchentes"
    },
    {
        question: "Quais tecnologias são utilizadas nos bueiros inteligentes do NIMBOS?",
        options: [
            "GPS e câmeras de segurança",
            "Sensores Arduino e conectividade IoT",
            "Drones e inteligência artificial",
            "Redes sociais para alertas"
        ],
        correctAnswer: "Sensores Arduino e conectividade IoT"
    },
    {
        question: "Qual o principal benefício da manutenção preditiva oferecida pelo NIMBOS?",
        options: [
            "Aumento da velocidade da internet",
            "Redução do número de acidentes de trânsito",
            "Prevenção de enchentes e economia de custos de emergência",
            "Melhora na qualidade da água potável"
        ],
        correctAnswer: "Prevenção de enchentes e economia de custos de emergência"
    },
    {
        question: "Quem é o público-alvo principal da Iniciativa NIMBOS?",
        options: [
            "Pessoas físicas e residências",
            "Grandes empresas de tecnologia",
            "Cidades e prefeituras",
            "Fazendeiros e agricultores"
        ],
        correctAnswer: "Cidades e prefeituras"
    },
    {
        question: "O que o termo 'IoT' significa no contexto do projeto NIMBOS?",
        options: [
            "Internet de Objeto",
            "Internet das Operações",
            "Internet das Coisas",
            "Integração Online de Tarefas"
        ],
        correctAnswer: "Internet das Coisas"
    },
    {
        question: "Como os sensores ultrassônicos auxiliam no monitoramento dos bueiros?",
        options: [
            "Medem a temperatura do ar",
            "Detectam a presença de poluentes químicos",
            "Medem o nível de água e detritos com precisão",
            "Registram a intensidade da luz solar"
        ],
        correctAnswer: "Medem o nível de água e detritos com precisão"
    },
    {
        question: "Qual a vantagem da alimentação por energia solar nos dispositivos NIMBOS?",
        options: [
            "Aumenta a velocidade de processamento dos dados",
            "Reduz a necessidade de manutenção frequente",
            "Oferece alimentação sustentável e autônoma",
            "Melhora a qualidade da transmissão de dados"
        ],
        correctAnswer: "Oferece alimentação sustentável e autônoma"
    },
    {
        question: "A conectividade LoRa é utilizada para que propósito no projeto?",
        options: [
            "Conectar-se diretamente a smartphones",
            "Realizar chamadas de emergência",
            "Transmissão de dados confiável a longas distâncias",
            "Controlar o tráfego de veículos"
        ],
        correctAnswer: "Transmissão de dados confiável a longas distâncias"
    },
    {
        question: "Qual a finalidade de enviar alertas automáticos para equipes municipais?",
        options: [
            "Informar sobre eventos culturais",
            "Promover novos produtos tecnológicos",
            "Permitir ação preventiva antes dos alagamentos",
            "Gerenciar o sistema de iluminação pública"
        ],
        correctAnswer: "Permitir ação preventiva antes dos alagamentos"
    },
    {
        question: "A Iniciativa NIMBOS busca transformar sistemas de drenagem urbana de que forma?",
        options: [
            "Tornando-os mais estéticos",
            "Apenas aumentando a capacidade de vazão",
            "Em redes inteligentes monitoradas constantemente",
            "Convertendo-os em áreas de lazer"
        ],
        correctAnswer: "Em redes inteligentes monitoradas constantemente"
    }
];

// Variáveis para controlar o estado do quiz
let currentQuestionIndex = 0; // Índice da pergunta atual
let score = 0;                // Pontuação do usuário
let selectedOption = null;    // Opção selecionada pelo usuário na pergunta atual

// Referências aos elementos HTML
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizSubmitButton = document.getElementById('quiz-submit');
const quizResult = document.getElementById('quiz-result');
const quizContainer = document.getElementById('quiz-container');

/**
 * Exibe a pergunta atual e suas opções na interface.
 */
function displayQuestion() {
    // Esconde o resultado e o botão de "Reiniciar Quiz" se estiverem visíveis
    quizResult.innerHTML = '';
    quizSubmitButton.style.display = 'block'; // Mostra o botão de submissão
    quizSubmitButton.textContent = 'Próxima Pergunta'; // Define o texto padrão do botão

    // Pega a pergunta atual do array `questions`
    const questionData = questions[currentQuestionIndex];
    quizQuestion.textContent = questionData.question; // Atualiza o texto da pergunta

    quizOptions.innerHTML = ''; // Limpa as opções anteriores

    // Cria botões para cada opção de resposta
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('quiz-option-button'); // Adiciona a classe CSS
        button.addEventListener('click', () => selectOption(button, option)); // Adiciona evento de clique
        quizOptions.appendChild(button); // Adiciona o botão ao container de opções
    });

    selectedOption = null; // Reseta a opção selecionada para a nova pergunta
}

/**
 * Lida com a seleção de uma opção.
 * Adiciona a classe 'selected' ao botão clicado e remove de outros.
 * @param {HTMLButtonElement} button - O botão da opção clicada.
 * @param {string} optionText - O texto da opção selecionada.
 */
function selectOption(button, optionText) {
    // Remove a classe 'selected' de todos os botões de opção
    document.querySelectorAll('.quiz-option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected'); // Adiciona a classe 'selected' ao botão clicado
    selectedOption = optionText; // Armazena a opção selecionada
}

/**
 * Verifica a resposta selecionada e avança para a próxima pergunta ou exibe o resultado final.
 */
function checkAnswer() {
    if (selectedOption === null) {
        alert("Por favor, selecione uma opção antes de continuar!");
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.quiz-option-button');

    // Desabilita os botões para evitar múltiplas seleções
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.correctAnswer) {
            button.classList.add('correct'); // Marca a resposta correta
        }
        if (button.textContent === selectedOption && selectedOption !== currentQuestion.correctAnswer) {
            button.classList.add('wrong'); // Marca a resposta errada se o usuário errou
        }
    });

    // Verifica se a resposta está correta e atualiza a pontuação
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    // Altera o texto do botão para "Próxima Pergunta" ou "Ver Resultado"
    if (currentQuestionIndex < questions.length - 1) {
        quizSubmitButton.textContent = 'Próxima Pergunta';
    } else {
        quizSubmitButton.textContent = 'Ver Resultado';
    }

    // Adiciona um pequeno atraso antes de ir para a próxima pergunta/resultado
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(); // Exibe a próxima pergunta
        } else {
            showResult(); // Exibe o resultado final
        }
    }, 1500); // 1.5 segundos de atraso
}

/**
 * Exibe o resultado final do quiz, com a pontuação e a opção de reiniciar.
 */
function showResult() {
    quizQuestion.textContent = ''; // Limpa a pergunta
    quizOptions.innerHTML = '';    // Limpa as opções
    quizSubmitButton.style.display = 'none'; // Esconde o botão de submissão

    // Exibe a pontuação final
    quizResult.innerHTML = `
        <p>Você acertou ${score} de ${questions.length} perguntas!</p>
        <button id="restart-quiz-button">Reiniciar Quiz</button>
    `;

    // Adiciona evento de clique ao botão de reiniciar
    document.getElementById('restart-quiz-button').addEventListener('click', restartQuiz);
}

/**
 * Reinicia o quiz, resetando a pontuação e o índice da pergunta.
 */
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    quizResult.innerHTML = ''; // Limpa o resultado
    displayQuestion(); // Começa o quiz novamente
}

// Evento de clique no botão de submissão
quizSubmitButton.addEventListener('click', checkAnswer);

// Inicializa o quiz ao carregar a página
document.addEventListener('DOMContentLoaded', displayQuestion);