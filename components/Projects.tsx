
"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" className="py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Featured Projects</h2>
        <p className="text-neutral-400 text-lg max-w-2xl">
          A selection of projects that demonstrate scalable architecture and performance-focused development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {RESUME_DATA.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
