
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RESUME_DATA } from "@/data/resume";
import { scaleIn, smoothTransition, hoverScaleWrapper } from "@/lib/animations";

type Project = typeof RESUME_DATA.projects[number];

export function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      variants={{
        ...scaleIn,
        hover: hoverScaleWrapper.hover
      }}
      transition={{ ...smoothTransition, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-10%" }}
      className="group relative overflow-hidden rounded-xl bg-surface border border-white/5 hover:border-white/10 transition-colors p-6 sm:p-8"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold font-display group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <Link 
          href={project.link} 
          target="_blank"
          className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors group-hover:rotate-45 duration-300"
        >
          <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white" />
        </Link>
      </div>

      <p className="text-neutral-400 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-neutral-300 mb-2 uppercase tracking-wide">Highlights</h4>
        <ul className="list-disc list-inside text-sm text-neutral-500 space-y-1">
          {project.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 bg-white/5 text-xs text-neutral-300 rounded-full border border-white/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
