import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavScroll } from "../../hooks/useNavScroll";
import { useShareData } from "../../hooks/useShareData";
import Logo from "./Logo";
import ToggleLanguage from "./ToggleLanguage";
import ToggleTheme from "./ToggleTheme";

type DesktopProps = {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Desktop({ setIsMobileMenuOpen }: DesktopProps) {
  const isScrolled = useNavScroll();
  const { navLinks } = useShareData();
  const location = useLocation();

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 border-b px-4 transition-all duration-300 md:px-8 ${
          isScrolled
            ? "bg-background/80 border-b-border h-16 shadow-sm backdrop-blur-md"
            : "h-20 border-transparent bg-transparent"
        }`}
      >
        <div className="section-width flex h-full items-center justify-between">
          <Logo className="h-6 w-6 md:h-8 md:w-8" />

          <div className="hidden items-center gap-8 min-[950px]:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary group relative text-sm font-medium tracking-widest uppercase transition-colors"
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="active-underline"
                    className="bg-accent absolute -bottom-1 left-1/2 h-1 w-full -translate-x-1/2 rounded-full"
                  ></motion.div>
                )}{" "}
                <span className="bg-accent absolute -bottom-1 left-1/2 h-1 w-0 origin-center transition-all duration-300 group-hover:left-0 group-hover:w-full" />{" "}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ToggleLanguage />
            <ToggleTheme />

            <button
              className="text-foreground min-[950px]:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Desktop;
