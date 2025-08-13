# Lista de Países

Este projeto é uma lista de países simples, com ordenação por população, busca e favoritos. Foi desenvolvido em React e TypeScript para o desafio da vaga de Front-end Jr na Secretaria de Educação do município de João Pessoa.

O deploy está atualmente no [Vercel](https://lista-paises-sable.vercel.app/)

## Inicializando

Este projeto utiliza `npm` para gerenciamento de pacotes.

1. `npm install`
2. `npm run dev`

### Variáveis de Ambiente

Este projeto utiliza [RestCountries Api](https://restcountries.com/#api-endpoints-using-this-project) para puxar os dados dos países. Para utilizar é necessário incluir esta variável de ambiente:

```
VITE_API_URL=https://restcountries.com/v3.1
```

## Bibliotecas e ferramentas utilizadas

Parte do desafio consistia em não utilizar bibliotecas, mas fui autorizada a utilizar:

- [React Router](https://reactrouter.com): para o gerenciamento de rotas.

## Features opcionais adicionadas

- Responsividade para telas com largura menor que 736px, breakpoint sugerido em alguns projetos que já realizei do Front-end Mentor
- Funcionalidade de Limpar Lista de Favoritos, para facilitar a visualização da mensagem exibida na tela quando não há países favoritados.

## Ideias de melhorias

### Bibliotecas de estilização ou de componentes

Normalmente eu utilizaria alguma biblioteca de estilização como Tailwind para facilitar o desenvolvimento, porém foi utilizado CSS modular para se encaixar nos requisitos do desafio.

Caso a aplicação fosse mais complexa, poderia ser utilizado biblioteca de componentes como [Material UI](https://mui.com/material-ui/all-components/), [Chakra UI](https://chakra-ui.com/docs/get-started/installation), entre outros.

### Separação das funções de filtro e ordenação

Outro requisito do desafio consistia em deixar a lista completa, favoritos, filtro e ordenação no componente App.tsx.
Particularmente, eu daria preferência a deixar este componente o mais limpo possível e separar essas funcionalidades com mais hooks personalizados ou utilizar bibliotecas como [Redux](https://redux-toolkit.js.org/) ou [Zustand](https://zustand-demo.pmnd.rs/) para salvar essas preferências do usuário.

### Banco de Dados

Para salvar os favoritos, eu daria preferência a criar um sistema de registro e login e salvar os favoritos em um banco de dados, para evitar salvar no local storage, mas essas funcionalidades vão além do escopo da aplicação.

### React Query

Para monitorar o estado da requisição, como loading, e erros, a biblioteca React-Query poderia ser utilizada, mas foi deixada de lado pelos requisitos do desafio.

## Design

Tomei a liberdade de criar rapidamente um design simples para guiar a estilização do projeto. O arquivo Figma está na pasta 'src/assets'.

Algumas alterações foram feitas durante o desenvolvimento para complementar funcionalidades, como por exemplo, o botão de limpar favoritos
