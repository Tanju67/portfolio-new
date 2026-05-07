import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useShareData } from "../../hooks/useShareData";
import { useTranslation } from "react-i18next";
import Logo from "../Navbar/Logo";

function Footer() {
  const { navLinks } = useShareData();
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-bg section-padding relative border-t">
      <div className="section-width">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
          <div className="flex flex-col gap-6 md:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-8" />
            </div>
            <p className="text-secondary max-w-sm text-base leading-relaxed">
              {t("footer.about")}
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaGithub, link: "https://github.com/Tanju67" },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/tanju-%C3%B6zer-14b1b9231/",
                },
                { icon: IoMdMail, link: "mailto:tanju.ozer64@gmail.com" },
              ].map((social, i) => (
                <Link
                  key={i}
                  to={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="border-border bg-surface text-secondary hover:border-accent hover:text-accent flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm transition-all hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16 md:col-span-7 md:justify-items-end">
            <div className="space-y-6">
              <h4 className="text-primary text-xs font-black tracking-[0.2em] uppercase">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `hover:text-accent text-sm transition-colors ${
                          isActive ? "text-accent font-bold" : "text-secondary"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-primary text-xs font-black tracking-[0.2em] uppercase">
                Status
              </h4>
              <div className="flex flex-col gap-3">
                <div className="text-secondary flex items-center gap-2 text-sm">
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  Available for projects
                </div>
                <p className="text-secondary max-w-37.5 text-sm">
                  {t("footer.living")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-border mt-16 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-secondary text-xs opacity-70">
            © {currentYear} Tanju Özer. {t("footer.copyright")}
          </p>
          <div className="text-secondary flex items-center gap-1 text-xs opacity-70">
            <span>{t("footer.build")}</span>
            <span className="text-accent font-bold">React & Tailwind</span>
          </div>
        </div>
      </div>

      <div className="bg-accent/10 pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-[100px]" />
    </footer>
  );
}

export default Footer;
