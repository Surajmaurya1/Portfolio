"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";

export function Skills() {
  return (
    <Section id="skills" className="py-20 lg:py-32 border-t brutalist-border">
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
              <h2 className="text-micro text-primary mb-4">[ 05 ] EXPERTISE</h2>
              <h3 
                className="font-display text-white uppercase leading-[0.9] tracking-tight break-words"
                style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
              >
                Tech <br/> Arsenal.
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
              {Object.entries(RESUME_DATA.skills).map(([category, items], index) => (
                <motion.div 
                  key={category}
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="group py-12 px-8 border-b brutalist-border transition-colors duration-500 hover:bg-white hover:text-black cursor-crosshair"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div>
                          <span className="text-primary group-hover:text-black font-bold text-micro mb-2 block tracking-widest">
                            {String(index + 1).padStart(2, '0')} // CATEGORY
                          </span>
                          <h3 className="text-3xl lg:text-5xl font-display font-bold tracking-tight uppercase mb-4 md:mb-0 group-hover:text-black transition-colors">
                            {category}
                          </h3>
                        </div>
                        <div className="flex flex-col gap-2 leading-none border-l brutalist-border pl-6 group-hover:border-black">
                            {items.map((skill, i) => (
                               <span 
                                key={skill}
                                className="text-lg md:text-xl lg:text-2xl font-sans tracking-tight font-medium text-neutral-400 group-hover:text-black transition-colors"
                               >
                                {skill}
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
