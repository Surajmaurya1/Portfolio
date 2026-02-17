
"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import { ScrollRevealText } from "./ScrollRevealText";

export function About() {
  return (
    <Section id="about" className="py-20 lg:py-32 bg-surface/50">
      <div className="flex flex-col gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <ScrollRevealText
            text={RESUME_DATA.about.title}
            className="text-3xl md:text-5xl font-bold font-display mb-8 text-white"
          />
          <p className="text-lg text-neutral-400 leading-relaxed mb-6">
            {RESUME_DATA.about.description}
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed">
            I believe in writing code that is not just functional but also maintainable and performant. My approach combines technical depth with a product-focused mindset.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl"
        >
          {RESUME_DATA.about.highlights.map((item, index) => (
            <div 
              key={index}
              className="p-5 rounded-lg bg-surface border border-white/5 hover:border-white/10 transition-colors text-center"
            >
              <span className="text-neutral-300 text-sm font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
