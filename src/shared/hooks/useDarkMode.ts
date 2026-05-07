import { useEffect, useState } from "react";

function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    document.documentElement.classList.add("theme-transition");

    setDarkMode((prev) => !prev);

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
  };

  return { darkMode, toggleDarkMode, setDarkMode };
}

export default useDarkMode;
