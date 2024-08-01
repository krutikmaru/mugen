import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme} className="text-black dark:text-white">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
