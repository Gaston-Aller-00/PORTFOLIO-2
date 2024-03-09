"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Mis proyectos</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
            <Project {...project} />
          </a>
        ))}
      </div>
    </section>
  );
}
