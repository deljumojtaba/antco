"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 backdrop-blur-sm border border-white/20 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 transition-all duration-300 text-amber-500 ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
          size={20}
        />
        <Moon
          className={`absolute inset-0 transition-all duration-300 text-blue-300 ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
          size={20}
        />
      </div>
    </button>
  );
}
