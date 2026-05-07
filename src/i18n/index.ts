import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./en/common.json";
import deCommon from "./de/common.json";
import enProjects from "./en/projects.json";
import deProjects from "./de/projects.json";
import enHomePage from "./en/homePage.json";
import deHomePage from "./de/homePage.json";
import enSkillsPage from "./en/skillsPage.json";
import deSkillsPage from "./de/skillsPage.json";
import enAboutPage from "./en/aboutPage.json";
import deAboutPage from "./de/aboutPage.json";
import enContactPage from "./en/contactPage.json";
import deContactPage from "./de/contactPage.json";

const resources = {
  en: {
    common: enCommon,
    projects: enProjects,
    homePage: enHomePage,
    skillsPage: enSkillsPage,
    aboutPage: enAboutPage,
    contactPage: enContactPage,
  },
  de: {
    common: deCommon,
    projects: deProjects,
    homePage: deHomePage,
    skillsPage: deSkillsPage,
    aboutPage: deAboutPage,
    contactPage: deContactPage,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    ns: [
      "common",
      "projects",
      "homePage",
      "skillsPage",
      "aboutPage",
      "contactPage",
    ],
    defaultNS: "common",
  });

export default i18n;
