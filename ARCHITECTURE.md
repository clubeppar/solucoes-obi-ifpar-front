# Estrutura de Pastas

```text
solucoes-obi-ifpar-front/
└── src/                        # Código-fonte da aplicação
    ├── app/                    # Inicialização e configurações globais
    ├── assets/                 # Arquivos estáticos globais
    │   └── images/             # Imagens estáticas globais
    │       ├── credits/        # Imagens da seção de créditos
    │       └── others/         # Outras imagens
    ├── components/             # Componentes reutilizáveis
    │   ├── layout/             # Componentes de layout
    │   └── ui/                 # Componentes de interface (botões, inputs, modais, etc.)
    ├── features/               # Funcionalidades organizadas por domínio
    │   ├── creditsFeat/        # Funcionalidade de créditos
    │   │   └── components/     # Componentes específicos
    │   ├── landingFeat/        # Funcionalidade da landing page
    │   │   └── components/
    │   └── problemsFeat/       # Funcionalidade de problemas
    │       ├── components/
    │       │   ├── filter/
    │       │   ├── problem/
    │       │   └── sidebar/
    │       └── layout/          # Layouts específicos da feature problems
    ├── hooks/                   # Hooks personalizados
    ├── pages/                   # Páginas mapeadas para rotas
    │   ├── adminPage/           # Área administrativa
    │   ├── creditsPage/         # Página de créditos
    │   ├── landingPage/         # Página inicial
    │   └── problemsPage/        # Página de problemas
    ├── providers/               # Context Providers
    └── styles/                  # Estilos globais e design tokens
```

## Aliases

| Alias           | Caminho                     | Descrição                               |
| --------------- | --------------------------- | --------------------------------------- |
| `@app`          | `./src/app/App.jsx`         | Inicialização e configurações globais   |
| `@images/*`     | `./src/assets/images/*`     | Imagens estáticas globais               |
| `@components/*` | `./src/components/layout/*` | Componentes de layout compartilhados    |
| `@ui/*`         | `./src/components/ui/*`     | Componentes de interface reutilizáveis  |
| `@feats/*`      | `./src/features/*`          | Funcionalidades organizadas por domínio |
| `@hooks`        | `./src/hooks/index.js`      | Hooks personalizados                    |
| `@pages/*`      | `./src/pages/*`             | Páginas da aplicação                    |
| `@providers`    | `./src/providers/index.js`  | Context Providers                       |
| `@styles`       | `./src/styles`              | Estilos globais                         |

## Convenções

### Features

- Cada funcionalidade deve ficar em `src/features`.
- O nome da pasta deve seguir o padrão `<nome>Feat`.
- Componentes exclusivos da feature devem permanecer dentro da própria feature.

**Exemplos:**

- `creditsFeat`
- `landingFeat`

### Hooks

- Cada hook deve ficar em `src/hooks`.
- O nome dos arquivos deve seguir o padrão `use<Nome>`.
- Todos hooks devem estar presentes no `index.js`.

**Exemplos:**

- `useFetch`
- `useLoading`

### Pages

- Cada pasta em `src/pages` representa uma rota da aplicação (ou um arquivo direto quando não for uma rota em específico).
- O nome deve seguir o padrão `<nome>Page`.
- Os arquivos dentro deve ser obrigatoriamente index.jsx ou style.css.

**Exemplos:**

- `landingPage`
- `problemsPage`
- `adminPage`

### Providers

- Os arquivos de providers devem seguir o padrão `<Nome>Provider`.
- Todos providers devem estar dentro do `MainProvider.jsx`.

**Exemplos:**

- `ThemeProvider`
- `NotificationProvider`
- `LoadingProvider`
- `MainProvider`
