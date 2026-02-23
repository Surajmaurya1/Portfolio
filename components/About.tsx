"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Section } from "./Section";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";

export function About() {
  return (
    <Section id="about" className="py-20 lg:py-32 bg-background text-foreground border-t brutalist-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 mt-8">
          {/* Left Column: Title */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:border-r brutalist-border lg:pr-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={smoothTransition}
              viewport={{ once: true, margin: "-10%" }}
            >
              <h2 className="text-micro text-primary mb-4">[ 02 ] BIOGRAPHY</h2>
              <h3 
                className="font-display text-white leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
              >
                The Mind <br/> Behind The <br/> Machine.
              </h3>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col lg:pl-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              transition={{ ...smoothTransition, delay: 0.2 }}
              viewport={{ once: true, margin: "-10%" }}
              className="text-lg md:text-2xl text-neutral-300 leading-snug font-sans max-w-2xl mb-16"
            >
              <p className="mb-8">
                <span className="text-white bg-primary text-black px-1 font-bold">I am a frontend developer</span> specializing in building scalable, production-grade web applications using React.js and Next.js.
              </p>
              <p className="text-neutral-500 font-light font-display text-2xl md:text-4xl">
                 My work focuses on clean component architecture, performance optimization, and maintainable UI systems.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 brutalist-border"
            >
              {RESUME_DATA.about.highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUp}
                  transition={smoothTransition}
                  className="p-6 border-b md:odd:border-r brutalist-border last:border-b-0 group hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <span className="text-micro text-neutral-500 group-hover:text-black block mb-4">
                    INDEX_0{index + 1}
                  </span>
                  <span className="text-lg font-bold uppercase tracking-tight">
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
