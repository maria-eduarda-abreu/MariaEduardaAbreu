// page controller

import { createApp, ref, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
// ADICIONADO: articlesData na importação
import { 
    skillsData, 
    projectsData, 
    typingPhrases, 
    profileData, 
    uiLabels, 
    articlesData 
} from './data.js';

// Função de Efeito de Digitação
function useTypingEffect(phrasesByLang, currentLangRef) {
    const text = computed(() => {
        return phrasesByLang[currentLangRef.value] ? phrasesByLang[currentLangRef.value][0] : "";
    });
    return { text };
}

const app = createApp({
    setup() {
        const currentLang = ref('pt');
        const isLangMenuOpen = ref(false);

        // Configuração de Idiomas
        const availableLanguages = [
            { code: 'pt', label: 'PT', flag: '🇧🇷' },
            { code: 'en', label: 'EN', flag: '🇺🇸' },
            { code: 'es', label: 'ES', flag: '🇪🇸' },
            { code: 'fr', label: 'FR', flag: '🇫🇷' },
            { code: 'it', label: 'IT', flag: '🇮🇹' }
        ];

        const currentLangObj = computed(() => 
            availableLanguages.find(l => l.code === currentLang.value)
        );

        const toggleLangMenu = () => isLangMenuOpen.value = !isLangMenuOpen.value;
        const setLanguage = (langCode) => {
            currentLang.value = langCode;
            isLangMenuOpen.value = false;
        };

        // Dados Reativos
        const ui = computed(() => uiLabels[currentLang.value]);
        const saudacao = computed(() => profileData.saudacao[currentLang.value]);
        const nome = ref(profileData.nome);
        const cargo = computed(() => profileData.cargo[currentLang.value]);
        const descricao = computed(() => profileData.descricao[currentLang.value]);
        
        const projects = computed(() => {
            return projectsData.map(proj => ({
                ...proj,
                description: proj.description[currentLang.value]
            }));
        });

        const skills = ref(skillsData);

        const habilidades = computed(() => {
            return profileData.habilidades[currentLang.value];
        });

        const projetos = computed(() => {
            return profileData.projetos[currentLang.value];
        });

        const contact = computed(() => {
            return profileData.contact[currentLang.value];
        });
        
        // ADICIONADO: Artigos agora disponíveis para todas as páginas
        const articles = ref(articlesData);

        const { text: typingText } = useTypingEffect(typingPhrases, currentLang);

        // Lógica do Menu Mobile (Agora funciona em qualquer página que use este app.js)
        const isMenuOpen = ref(false);
        const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
        const closeMenu = () => isMenuOpen.value = false;

        return {
            currentLang,
            currentLangObj,
            availableLanguages,
            isLangMenuOpen,
            toggleLangMenu,
            setLanguage,
            ui, 
            saudacao,
            nome, 
            cargo, 
            descricao, 
            habilidades,
            projetos, 
            projects,
            contact,
            skills, 
            articles, // <--- Importante para o Blog
            typingText,
            isMenuOpen, 
            toggleMenu, 
            closeMenu
        };
    }
});

// Monta o app no elemento #app (seja no index.html ou blog.html)
if (document.getElementById('app')) {
    app.mount('#app');
}