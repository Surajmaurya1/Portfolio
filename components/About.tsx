
"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import { ScrollRevealText } from "./ScrollRevealText";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";

export function About() {
  return (
    <Section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
            initial={{ opacity: 0, width: "0%" }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-full h-px bg-white/20 mb-8 lg:mb-16" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Title */}
          <div className="flex flex-col lg:sticky lg:top-32 h-fit">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={smoothTransition}
              viewport={{ once: true, margin: "-10%" }}
            >
              <h2 
                className="font-bold font-display tracking-[-0.03em] leading-[0.9] text-white"
                style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)" }}
              >
                <ScrollRevealText
                  text="[ Who I Am ]"
                  className="block text-left"
                  tagName="span"
                />
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-8 lg:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ ...smoothTransition, delay: 0.2 }}
              viewport={{ once: true, margin: "-10%" }}
              className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light"
            >
              <p className="mb-6">
                {RESUME_DATA.about.description}
              </p>
              <p>
                I believe in writing code that is not just functional but also maintainable and performant. My approach combines technical depth with a product-focused mindset.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-2 gap-4"
            >
              {RESUME_DATA.about.highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="py-4 border-t border-white/10"
                >
                  <span className="text-white text-base md:text-lg font-medium tracking-wide block mb-1">
                    0{index + 1}
                  </span>
                  <span className="text-neutral-500 text-sm md:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
