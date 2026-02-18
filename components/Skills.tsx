
"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import { ScrollRevealText } from "./ScrollRevealText";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";

export function Skills() {
  return (
    <Section id="skills" className="py-20 lg:py-32">
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
                  text="[ Technical Proficiency ]"
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
              {Object.entries(RESUME_DATA.skills).map(([category, items], index) => (
                <motion.div 
                  key={category}
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="py-10 border-t border-white/10 last:border-b"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <h3 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-white capitalize mb-4 md:mb-0">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-2 leading-none">
                            {items.map((skill, i) => (
                               <span 
                                key={skill}
                                className="text-xl md:text-2xl lg:text-3xl text-neutral-400 font-medium hover:text-white transition-colors"
                               >
                                {skill}{i !== items.length - 1 && <span className="text-neutral-600 ml-3 font-light">/</span>}
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
