<div align="center">

# 🍅 Chronos Pomodoro

[![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=chronos-pomodoro-timer)](https://chronos-pomodoro-timer.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🌐 _[Leia em Português](README-pt-br.md)_

A Minimalist Pomodoro timer built with **React**, **TypeScript**, and **Vite**.
Designed to help users stay focused with automated work/break cycles, persistent
task history, and a clean themeable UI.

<img width="700" height="1078" alt="image" src="https://github.com/user-attachments/assets/91787b71-d92c-4e62-96ce-3c60f96f2b50" />

**[Live Demo →](https://chronos-pomodoro-timer.vercel.app)**

</div>

---

## ✨ Features

- **Automatic cycle management** - Switches between 25-min focus sessions, 5-min
  short breaks, and a 15-min long break after every four cycles.
- **Adjustable durations** - You can change focus, short break, and long break
  times from the Settings page.
- **Background timer with Web Worker** - The countdown runs outside the main
  thread, keeping the app smooth and responsive.
- **Task history** - See, sort, and clear finished or interrupted tasks with
  full session details.
- **Dark & light themes** - Change themes instantly using CSS custom properties
  and a `data-theme` attribute.
- **Session persistence** - The app saves your state in the browser and restores
  it when you reload the page.

<br/>

## 🛠 Tech Stack

| Technology                                                       | Purpose                       |
| ---------------------------------------------------------------- | ----------------------------- |
| [React 19](https://react.dev/)                                   | UI Library                    |
| [TypeScript 5.9](https://www.typescriptlang.org/)                | Static typing and type safety |
| [Vite 7](https://vite.dev/)                                      | Build tool and dev server     |
| [React Router 7](https://reactrouter.com/)                       | Client-side routing           |
| [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | Code quality and formatting   |

<br/>

## 🧠 Technical Highlights

**Timer in a separate thread** - The countdown runs inside a Web Worker. This
keeps the timer accurate and avoids delays when the main page is busy.

**Safe state management** - The app uses `useReducer` with clear action types.
This makes state changes easy to understand and safer to update.

**Smooth session interruption** - A `beforeunload` listener checks if a task is
active when the user leaves the page. It marks the task as interrupted and saves
the data to `localStorage`, so the history stays correct.

**Easy theme system** - Dark and light modes use CSS custom properties with a
`data-theme` attribute. No extra JavaScript is needed at runtime.

<br/>

## 📁 Project Structure

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

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [pnpm](https://pnpm.io/) package manager

### Installation

```sh
git clone https://github.com/guilhermehfr/chronos-pomodoro.git
cd chronos-pomodoro
pnpm install
```

### Development

```sh
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Production Build

```sh
pnpm build
pnpm preview
```

### Code Quality

```sh
pnpm lint
```

<br/>

## 🚢 Deployment

The project includes a [`vercel.json`](vercel.json) with a catch-all rewrite
rule for SPA client-side routing. To deploy, connect the repository to a Vercel
project. Zero additional configuration required.

---

## 👋🏻 Contact

For questions or suggestions:

- Email: guihenrique.bra@email.com
- LinkedIn: [linkedin.com/in/guilhermehe](https://linkedin.com/in/guilhermehe)
- GitHub: [github.com/guilhermehfr](https://github.com/guilhermehfr)
