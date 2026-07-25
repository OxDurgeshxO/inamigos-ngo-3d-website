# 🌍 iNamigos — 3D NGO Website

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white)](https://pnpm.io/)

A visually immersive **3D website** built for the iNamigos NGO, combining cutting-edge Three.js 3D web experiences with a modern TypeScript frontend. The largest and most visually ambitious project in this portfolio at ~5.8 MB of assets and code.

---

## ✨ Features

- 🌐 **3D Interactive Experience** — Immersive Three.js-powered 3D scenes and animations
- 📱 **Fully Responsive** — Works seamlessly across desktop and mobile
- ⚡ **Netlify Deployed** — Production-ready with `netlify.toml` configuration
- 🧩 **Monorepo Architecture** — Clean pnpm workspace structure
- 🔒 **Type-safe** — Strict TypeScript throughout the codebase
- 🎨 **NGO-focused Design** — Built to represent the iNamigos organization's mission

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Language | TypeScript |
| 3D Engine | Three.js / WebGL |
| Frontend Framework | React + Next.js |
| Styling | Tailwind CSS |
| Package Manager | pnpm (workspaces) |
| Deployment | Netlify |
| Build Tool | Caffeine CLI |

---

## 📁 Project Structure

```
inamigos-ngo-3d-website/
├── src/
│   ├── frontend/        # React + Three.js 3D app
│   └── backend/         # Backend services
├── package.json         # Root workspace config
├── pnpm-workspace.yaml  # pnpm monorepo config
├── netlify.toml         # Netlify deployment config
├── tsconfig.json        # TypeScript config
├── caffeine.toml        # Caffeine project config
└── DESIGN.md            # 3D design decisions & visual spec
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16.0.0
- pnpm ≥ 7.0.0 (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/OxDurgeshxO/inamigos-ngo-3d-website.git
cd inamigos-ngo-3d-website

# Install dependencies
pnpm install

# Start development server
pnpm -r run dev
```

### Build for Production

```bash
pnpm build
```

### Deploy to Netlify

```bash
# Automatically configured via netlify.toml
netlify deploy --prod
```

---

## 🌟 What is iNamigos?

iNamigos is an NGO dedicated to community development and social impact. This website serves as their digital presence, built to engage visitors with an interactive 3D experience that communicates their mission powerfully.

---

## 📚 Design Documentation

See [DESIGN.md](./DESIGN.md) for detailed information on the 3D visual design decisions, component architecture, and animation specifications.

---

## 👤 Author

**Durgesh Dutt Sinha** — [@OxDurgeshxO](https://github.com/OxDurgeshxO)

---

## 📄 License

MIT © [Durgesh Dutt Sinha](https://github.com/OxDurgeshxO)
