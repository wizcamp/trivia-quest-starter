# Trivia Quest

Build an interactive trivia game using React, APIs, and modern web development tools!

## 🚀 Quick Start

1. Click **Use this template** → **Open in a codespace**
2. Wait for the environment to load (1-2 minutes)
3. Run `npm run dev` in the terminal
4. Open the app in your browser

## 📚 What You'll Build

Create a complete trivia game with React fundamentals:

- **Session 1:** Set up dev environment and swap components
- **Session 2:** Build reusable GameButton component
- **Session 3:** Manage game flow with Context API
- **Session 4:** Configure game zones with data structures
- **Session 5:** Fetch questions from Open Trivia Database
- **Session 6:** Add localStorage caching for performance
- **Session 7:** Build interactive QuizModal component
- **Session 8:** Implement scoring and victory screen
- **Session 9:** Add theme music with custom hooks
- **Session 10:** Deploy to GitHub Pages
- **Session 11:** Extend with custom features
- **Session 12:** Showcase your game

## 🛠️ Tech Stack

- **React** - UI framework with hooks and context
- **Vite** - Dev server with hot reload
- **Open Trivia Database** - Free trivia API
- **GitHub Pages** - Free hosting

## 📦 Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run format   # Format code with Prettier
```

## 📁 Project Structure

```
trivia-quest-starter/
├── src/
│   ├── components/        # React components
│   ├── context/           # GameContext for state
│   ├── data/              # zones.js configuration
│   ├── hooks/             # useGame, useAudio
│   ├── services/          # API integration
│   └── App.jsx            # Main app component
├── public/                # Images, audio files
└── index.html             # Entry point
```

## 🆘 Troubleshooting

**Port already in use:**
```bash
npx kill-port 5173
npm run dev
```

**Server won't stop:**
- Press <kbd>Ctrl</kbd>+<kbd>C</kbd> (PC) or <kbd>Cmd</kbd>+<kbd>C</kbd> (Mac) in terminal

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📖 Resources

- Session guides provided by your instructor
- Browser console (F12) for debugging
- React DevTools browser extension
- GitHub Copilot / Amazon Q for AI assistance

## 🚀 Deployment

Your game automatically deploys to GitHub Pages at:
`https://YOUR-USERNAME.github.io/trivia-quest/`

---

Built with ❤️ at Wizcamp
