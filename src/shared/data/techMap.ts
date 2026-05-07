import Axios from "../../assets/icons/Axios";
import Cloudinary from "../../assets/icons/Cloudinary";
import CSS from "../../assets/icons/CSS";
import Daisyui from "../../assets/icons/Daisyui";
import Express from "../../assets/icons/Express";
import Framer from "../../assets/icons/Framer";
import GoogleAuth from "../../assets/icons/GoogleAuth";
import HTML from "../../assets/icons/HTML";
import JavaScript from "../../assets/icons/JavaScript";
import JWT from "../../assets/icons/JWT";
import Mongo from "../../assets/icons/Mongo";
import Mongoose from "../../assets/icons/Mongoose";
import Next from "../../assets/icons/Next";
import Node from "../../assets/icons/Node";
import Postman from "../../assets/icons/Postman";
import React from "../../assets/icons/React";
import Redux from "../../assets/icons/Redux";
import RouterDom from "../../assets/icons/RouterDom";
import Swagger from "../../assets/icons/Swagger";
import Tailwind from "../../assets/icons/Tailwind";
import TypeScript from "../../assets/icons/TypeScript";
import Vite from "../../assets/icons/Vite";
import Zod from "../../assets/icons/Zod";
import Zustand from "../../assets/icons/Zustand";
type Tech = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  link?: string;
};

export type TechKey =
  | "mongodb"
  | "express"
  | "react"
  | "node"
  | "redux"
  | "cloudinary"
  | "zustand"
  | "router"
  | "typescript"
  | "zod"
  | "mongoose"
  | "swagger"
  | "jwt"
  | "html"
  | "css"
  | "js"
  | "next"
  | "tailwind"
  | "framer"
  | "daisyui"
  | "postman"
  | "google"
  | "hookform"
  | "axios"
  | "vite";

export const techMap: Record<TechKey, Tech> = {
  html: {
    name: "HTML",
    icon: HTML,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  css: {
    name: "CSS",
    icon: CSS,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  js: {
    name: "JavaScript",
    icon: JavaScript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  react: { name: "React", icon: React, link: "https://react.dev/" },
  typescript: {
    name: "TypeScript",
    icon: TypeScript,
    link: "https://www.typescriptlang.org/",
  },
  node: { name: "Node.js", icon: Node, link: "https://nodejs.org/en/" },
  express: { name: "Express", icon: Express, link: "https://expressjs.com/" },
  mongodb: { name: "MongoDB", icon: Mongo, link: "https://www.mongodb.com/" },
  mongoose: {
    name: "Mongoose",
    icon: Mongoose,
    link: "https://mongoosejs.com/",
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: Tailwind,
    link: "https://tailwindcss.com/",
  },
  daisyui: { name: "Daisy UI", icon: Daisyui, link: "https://daisyui.com/" },
  redux: { name: "Redux", icon: Redux, link: "https://redux.js.org/" },
  next: { name: "Next.js", icon: Next, link: "https://nextjs.org/" },
  zustand: {
    name: "Zustand",
    icon: Zustand,
    link: "https://zustand.docs.pmnd.rs/learn/getting-started/introduction",
  },
  cloudinary: {
    name: "Cloudinary",
    icon: Cloudinary,
    link: "https://cloudinary.com/",
  },
  router: {
    name: "React Router Dom",
    icon: RouterDom,
    link: "https://reactrouter.com/en/main/",
  },
  zod: { name: "Zod", icon: Zod, link: "https://zod.dev/" },
  swagger: { name: "Swagger", icon: Swagger, link: "https://swagger.io/" },
  jwt: { name: "JWT", icon: JWT, link: "https://jwt.io/" },
  framer: {
    name: "Framer Motion",
    icon: Framer,
    link: "https://motion.dev/",
  },
  postman: { name: "Postman", icon: Postman, link: "https://www.postman.com/" },
  google: {
    name: "Google Auth",
    icon: GoogleAuth,
    link: "https://firebase.google.com/",
  },
  hookform: {
    name: "React Hook Form",
    icon: React,
    link: "https://react-hook-form.com/",
  },
  axios: { name: "Axios", icon: Axios, link: "https://axios-http.com/" },
  vite: { name: "Vite", icon: Vite, link: "https://vitejs.dev/" },
};
