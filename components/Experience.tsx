
"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import BlurText from "./BlurText";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section id="experience">
      <BlurText
        text="Experience"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-3xl md:text-4xl font-bold font-display mb-12"
      />
      <div className="space-y-16">
        {RESUME_DATA.experience.map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 border-l border-white/10 pl-8 md:pl-0 md:border-l-0 text-left"
          >
            <div className="md:col-span-1 text-sm text-neutral-500 font-mono uppercase tracking-wider relative text-left">
              <span className="hidden md:block absolute right-0 top-1 w-3 h-3 bg-neutral-800 rounded-full border border-neutral-600 translate-x-[21px]" />
              {job.period}
            </div>
            <div className="md:col-span-3 relative">
                 {/* Mobile timeline dot */}
                <span className="md:hidden absolute -left-[41px] top-1 w-3 h-3 bg-neutral-800 rounded-full border border-neutral-600" />
                
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-1">
                {job.company}
              </h3>
              <p className="text-neutral-300 font-medium mb-4">{job.role}</p>
              <p className="text-neutral-400 mb-6 italic">{job.description}</p>
              <ul className="space-y-3">
                {job.impact.map((point, i) => (
                  <li key={i} className="grid grid-cols-[20px_1fr] items-start text-neutral-300 text-sm md:text-base text-left">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-neutral-500 rounded-full flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
