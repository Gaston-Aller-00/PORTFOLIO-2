"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre Mi");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre Mi</SectionHeading>
      <p className="mb-3">
        Hola, soy Gastón, desarrollador web Full Stack.Anteriormente exploré
        diferentes áreas académicas antes de descubrir mi pasión por la
        programación. Me encanta el mundo de la programación y estoy
        constantemente buscando oportunidades para crecer y mejorar como
        profesional. Actualmente estoy enfocado en perfeccionar Next.js y cuento
        con experiencia en react,node js, bases de datos SQL y NoSQL, así como
        comprensión de las API REST, entre otros.La próxima tecnología que estoy
        ansioso por aprender es React Native. Mi actitud positiva, autonomía y
        habilidades para trabajar en equipo son cualidades que me definen.
        Además, me considero una persona proactiva, organizada y orientada a
        resultados. Ya sea trabajando en un sitio web, una aplicación móvil u
        otro producto digital, me comprometo a ofrecer excelencia en el diseño y
        un enfoque centrado en el usuario en cada proyecto en el que participo.
        Estoy emocionado por la oportunidad de contribuir con mis habilidades a
        su próximo proyecto.
      </p>

      
    </motion.section>
  );
}
