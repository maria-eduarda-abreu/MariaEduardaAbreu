// Acessando as funções createApp e ref do Vue.js
const { createApp, ref } = Vue;

// Criando a aplicação Vue
createApp({
    // A função setup é usada para definir o estado (dados reativos) e métodos
    setup() {
        // Dados da Maria Eduarda, definidos como reativos usando ref()
        const nome = ref('Maria Eduarda Abreu');
        const cargo = ref('Desenvolvedora de Software Fullstack Jr.');
        const descricao = ref('Apaixonada por criar soluções inovadoras e aprender novas tecnologias. Minha experiência abrange desde o front-end reativo com frameworks (como o próprio Vue.js) até o back-end, focando em performance e arquitetura escalável.');

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