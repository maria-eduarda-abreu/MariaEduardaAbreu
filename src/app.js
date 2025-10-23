// Acessando as funções createApp e ref do Vue.js
const { createApp, ref } = Vue;

// Criando a aplicação Vue
createApp({
    // A função setup é usada para definir o estado (dados reativos) e métodos
    setup() {
        // Dados da Maria Eduarda, definidos como reativos usando ref()
        const nome = ref('Maria Eduarda Abreu');
        const cargo = ref('Desenvolvedora de Software Fullstack Jr.');
        const descricao = ref('Sou estudante do 3 semetre de Análise e Desenvolvimento de Sistemas na FIAP. Meu foco é criar soluções digitais que unam design, funcionalidade e experiência do usuáriopara gerar valor real aos clientes.');

        // Se você quiser adicionar lógica, como um método:
        const handleClickProjetos = () => {
            alert('Em breve, a seção de Projetos estará disponível! 😉');
        };

        // Retorna os dados e métodos que estarão disponíveis no template HTML
        return {
            nome,
            cargo,
            descricao,
            handleClickProjetos
        };
    }
}).mount('#app'); // Monta a aplicação Vue no elemento com id="app"