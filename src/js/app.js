// src/js/app.js

// Importando Vue via ES Module (necessário para type="module")
import { createApp, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// Importando nossos dados (O Model)
import { 
    skillsData, 
    projectsData, 
    typingPhrases, 
    profileData 
} from './data.js';

// Função de Efeito de Digitação (Lógica isolada)
function useTypingEffect(phrases) {
    const text = ref('');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeSpeed = 70;
    const deleteSpeed = 50;
    const pauseBeforeDelete = 1500;
    const pauseBeforeType = 500;

    const type = () => {
        const currentPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            text.value = currentPhrase.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, pauseBeforeDelete);
            } else {
                setTimeout(type, typeSpeed);
            }
        } else {
            text.value = currentPhrase.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, pauseBeforeType);
            } else {
                setTimeout(type, deleteSpeed);
            }
        }
    };

    onMounted(() => {
        if (phrases.length > 0) type();
    });

    return { text };
}

// Criação da Aplicação Principal
const app = createApp({
    setup() {
        // Dados Reativos
        const nome = ref(profileData.nome);
        const cargo = ref(profileData.cargo);
        const descricao = ref(profileData.descricao);
        
        // Importando as listas do data.js
        const skills = ref(skillsData);
        const projects = ref(projectsData);

        // Inicializando o efeito de digitação
        const { text: typingText } = useTypingEffect(typingPhrases);

        // Lógica do Menu Mobile
        const isMenuOpen = ref(false);

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        // Função para fechar o menu ao clicar em um link (opcional, mas recomendado)
        const closeMenu = () => {
            isMenuOpen.value = false;
        };

        // Retorno para o HTML
        return {
            nome,
            cargo,
            descricao,
            skills,
            projects,
            typingText,    // <--- ADICIONEI VÍRGULA AQUI
            isMenuOpen,    // <--- ADICIONEI VÍRGULA AQUI
            toggleMenu,    // <--- ADICIONEI VÍRGULA AQUI
            closeMenu      // <--- ADICIONEI VÍRGULA AQUI
        };
    }
});

// Verifica se existe o elemento #app antes de montar (evita erro na página de blog)
if (document.getElementById('app')) {
    app.mount('#app');
}