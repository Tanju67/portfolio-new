import { useTranslation } from "react-i18next";
import Button from "../../shared/UIElements/button/Button";
import { motion } from "framer-motion";

function Hero() {
  const { t } = useTranslation("homePage");
  return (
    <section className="section-width section-padding relative flex min-h-screen items-center justify-center">
      <div className="text-center sm:max-w-3xl">
        <h3 className="subtitle">{t("hero.subtitle")}</h3>

        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          {t("hero.title")}
        </h1>
        <h2 className="text-secondary mb-8 text-sm sm:text-lg lg:text-xl">
          {t("hero.text")}
        </h2>

        <p className="text-secondary mb-6 text-sm tracking-widest uppercase">
          {t("hero.info")}
        </p>
        <div className="mx-auto flex justify-center gap-4 sm:w-1/2">
          <Button isLink={true} linkTo="/projects" className="flex-1">
            View Projects
          </Button>

          <Button
            isLink={true}
            linkTo="/contact"
            className="bg-accent! hover:bg-accent-hover! flex-1 text-white"
          >
            Contact
          </Button>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[40px_40px]" />
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <motion.div className="border-muted-foreground flex h-6 w-4 items-start justify-center rounded-full border p-1">
          <motion.div
            className="bg-accent h-1 w-1 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        <span className="text-muted-foreground text-xs tracking-widest uppercase">
          Scroll
        </span>
      </div>
      <div className="bg-accent/5 pointer-events-none absolute top-0 left-1/2 h-full w-1/2 -translate-x-1/2 rounded-full blur-[120px]" />
    </section>
  );
}

export default Hero;
