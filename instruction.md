solucoes-obi-ifpar-front
└── src                     # Código fonte da aplicação
    ├── app                 # Inicialização e Configurações Globais da App
    │   ├── providers       # Context Providers (Theme, Notification, Loading, Main) - nome de arquivos: função + Provider
    │   ├── store           # estado global da aplicação (hooks e contextos) - nome de arquivos: função + Store
    │   └── styles          # CSS global, variáveis e design tokens
    ├── assets              # Arquivos estáticos globais (imagens, fontes, ícones de fallback)
    │   └── images          # Imagens estáticas globais
    │       ├── credits     # Imagens relacionadas à seção de créditos
    │       └── others      # Outras imagens estáticas globais
    ├── components          # Componentes reutilizáveis em toda a aplicação
    │   ├── layout          # Componentes de layout (Topbar, Footer, Notification, Loading)
    │   └── ui              # Componentes de interface do usuário (botões, inputs, modais, etc.)
    ├── features            # Funcionalidades específicas da aplicação, organizadas por área/feature
    │   ├── creditsFeat     # Funcionalidade relacionada à seção de créditos - nome de pasta: função + Feat
    │   │   └── components  # Componentes específicos da seção de créditos
    │   ├── landingFeat     
    │   │   └── components  
    │   └── problemsFeat    
    │       ├── components  
    │       │   ├── filter  
    │       │   ├── problem 
    │       │   └── sidebar 
    │       └── layout      # Layouts específicos da seção de problemas
    ├── hooks               # Hooks personalizados reutilizáveis
    └── pages               # Páginas relacionadas a rotas (cada pasta representa uma rota/URL)
        ├── adminPage       # Página administrativa (ex: gerenciamento de usuários, problemas, etc.)
        ├── creditsPage     # Página de créditos (ex: lista de contribuidores, informações sobre o projeto)
        ├── landingPage     # Página inicial/landing page (ex: seções de apresentação, funcionalidades, etc.)
        └── problemsPage    # Página de problemas (ex: lista de problemas, filtros, etc.)