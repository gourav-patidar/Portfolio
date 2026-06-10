# Portfolio

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed (version 18.17 or higher recommended for Next.js 15).

Check your Node version:
```bash
node --version
```

If you need to install Node.js, download it from [nodejs.org](https://nodejs.org/)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build the application for production
- **`npm run start`** - Run the production build
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run typecheck`** - Validate TypeScript types

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (Dark/Light mode support)

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # UI components
│   └── portfolio.tsx   # Main portfolio component
├── data/               # Data files
│   └── portfolio.ts    # Portfolio content
└── lib/                # Utility functions
    └── utils.ts        # Helper functions
```