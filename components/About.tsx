
"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import BlurText from "./BlurText";

export function About() {
  return (
    <Section id="about" className="py-20 lg:py-32 bg-surface/50">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <BlurText
            text={RESUME_DATA.about.title}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-5xl font-bold font-display mb-8"
          />
          <p className="text-lg text-neutral-400 leading-relaxed mb-6">
            {RESUME_DATA.about.description}
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed">
            I believe in writing code that is not just functional but also maintainable and performant. My approach combines technical depth with a product-focused mindset.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {RESUME_DATA.about.highlights.map((item, index) => (
            <div 
              key={index}
              className="p-5 rounded-lg bg-surface border border-white/5 hover:border-white/10 transition-colors"
            >
              <span className="text-accent text-sm font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
