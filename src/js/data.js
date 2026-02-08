// src/js/data.js

// 1. Frases do efeito de digitação
export const typingPhrases = [
    'Transformo ideias em soluções digitais.', // Corrigi o "p" solto
    'Transformo ideias em soluções digitais eficientes.' // Corrigi "eficiêntes" (sem acento)
];

// 2. Dados Pessoais
export const profileData = {
    nome: 'Maria Eduarda Abreu',
    cargo: 'Desenvolvedora de Software Fullstack Jr.',
    descricao: 'Sou estudante do 3º semestre de Análise e Desenvolvimento de Sistemas na FIAP. Meu foco é criar soluções digitais que unam design, funcionalidades e experiência do usuário para gerar valor real aos clientes.'
};

// 3. Lista de Habilidades (Corrigi os nomes que estavam errados no HTML original)
export const skillsData = [
    { name: 'HTML', icon: 'src/img/icons/html.png' },
    { name: 'CSS', icon: 'src/img/icons/css.png' },
    { name: 'JavaScript', icon: 'src/img/icons/javascript.png' },
    { name: 'Python', icon: 'src/img/icons/python.png' },
    { name: 'Java', icon: 'src/img/icons/java.png' },
    { name: 'Kotlin', icon: 'src/img/icons/kotiln.png' }, // Mantive o nome do arquivo original (kotiln.png)
    { name: 'Spring Boot', icon: 'src/img/icons/springboot.png' },
    { name: 'Angular', icon: 'src/img/icons/angular.png' },
    { name: 'Vue.js', icon: 'src/img/icons/vue.png' },
    { name: 'Node.js', icon: 'src/img/icons/node.png' },
    { name: 'React.js', icon: 'src/img/icons/react.png' },
    { name: 'Oracle PL/SQL', icon: 'src/img/icons/orcl.png' },
    { name: 'Git', icon: 'src/img/icons/git.png' },
    { name: 'AWS', icon: 'src/img/icons/aws.png' },
    { name: 'Figma', icon: 'src/img/icons/figma.png' },
    { name: 'InDesign', icon: 'src/img/icons/indesign.png' },
    { name: 'Illustrator', icon: 'src/img/icons/illustrator.png' }, // Corrigido (antes estava "InDesign")
    { name: 'Photoshop', icon: 'src/img/icons/photoshop.png' }    // Corrigido (antes estava "InDesign")
];

// 4. Lista de Projetos
export const projectsData = [
    {
        title: 'OrganizeDin - App Gestão Financeira',
        description: 'Desenvolvimento full-stack de um sistema que auxilia qualquer pessoa na gestão financeira. Utiliza tecnologias como Java, Oracle DB, Spring Boot, JS, HTML e CSS.',
        image: 'src/img/project/projectorganizedin.png',
        codeLink: 'https://github.com/maria-eduarda-abreu/OrganizeDin',
        demoLink: 'https://www.figma.com/design/DJ0IvEIKEQy1O9I23S00Yv/OrganizeDIn?node-id=0-1&t=lK5HzBra0ayEvJne-1' 
    }
    // Para adicionar mais projetos, basta copiar o bloco acima e colar aqui com vírgula
];

// 5. Artigos do Blog (Exemplo Inicial)
export const articlesData = [
    {
        id: 1,
        title: "Iniciando com Estrutura de Dados",
        category: "Fundamentos",
        date: "06/02/2026",
        summary: "Um resumo sobre Arrays, Pilhas e Filas e por que a organização da memória importa.",
        link: "#", // Aqui você colocará o link para o artigo completo no futuro
        image: null // Opcional
    },
    {
        id: 2,
        title: "Minha Jornada com .NET e Arquitetura",
        category: "Backend",
        date: "05/02/2026",
        summary: "Como estou estruturando o projeto 'netech' usando MVVM e testes unitários com xUnit.",
        link: "#",
        image: null
    }
];