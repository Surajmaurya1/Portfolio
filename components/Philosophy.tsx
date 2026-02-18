"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { RESUME_DATA } from "@/data/resume";
import { fadeUp, smoothTransition } from "@/lib/animations";
import { ScrollRevealText } from "./ScrollRevealText";

export function Philosophy() {
  return (
    <section className="relative w-full py-12 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Left Column: Typography */}
          <div className="flex flex-col justify-center lg:justify-start lg:sticky lg:top-32 h-fit">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeUp}
              transition={smoothTransition}
            >
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-display tracking-tighter leading-[0.9] text-white overflow-visible">
                <ScrollRevealText
                  text="Building Scalable"
                  className="block text-left mb-2" 
                  wordClassName="mr-4"
                  tagName="span"
                />
                <span className="block text-neutral-500">
                   <ScrollRevealText
                    text="Systems &"
                    className="block text-left mb-2"
                    wordClassName="mr-4"
                    tagName="span"
                  />
                </span>
                 <ScrollRevealText
                  text="Production Ready"
                  className="block text-left mb-2"
                   wordClassName="mr-4"
                   tagName="span"
                />
                 <span className="flex items-center gap-4">
                  <ScrollRevealText
                    text="Interfaces."
                    className="block text-left"
                     wordClassName="mr-0"
                     tagName="span"
                  />
                   {/* The Japanese text from reference or a symbol */}
                   <motion.span 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-4 h-4 rounded-full bg-white inline-block mt-2" 
                   />
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Meaningful Description */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeUp}
              transition={{ ...smoothTransition, delay: 0.2 }}
            >
               <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight font-medium mb-8">
                 {RESUME_DATA.tagline}
               </p>
               <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl">
                 {RESUME_DATA.about.description}
               </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
            initial={{ opacity: 0, width: "0%" }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut", delay: 0.4 }}
            className="w-full h-px bg-white/20 mt-12 mb-6 lg:mt-20 lg:mb-8" 
        />
        
        <div className="flex flex-wrap gap-4 md:gap-8 text-xs md:text-sm font-medium text-neutral-400 uppercase tracking-widest">
            {["Architecture", "Performance", "Scalability"].map((label, i) => (
                <motion.span
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (i * 0.1), duration: 0.5 }}
                >
                    {label}
                </motion.span>
            ))}
        </div>
      </div>
    </section>
  );
}
