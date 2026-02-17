
"use client";

import { motion, Variants } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  },
};

export function Skills() {
  return (
    <Section id="skills" className="py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} // Trigger earlier but with margin
        transition={{ duration: 0.6 }}
        className="mb-12 text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Technical Proficiency</h2>
        <p className="text-neutral-400">Tools and technologies I work with.</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Triggers when 50px of element is in view
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {Object.entries(RESUME_DATA.skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={itemVariants}
            className="p-6 rounded-xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
          >
            <h3 className="text-lg font-bold capitalize mb-6 text-accent border-b border-white/5 pb-2 text-left">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((skill) => (
                <li key={skill} className="grid grid-cols-[20px_1fr] items-center text-sm md:text-base text-neutral-300 text-left">
                  <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full flex-shrink-0 mt-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
