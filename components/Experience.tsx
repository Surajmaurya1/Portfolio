
"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import { ScrollRevealText } from "./ScrollRevealText";
import { motion } from "framer-motion";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";

export function Experience() {
  return (
    <Section id="experience" className="py-20 lg:py-32">
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
              <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold font-display tracking-tighter leading-[0.9] text-white uppercase break-words">
                <ScrollRevealText
                  text="Working History"
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
              {RESUME_DATA.experience.map((job, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="group py-8 md:py-12 border-t border-white/10 first:border-none lg:first:border-t"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <span className="text-neutral-500 font-mono text-sm tracking-widest uppercase block mb-2">
                        {job.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {job.company}
                      </h3>
                    </div>
                    <div className="md:col-span-2">
                       <h4 className="text-xl text-neutral-200 mb-4 font-medium">{job.role}</h4>
                       <p className="text-neutral-400 leading-relaxed mb-6 font-light">{job.description}</p>
                       <ul className="space-y-2">
                          {job.impact.map((point, i) => (
                            <li key={i} className="flex items-start text-sm text-neutral-500">
                              <span className="mr-3 mt-1.5 w-1 h-1 bg-neutral-700 rounded-full flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                       </ul>
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
