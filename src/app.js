

// Acessando as funções createApp e ref do Vue.js
const { createApp, ref } = Vue;

// Novo array com as frases para o efeito de digitação
const phrases = [
    'Transformo ideias em soluções digitais p',
    'Transformo ideias em soluções digitais incríveis'
];

// Função principal de digitação
function useTypingEffect(phrases) {
    const text = ref('');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeSpeed = 70; // Velocidade de digitação (ms)
    const deleteSpeed = 50; // Velocidade de exclusão (ms)
    const pauseBeforeDelete = 1500; // Pausa antes de excluir (ms)
    const pauseBeforeType = 500; // Pausa antes de digitar a próxima frase (ms)

    const type = () => {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            // Lógica de Digitação
            text.value = currentPhrase.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, pauseBeforeDelete);
            } else {
                setTimeout(type, typeSpeed);
            }
        } else {
            // Lógica de Exclusão
            text.value = currentPhrase.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; // Loop para a próxima frase
                setTimeout(type, pauseBeforeType);
            } else {
                setTimeout(type, deleteSpeed);
            }
        }
    };

    // Inicia a animação assim que o componente é montado
    Vue.onMounted(() => {
        type();
    });

    return { text };
}


// Criando a aplicação Vue
createApp({
    // A função setup é usada para definir o estado (dados reativos) e métodos
    setup() {
        // Dados da Maria Eduarda
        const nome = ref('Maria Eduarda Abreu');
        const cargo = ref('Desenvolvedora de Software Fullstack Jr.');
        const descricao = ref('Sou estudante do 3 semetre de Análise e Desenvolvimento de Sistemas na FIAP. Meu foco é criar soluções digitais que unam design, funcionalidade e experiência do usuáriopara gerar valor real aos clientes.');

        // Novo: Efeito de digitação
        const { text: typingText } = useTypingEffect(phrases);

        const handleClickProjetos = () => {
            alert('Em breve, a seção de Projetos estará disponível! 😉');
        };

        // Retorna os dados e métodos que estarão disponíveis no template HTML
        return {
            nome,
            cargo,
            descricao,
            handleClickProjetos,
            typingText // Exporta o texto de digitação
        };
    }
}).mount('#app'); // Monta a aplicação Vue no elemento com id="app"