Esse é o meu portfólio profissional e blog que eu uso para compartilhar alguns conhecimentos, ele é uma Single Page Application (SPA). O objetivo principal foi criar uma aplicação leve, performática e de fácil manutenção, sem a necessidade de ferramentas de build complexas (como Webpack ou Vite), utilizando o poder nativo dos ES Modules modernos dos navegadores em conjunto com Vue.js 3.

A aplicação destaca-se pela implementação manual de um sistema de Internacionalização (i18n), permitindo a troca dinâmica de idiomas (PT, EN, ES, FR, IT) sem recarregamento da página.

### Tecnologias Utilizadas

***Frontend Framework:*** Vue.js 3 (via ESM Browser build).

***Linguagens:*** HTML5 Semântico, CSS3 Moderno, JavaScript (ES6+).

***Estilização:*** CSS Nativo (Custom Properties/Variables, Flexbox, Grid Layout, Animações CSS).

***Fontes:*** Custom Font-face loading (Milker, Poppins).

***Design Pattern:*** Separação de Conceitos (Model-View-ViewModel adaptado).

#### Arquitetura e Estrutura de Código

O projeto segue uma arquitetura limpa, separando a lógica de negócios, os dados e a camada de apresentação.

### ***Estrutura de Pastas***

Bash
/
├── index.html          # Ponto de entrada (View - Portfólio)
├── blog.html           # Página secundária (View - Blog)
└── src/
    ├── js/
    │   ├── app.js      # Controller Principal (Lógica Vue.js)
    │   └── data.js     # Data Layer (Repositório de textos e traduções)
    ├── css/
    │   ├── style.css   # Estilos Globais e Responsividade
    │   └── fonts/      # Arquivos de fonte locais (.otf, .ttf)
    ├── docs/           # Documentos estáticos (CV)
    └── img/            # Assets de imagem otimizados

### Decisões Técnicas

***Vue.js via ES Modules:***

Optei por importar o Vue diretamente via import { createApp } ... from 'url' no navegador. Isso elimina a necessidade de node_modules gigantescos para um projeto deste escopo, mantendo o código transparente e próximo da plataforma web nativa.

***Centralização de Dados (data.js):***

Todo o conteúdo textual (títulos, descrições, projetos, habilidades) foi abstraído para o arquivo data.js.

Benefício: Atualizar um texto ou adicionar um projeto não requer mexer na lógica do componente ou no HTML. Funciona como um "banco de dados" local.

***Reatividade e Estado (app.js):***

Uso da Composition API do Vue (setup, ref, computed).

Computed Properties foram essenciais para o sistema de tradução. Ao alterar a variável reativa currentLang, todas as partes da interface (Menu, Textos, Descrições) são recalculadas automaticamente.

***CSS Moderno:***

Uso de Variáveis CSS (:root) para facilitar a manutenção do tema de cores (Roxo/Magenta).

***Glassmorphism:*** Uso de backdrop-filter: blur() no menu e cabeçalho.

***Responsividade:*** Design fluido utilizando unidades relativas e Media Queries para adaptação perfeita em Mobile, Tablet e Desktop.

### Funcionalidades Principais

1. Sistema de Internacionalização (i18n)
Suporte completo para 5 idiomas. A lógica utiliza um objeto de dicionário no data.js e propriedades computadas no Vue para renderizar o idioma correto instantaneamente.

Idiomas: Português (Padrão), Inglês, Espanhol, Francês, Italiano.

2. Efeito "Typewriter" (Máquina de Escrever)
Um hook customizado (useTypingEffect) foi criado para simular a digitação de frases na tela inicial. Ele respeita o idioma selecionado, trocando as frases dinamicamente.

3. Navegação e Menu Mobile
Menu responsivo tipo "Gaveta" (Drawer) com animações suaves de transição.

Detector de clique externo e fechamento automático ao selecionar um link.

Scroll suave (scroll-behavior: smooth) para navegação entre seções.

4. Blog Dinâmico
Renderização de artigos baseada em lista de objetos JSON. Permite escalabilidade fácil para adicionar novos posts apenas inserindo dados no array articlesData.

### Design System

O projeto visual segue uma identidade "Dark Mode" moderna e profissional.

***Paleta de Cores:***

Base: #121212 (Preto Profundo)

Destaque (Primary): #8A2BE2 (Blue Violet / Roxo Magenta)

Texto: #f8f5f0 (Off-white)

***Tipografia:***

Títulos/Destaques: Milker (Tipografia Display com personalidade).

Corpo/Leitura: Poppins (Sans-serif geométrica para alta legibilidade).


### 👩‍💻 Autora
Maria Eduarda Abreu - Desenvolvedora Fullstack Jr.

