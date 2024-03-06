import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Real Estate",
    description:
      "Real Estate Agency where users can reserve and purchase properties. Full stack web.",
    tags: ["React", "Typescript","Next.js", "MongoDB", "Tailwind", "Prisma","Framer"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Book Store",
    description:
      "Online bookstore enabling users to purchase and upload books directly to the site. Full stack website.",
    tags: ["React",  "Vite", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "NEXCENT",
    description:
      "Landing page for selling digital services, with a captivating front-end design",
    tags: ["React",  "Tailwind", "Framer","React-scroll"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "K-GYM",
    description:
      "A landing page for a local gym, focusing on the front end",
    tags: ["React", "TypeScript","Next.JS" ,"Tailwind", "Framer","Swiper"],
    imageUrl: wordanalyticsImg,
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
  "GraphQL",
  "MaterialUI",
  "Express",
  "PostgreSQL",
  "Prisma",
  "React-Query",
  "MySQL",
  
  "Framer Motion",
] as const;
