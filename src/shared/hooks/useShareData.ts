import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useShareData = () => {
  const { t } = useTranslation("common");

  const navLinks = useMemo(
    () => [
      { name: t("nav.home"), href: "/" },
      { name: t("nav.projects"), href: "/projects" },
      { name: t("nav.skills"), href: "/skills" },
      { name: t("nav.about"), href: "/about" },
      { name: t("nav.contact"), href: "/contact" },
    ],
    [t],
  );

  return { navLinks };
};
