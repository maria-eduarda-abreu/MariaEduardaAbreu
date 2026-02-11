// Textos da Interface (Menu, Títulos, Botões)
export const uiLabels = {
    pt: {
        menu_home: "Início", menu_about: "Sobre", menu_skills: "Habilidades", menu_projects: "Projetos", menu_blog: "Blog", menu_contact: "Contato",
        btn_download: "Baixar CV", title_skills: "Habilidades", title_projects: "Projetos", btn_code: "Ver Código", btn_demo: "Demo Live",
        title_contact: "Entre em Contato", msg_contact: "Mande uma mensagem e vamos tirar seu projeto do papel!", btn_send: "Enviar Mensagem", footer_msg: "Desenvolvido por Maria Eduarda"
    },
    en: {
        menu_home: "Home", menu_about: "About", menu_skills: "Skills", menu_projects: "Projects", menu_blog: "Blog", menu_contact: "Contact",
        btn_download: "Download CV", title_skills: "Skills", title_projects: "Projects", btn_code: "View Code", btn_demo: "Live Demo",
        title_contact: "Get in Touch", msg_contact: "Send a message and let's bring your project to life!", btn_send: "Send Message", footer_msg: "Developed by Maria Eduarda"
    },
    es: {
        menu_home: "Inicio", menu_about: "Sobre Mí", menu_skills: "Habilidades", menu_projects: "Proyectos", menu_blog: "Blog", menu_contact: "Contacto",
        btn_download: "Descargar CV", title_skills: "Habilidades", title_projects: "Proyectos", btn_code: "Ver Código", btn_demo: "Demo en Vivo",
        title_contact: "Contáctame", msg_contact: "¡Envía un mensaje y hagamos realidad tu proyecto!", btn_send: "Enviar Mensaje", footer_msg: "Desarrollado por Maria Eduarda"
    },
    fr: {
        menu_home: "Accueil", menu_about: "À propos", menu_skills: "Compétences", menu_projects: "Projets", menu_blog: "Blog", menu_contact: "Contact",
        btn_download: "Télécharger CV", title_skills: "Compétences", title_projects: "Projets", btn_code: "Voir le Code", btn_demo: "Démo Live",
        title_contact: "Contactez-moi", msg_contact: "Envoyez un message et donnons vie à votre projet !", btn_send: "Envoyer Message", footer_msg: "Développé par Maria Eduarda"
    },
    it: {
        menu_home: "Home", menu_about: "Chi Sono", menu_skills: "Competenze", menu_projects: "Progetti", menu_blog: "Blog", menu_contact: "Contatti",
        btn_download: "Scarica CV", title_skills: "Competenze", title_projects: "Progetti", btn_code: "Vedi Codice", btn_demo: "Demo Live",
        title_contact: "Contattami", msg_contact: "Invia un messaggio e realizziamo il tuo progetto!", btn_send: "Invia Messaggio", footer_msg: "Sviluppato da Maria Eduarda"
    }
};

// 2. Frases do efeito de digitação
export const typingPhrases = {
    pt: ['Transformo ideias em soluções digitais.', 'Desenvolvedora Fullstack.'],
    en: ['I turn ideas into digital solutions.', 'Fullstack Developer.'],
    es: ['Transformo ideas en soluciones digitales.', 'Desarrolladora Fullstack.'],
    fr: ['Je transforme des idées en solutions numériques.', 'Développeuse Fullstack.'],
    it: ['Trasformo idee in soluzioni digitali.', 'Sviluppatrice Fullstack.']
};

// 3. Dados Pessoais
export const profileData = {
    
    nome: 'Maria eduarda abreu',
    saudacao: {
        pt: 'Olá, eu sou a',
        en: 'Hello, I am',
        es: 'Hola, soy yo',
        fr: 'Bonjour, je suis',
        it: 'Ciao, sono'
    },
    cargo: {
        pt: 'Desenvolvedora de Software Fullstack Jr.',
        en: 'Jr. Fullstack Software Developer',
        es: 'Desarrolladora de Software Fullstack Jr.',
        fr: 'Développeuse Logiciel Fullstack Jr.',
        it: 'Sviluppatrice Software Fullstack Jr.'
    },
    descricao: {
        pt: 'Meu foco é criar soluções digitais que transformam ideias em realidade.',
        en: 'My focus is on creating digital solutions that transform ideas into reality.',
        es: 'Mi enfoque está en crear soluciones digitales que transformen las ideas en realidad.',
        fr: 'Mon objectif est de créer des solutions numériques qui transforment les idées en réalité.',
        it: 'Il mio obiettivo è creare soluzioni digitali che trasformino le idee in realtà.'
    }
};

// 4. Lista de Habilidades (Inalterada - nomes técnicos são universais)
export const skillsData = [
    /*
    {
        habilidades: {
        pt: 'Habilidades',
        en: 'Skills',
        es: 'Habilidades',
        fr: 'Compétences',
        it: 'Competenze'
        },
    },
*/
    { name: 'HTML', icon: 'src/img/icons/html.png' },
    { name: 'CSS', icon: 'src/img/icons/css.png' },
    { name: 'JavaScript', icon: 'src/img/icons/javascript.png' },
    { name: 'Python', icon: 'src/img/icons/python.png' },
    { name: 'Java', icon: 'src/img/icons/java.png' },
    { name: 'Kotlin', icon: 'src/img/icons/kotiln.png' },
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
    { name: 'Illustrator', icon: 'src/img/icons/illustrator.png' },
    { name: 'Photoshop', icon: 'src/img/icons/photoshop.png' }
];

// 5. Projetos
export const projectsData = [
    {
        title: 'OrganizeDin - App Gestão Financeira',
        description: {
            pt: 'Desenvolvimento full-stack de um sistema que auxilia na gestão financeira.',
            en: 'Full-stack development of a financial management system.',
            es: 'Desarrollo full-stack de un sistema de gestión financiera.',
            fr: 'Développement full-stack d\'un système de gestion financière.',
            it: 'Sviluppo full-stack di un sistema di gestione finanziaria.'
        },
        image: 'src/img/project/projectorganizedin.png',
        codeLink: 'https://github.com/maria-eduarda-abreu/OrganizeDin',
        demoLink: 'https://www.figma.com/design/DJ0IvEIKEQy1O9I23S00Yv/OrganizeDIn?node-id=0-1&t=lK5HzBra0ayEvJne-1' 
    }
    // src/js/data.js (Adicione isso no final do arquivo)
];
// 6. Artigos do Blog (Isso estava faltando!)
export const articlesData = [
    {
        id: 1,
        title: "Iniciando com Estrutura de Dados",
        category: "Fundamentos",
        date: "06/02/2026",
        summary: "Um resumo sobre Arrays, Pilhas e Filas e por que a organização da memória importa.",
        link: "#", // Link futuro
        image: null
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