
"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import { ScrollRevealText } from "./ScrollRevealText";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <Section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
            initial={{ opacity: 0, width: "0%" }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-full h-px bg-white/20 mb-12 lg:mb-20" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Title - Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
             <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={smoothTransition}
              viewport={{ once: true, margin: "-10%" }}
            >
              <h2 
                className="font-bold font-display tracking-[-0.03em] leading-[0.9] text-white uppercase break-words"
                style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)" }}
              >
                <ScrollRevealText
                  text="[ Selected Work ]"
                  className="block text-left"
                  tagName="span"
                />
              </h2>
            </motion.div>
          </div>

          {/* List */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-10%" }}
            >
              {RESUME_DATA.projects.map((project, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="group py-12 border-t border-white/10 last:border-b"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-start">
                                    <h3 style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)" }}
                                        className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all tracking-tighter leading-none"
                                    >
                                        {project.title}
                                    </h3>
                        <Link 
                            href={project.link} 
                            target="_blank"
                            className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors group-hover:rotate-45 duration-300 border border-white/5"
                        >
                            <ArrowUpRight className="w-6 h-6 text-white" />
                        </Link>
                    </div>
                    
                    <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                         {project.tech.map((tech) => (
                            <span 
                                key={tech} 
                                className="px-4 py-1.5 border border-white/20 rounded-full text-sm text-neutral-300 tracking-wide"
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
