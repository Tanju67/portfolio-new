import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ani1 from "../../assets/ani1.jpg";
import ani10 from "../../assets/ani10.jpg";
import ani2 from "../../assets/ani2.jpg";
import ani3 from "../../assets/ani3.jpg";
import ani4 from "../../assets/ani4.jpg";
import ani5 from "../../assets/ani5.jpg";
import ani6 from "../../assets/ani6.jpg";
import ani7 from "../../assets/ani7.jpg";
import ani8 from "../../assets/ani8.jpg";
import ani9 from "../../assets/ani9.jpg";
import aniApi1 from "../../assets/aniApi1.jpg";
import aniApi2 from "../../assets/aniApi2.jpg";
import bur1 from "../../assets/bur1.jpg";
import bur10 from "../../assets/bur10.jpg";
import bur2 from "../../assets/bur2.jpg";
import bur3 from "../../assets/bur3.jpg";
import bur4 from "../../assets/bur4.jpg";
import bur5 from "../../assets/bur5.jpg";
import bur6 from "../../assets/bur6.jpg";
import bur7 from "../../assets/bur7.jpg";
import bur8 from "../../assets/bur8.jpg";
import bur9 from "../../assets/bur9.jpg";
import burApi1 from "../../assets/burApi1.jpg";
import burApi2 from "../../assets/burApi2.jpg";
import burApi3 from "../../assets/burApi3.jpg";
import burApi4 from "../../assets/burApi4.jpg";

const projects = [
  {
    id: "burger-studio",
    image: bur1,
    gallery: [bur1, bur6, bur2, bur3, bur4, bur5, bur7, bur8, bur9, bur10],
    tech: [
      "react",
      "typescript",
      "zod",
      "redux",
      "router",
      "tailwind",
      "daisyui",
      "framer",
      "hookform",
      "cloudinary",
      "vite",
    ],
    github: {
      link: "https://github.com/Tanju67/frontend-burgerStudio",
      text: "Source Code",
    },
    live: {
      link: "https://burgerstudio.onrender.com",
      text: "Live Demo",
    },
  },
  {
    id: "burger-studio-api",
    image: burApi1,
    gallery: [
      burApi1,
      burApi2,
      burApi3,
      burApi4,
      bur1,
      bur6,
      bur2,
      bur8,
      bur9,
      bur10,
    ],
    tech: [
      "node",
      "express",
      "typescript",
      "mongodb",
      "mongoose",
      "jwt",
      "zod",
      "cloudinary",
      "swagger",
    ],
    github: {
      link: "https://github.com/Tanju67/backend-burgerStudio",
      text: "Source Code",
    },
    live: {
      link: "https://backend-burgerstudio.onrender.com/api-docs/",
      text: "Swagger Docs",
    },
  },
  {
    id: "anidex",
    image: ani1,
    gallery: [ani1, ani2, ani3, ani4, ani5, ani6, ani7, ani8, ani9, ani10],
    tech: [
      "react",
      "typescript",
      "router",
      "tailwind",
      "framer",
      "redux",
      "zod",
      "google",
      "axios",
      "vite",
    ],
    github: {
      link: "https://github.com/Tanju67/frontend-anidex",
      text: "Source Code",
    },
    live: {
      link: "https://anidex-ozzf.onrender.com",
      text: "Live Demo",
    },
  },
  {
    id: "anidex-api",
    image: aniApi1,
    gallery: [aniApi1, aniApi2, ani5, ani6, ani7, ani8, ani9, ani10],
    tech: [
      "node",
      "express",
      "typescript",
      "mongodb",
      "mongoose",
      "jwt",
      "zod",
      "swagger",
    ],
    github: {
      link: "https://github.com/Tanju67/backend-anidex",
      text: "Source Code",
    },
    live: {
      link: "https://backend-anidex.onrender.com/api-docs/",
      text: "Swagger Docs",
    },
  },
];

type Section = {
  title: string;
  text: string;
};

type Features = {
  title: string;
  items: string[];
};

type Hero = {
  title: string;
  subtitle: string;
  badges: string[];
};

type Link = {
  link: string;
  text: string;
};

type Project = {
  id: string;
  image: string;
  gallery: string[];
  tech: string[];
  github: Link;
  live: Link;
  hero: Hero;
  about: Section;
  challenge: Section;
  approach?: Section;
  features: Features;
  learnings: Section;
  results: Section;
  evolution: Section;
  security?: Section;
  ux?: Section;
};

export const useProjects = () => {
  const { t } = useTranslation("projects");

  const translatedProjects: Project[] = useMemo(
    () =>
      projects.map((p) => ({
        ...p,
        hero: t(`${p.id}.hero`, { returnObjects: true }) as Hero,
        about: t(`${p.id}.about`, { returnObjects: true }) as Section,
        challenge: t(`${p.id}.challenge`, { returnObjects: true }) as Section,
        approach: t(`${p.id}.approach`, { returnObjects: true }) as Section,
        features: t(`${p.id}.features`, { returnObjects: true }) as Features,
        learnings: t(`${p.id}.learnings`, { returnObjects: true }) as Section,
        results: t(`${p.id}.results`, { returnObjects: true }) as Section,
        evolution: t(`${p.id}.evolution`, { returnObjects: true }) as Section,
        security: t(`${p.id}.security`, { returnObjects: true }) as Section,
        ux: t(`${p.id}.ux`, { returnObjects: true }) as Section,
      })),
    [t],
  );

  return { translatedProjects };
};
