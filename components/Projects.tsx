"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <Section id="projects" className="py-20 lg:py-32 border-t brutalist-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 mt-8">
          {/* Title - Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit lg:border-r brutalist-border lg:pr-12">
             <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={smoothTransition}
              viewport={{ once: true, margin: "-10%" }}
            >
              <h2 className="text-micro text-primary mb-4">[ 04 ] SELECTED WORKS</h2>
              <h3 
                className="font-display text-white uppercase leading-[0.9] tracking-tight break-words"
                style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
              >
                Featured <br/> Archives.
              </h3>
            </motion.div>
          </div>

          {/* List */}
          <div className="lg:col-span-8 flex flex-col lg:pl-12">
            <motion.div
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-10%" }}
               className="brutalist-border border-b-0"
            >
              {RESUME_DATA.projects.map((project, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="group p-8 md:p-12 border-b brutalist-border relative overflow-hidden transition-colors duration-500 hover:bg-white hover:text-black cursor-pointer"
                >
                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <h4 
                            className="text-4xl md:text-6xl font-bold font-display uppercase tracking-tight leading-none group-hover:text-black transition-colors"
                        >
                            {project.title}
                        </h4>
                        
                        <Link 
                            href={project.link} 
                            target="_blank"
                            className="p-4 brutalist-border group-hover:bg-black group-hover:text-white transition-colors group-hover:border-black"
                        >
                            <ArrowUpRight className="w-8 h-8" />
                        </Link>
                    </div>
                    
                    <p className="text-neutral-400 group-hover:text-neutral-700 text-lg md:text-xl font-sans leading-relaxed max-w-2xl transition-colors">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                         {project.tech.map((tech) => (
                            <span 
                                key={tech} 
                                className="px-3 py-1 brutalist-border text-xs uppercase tracking-widest text-neutral-300 group-hover:text-black group-hover:border-black transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
