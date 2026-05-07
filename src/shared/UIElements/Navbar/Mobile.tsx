import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { useShareData } from "../../hooks/useShareData";
import Logo from "./Logo";

type MobileProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Mobile({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileProps) {
  const { navLinks } = useShareData();

  // Framer Motion Varyasyonları
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.5 } },
  } as const;

  const menuVars = {
    initial: { x: "100%" },
    animate: {
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    } as const,
  } as const;

  const linkVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  } as const;

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-bg/95 fixed inset-0 z-100 h-screen w-full backdrop-blur-xl"
        >
          <motion.div
            variants={menuVars}
            className="bg-bg flex h-full w-full flex-col px-8 py-12"
          >
            <div className="flex items-center justify-between">
              <Logo className="h-8 w-8" />

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-surface border-border flex h-12 w-12 items-center justify-center rounded-full border shadow-sm"
              >
                <X className="text-primary" size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-20 flex flex-col gap-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted text-xs font-bold tracking-[0.3em] uppercase"
              >
                Navigation
              </motion.p>

              <motion.div
                className="flex flex-col gap-4"
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={linkVars}>
                    <NavLink
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `group border-border/90 flex items-center justify-between border-b py-4 text-4xl font-bold transition-all ${isActive ? "text-accent" : "text-primary hover:text-accent"} `
                      }
                    >
                      <span>{link.name}</span>
                      <ArrowRight
                        className="opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100"
                        size={28}
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Mobile;
