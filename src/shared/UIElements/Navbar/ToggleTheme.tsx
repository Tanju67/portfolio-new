import { Sun, Moon } from "lucide-react";
import useDarkMode from "../../hooks/useDarkMode";

function ToggleTheme() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="border-border bg-primary text-surface hover:bg-hover hover:text-primary flex items-center justify-center rounded-full border p-2 transition-colors duration-300"
      >
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    </div>
  );
}

export default ToggleTheme;
