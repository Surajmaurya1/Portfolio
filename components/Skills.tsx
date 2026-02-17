
"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" className="py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Technical Proficiency</h2>
        <p className="text-neutral-400">Tools and technologies I work with.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(RESUME_DATA.skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300"
          >
            <h3 className="text-lg font-bold capitalize mb-6 text-accent border-b border-white/5 pb-2">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map((skill) => (
                <li key={skill} className="flex items-center text-sm md:text-base text-neutral-300">
                  <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full mr-3" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
