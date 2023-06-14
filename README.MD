# Finance Control

![Finance Control Logo](/path/to/logo.png)

## Descrição

O projeto Finance Control é um aplicativo de gerenciamento de contas desenvolvido com ReactJS e Typescript, utilizando o Vite como bundler. Ele permite criar, remover e mesclar contas, além de realizar transações e exibir um resumo das transações de todas as contas no painel de Dashboard.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter o Node.js e o npm instalados em sua máquina. O projeto requer a versão 18+ do npm.

- Para instalar o Node.js, acesse: [https://nodejs.org](https://nodejs.org)
- Para verificar a versão do npm, execute o seguinte comando:

`npm -v`

Se o npm não estiver instalado ou a versão for inferior a 18, siga as instruções em [https://docs.npmjs.com/try-the-latest-stable-version-of-npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm) para instalar a versão mais recente do npm.

## Instalação

Siga as etapas abaixo para configurar e executar o projeto Finance Control em sua máquina local:

1. Navegue até o diretório do projeto:

`cd finance-control`

2. Instale as dependências do projeto:

`npm install` Isso instalará todas as dependências listadas no arquivo package.json.

Para executar o projeto, siga as etapas abaixo:

1. Inicie o servidor de desenvolvimento:

`npm run dev`
`npm run dev:server` para rodas o Json-server

2. Abra o navegador e acesse `http://localhost:5173/` para visualizar o aplicativo.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

.
├── public/ # Arquivos públicos
├── src/ # Código-fonte do projeto
│ ├── components/ # Componentes reutilizáveis
│ ├── pages/ # Páginas do aplicativo
│ ├── styles/ # Estilos globais e estilos de temas
│ ├── App.tsx # Componente raiz do aplicativo
│ ├── index.tsx # Arquivo principal contendo a lógica do aplicativo
│ ├── routes.tsx # Arquivo de definição das rotas da aplicação
│ └── ...
├── .gitignore # Arquivos a serem ignorados pelo Git
├── package.json # Dependências do projeto e scripts
└── README.md # Documentação do projeto

O projeto Finance Control oferece as seguintes funcionalidades:

- Criar uma nova conta: Permite criar uma nova conta no sistema.
- Remover uma conta: Permite remover uma conta existente do sistema.
- Mesclar contas:
- Criar transações
- Exibir o resumo de transações e de contas