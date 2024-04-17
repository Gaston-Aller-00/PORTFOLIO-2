import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import wordanalyticsImg1 from "@/public/wordanalyticsImg1.png";
import FF from "@/public/FF.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre Mi",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bootcamp Soy Henry",
    location: "Argentina, Bs as",
    description: "3 meses de Desarrollo intensivo, Programacion full stack",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Meta Front-End Developer",
    location: "Coursera",
    description:
      "Curso Front-end de duracion de 6 meses, Orientado a React y Typescript ",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Gestión de proyectos con la  metodología agil",
    location: "Coursera",
    description: "Metodoligia agil SCRUM ",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "IBM Back-end JavaScript Developer ",
    location: "Coursera",
    description:
      "Curso Back-end de duracion de 6 meses,Orientado NodeJS, Express,Devops,MongoDB ",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Real Estate",
    description:
      "Real Estate donde los usuarios pueden reservar propiedades y crear publicaciones para poner su propiedad en venta. Desarrollo web full stack.",
    tags: [
      "React",
      "Typescript",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Prisma",
      "Framer",
    ],
    imageUrl: corpcommentImg,
    link: "https://real-estate-333.vercel.app",
  },
  {
    title: "Book Store",
    description:
      "Librería en línea que permite a los usuarios comprar y cargar libros directamente en el sitio para venderlos. Desarrollo web full stack.",
    tags: ["React", "Vite", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    link: "https://mern-book-store-s72o.vercel.app",
  },
  {
    title: "K-GYM",
    description: "A landing para un gimnasio local, minimalista y moderna.",
    tags: ["React", "TypeScript", "Next.JS", "Tailwind", "Framer", "Swiper"],
    imageUrl: wordanalyticsImg1,
    link: "https://onepage-gym-next-13.vercel.app",
  },
  {
    title: "NEXCENT",
    description:
      "Landing page para vender servicios digitales, con un diseño minimalista y moderno",
    tags: ["React", "Vite", "Tailwind", "Framer", "React-scroll"],
    imageUrl: wordanalyticsImg,
    link: "https://modernagency.vercel.app",
  },
  {
    title: "Final Fanatsy IX",
    description:
      "Fan page para el juego Final Fantasy IX en colaboracion de otros usuarios. (En progreso)",
    tags: ["Next.js", "Typescript", "Tailwind", "Framer", "React-scroll"],
    imageUrl: FF,
    link: "https://github.com/Gaston-Aller-00/FINAL-FANTASY-IX",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",

  "MaterialUI",
  "Express",
  "PostgreSQL",
  "Prisma",
  "React-Query",
  "Framer Motion",
] as const;
