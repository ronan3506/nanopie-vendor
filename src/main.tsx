
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Initialize theme
  const isDark = localStorage.getItem('nanopie_dark_mode') === 'true';
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  createRoot(document.getElementById("root")!).render(<App />);
  