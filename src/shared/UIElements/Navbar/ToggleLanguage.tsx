import { motion } from "framer-motion";
import { changeLanguage } from "i18next";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

function ToggleLanguage() {
  const { i18n } = useTranslation();
  const selected = i18n.language.startsWith("en") ? "EN" : "DE";

  return (
    <div className="border-border group bg-primary text-surface relative flex items-center gap-3 rounded-full border px-3 py-1.5 backdrop-blur-sm">
      <Globe size={14} className="text-muted-foreground animate-pulse" />

      <div className="flex items-center gap-2">
        <button
          onClick={() => changeLanguage("de")}
          className={`relative px-1 text-[10px] font-bold tracking-tighter transition-colors duration-300 ${
            selected === "DE"
              ? "text-accent"
              : "text-muted-foreground hover:text-accent text-surface"
          }`}
        >
          DE
          {selected === "DE" && (
            <motion.div
              layoutId="activeLang"
              className="bg-surface absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            />
          )}
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`relative px-1 text-[10px] font-bold tracking-tighter transition-colors duration-300 ${
            selected === "EN"
              ? "text-accent"
              : "text-muted-foreground hover:text-accent text-surface"
          }`}
        >
          EN
          {selected === "EN" && (
            <motion.div
              layoutId="activeLang"
              className="bg-surface absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default ToggleLanguage;
