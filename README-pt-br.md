<div align="center">

# 🍅 Chronos Pomodoro

[![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=chronos-pomodoro-timer)](https://chronos-pomodoro-timer.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🌐 _[Read in English](README.md)_

Um timer Pomodoro minimalista construído com **React**, **TypeScript** e
**Vite**. Projetado para ajudar os usuários a manter o foco com ciclos
automáticos de trabalho/descanso, histórico de tarefas persistente e uma
interface limpa com suporte a temas.

<img width="700" height="1078" alt="image" src="https://github.com/user-attachments/assets/91787b71-d92c-4e62-96ce-3c60f96f2b50" />

**[Demo ao Vivo →](https://chronos-pomodoro-timer.vercel.app)**

</div>

---

## ✨ Funcionalidades

- **Gerenciamento automático de ciclos** - Alterna entre sessões de foco de 25
  min, pausas curtas de 5 min e uma pausa longa de 15 min a cada quatro ciclos.
- **Durações ajustáveis** - Você pode alterar os tempos de foco, pausa curta e
  pausa longa na página de Configurações.
- **Timer em segundo plano com Web Worker** - A contagem regressiva roda fora da
  thread principal, mantendo o app fluido e responsivo.
- **Histórico de tarefas** - Veja, ordene e limpe tarefas concluídas ou
  interrompidas com detalhes completos da sessão.
- **Temas claro e escuro** - Troque de tema instantaneamente usando CSS custom
  properties e o atributo `data-theme`.
- **Persistência de sessão** - O app salva o estado no navegador e o restaura
  quando você recarrega a página.

<br/>

## 🛠 Stack Tecnológica

| Tecnologia                                                       | Finalidade                       |
| ---------------------------------------------------------------- | -------------------------------- |
| [React 19](https://react.dev/)                                   | Biblioteca de UI                 |
| [TypeScript 5.9](https://www.typescriptlang.org/)                | Tipagem estática e segurança     |
| [Vite 7](https://vite.dev/)                                      | Ferramenta de build e dev server |
| [React Router 7](https://reactrouter.com/)                       | Roteamento client-side           |
| [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | Qualidade de código e formatação |

<br/>

## 🧠 Destaques Técnicos

**Timer em thread separada** - A contagem regressiva roda dentro de um Web
Worker. Isso mantém o timer preciso e evita atrasos quando a página principal
está ocupada.

**Gerenciamento de estado seguro** - O app usa `useReducer` com tipos de ação
bem definidos. Isso torna as mudanças de estado fáceis de entender e mais
seguras de atualizar.

**Interrupção suave de sessão** - Um listener `beforeunload` verifica se há uma
tarefa ativa quando o usuário sai da página. Ele marca a tarefa como
interrompida e salva os dados no `localStorage`, mantendo o histórico correto.

**Sistema de temas simples** - Os modos claro e escuro usam CSS custom
properties com o atributo `data-theme`. Nenhum JavaScript extra é necessário em
tempo de execução.

<br/>

## 📁 Estrutura do Projeto

```
├── public/
│   └── images/
│
├── src/
│   ├── adapters/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── interfaces/
│   ├── models/
│   ├── pages/
│   │   ├── Home/
│   │   ├── History/
│   │   └── Settings/
│   │   └── PomodoroTechnique/
│   │   └── NotFound/
│   ├── routers/
│   ├── services/
│   ├── styles/
│   ├── templates/
│   ├── types/
│   ├── utils/
│   ├── workers/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── README.md
├── package.json
└── pnpm-lock.yaml
```

---

<br/>

## 🚀 Primeiros Passos

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- Gerenciador de pacotes [pnpm](https://pnpm.io/)

### Instalação

```sh
git clone https://github.com/guilhermehfr/chronos-pomodoro.git
cd chronos-pomodoro
pnpm install
```

### Desenvolvimento

```sh
pnpm dev
```

O app estará disponível em [http://localhost:5173](http://localhost:5173).

### Build de Produção

```sh
pnpm build
pnpm preview
```

### Qualidade de Código

```sh
pnpm lint
```

<br/>

## 🚢 Deploy

O projeto inclui um [`vercel.json`](vercel.json) com uma regra de rewrite
genérica para roteamento client-side de SPA. Para fazer o deploy, conecte o
repositório a um projeto Vercel. Nenhuma configuração adicional é necessária.

---

## 👋🏻 Contato

Em caso de dúvidas ou sugestões:

- Email: guihenrique.bra@email.com
- LinkedIn: [linkedin.com/in/guilhermehe](https://linkedin.com/in/guilhermehe)
- GitHub: [github.com/guilhermehfr](https://github.com/guilhermehfr)
