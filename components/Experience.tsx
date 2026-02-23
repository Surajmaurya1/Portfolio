"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import { motion } from "framer-motion";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";

export function Experience() {
  return (
    <Section id="experience" className="py-20 lg:py-32 border-t brutalist-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 mt-8">
          {/* Title - Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit lg:border-r brutalist-border lg:pr-12">
             <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={smoothTransition}
              viewport={{ once: true, margin: "-10%" }}
            >
              <h2 className="text-micro text-primary mb-4">[ 03 ] WORK HISTORY</h2>
              <h3 
                className="font-display text-white uppercase leading-[0.9] tracking-tight break-words"
                 style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
              >
                Career <br/> Timeline.
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
              {RESUME_DATA.experience.map((job, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="group p-8 md:p-12 border-b brutalist-border transition-colors duration-500 hover:bg-neutral-900"
                >
                  <div className="flex flex-col gap-6">
                     <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 border-b brutalist-border pb-6 mb-2">
                        <div>
                          <span className="text-primary font-bold text-micro mb-2 block">
                              {job.period}
                          </span>
                          <h3 style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)" }} className="text-3xl md:text-5xl font-bold font-display text-white uppercase leading-[0.9]">
                              {job.company}
                          </h3>
                        </div>
                        <span className="text-xl md:text-2xl font-display text-neutral-400 mb-1 lg:text-right">
                            {job.role}
                        </span>
                     </div>
                     
                     <div className="pl-0">
                       <ul className="grid grid-cols-1 gap-y-4 max-w-3xl">
                          {job.impact.map((point, i) => (
                            <li key={i} className="flex items-start text-base md:text-lg text-neutral-300 font-sans tracking-tight">
                              <span className="mr-4 mt-2 w-2 h-2 bg-primary flex-shrink-0" />
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
