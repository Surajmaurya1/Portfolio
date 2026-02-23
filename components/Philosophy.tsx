"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { RESUME_DATA } from "@/data/resume";
import { fadeUp, smoothTransition } from "@/lib/animations";

export function Philosophy() {
  return (
    <section className="relative w-full py-12 lg:py-24 border-t brutalist-border bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 mt-8 hover:bg-white hover:text-black transition-colors duration-700">
          
          {/* Left Column: Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:justify-start lg:border-r brutalist-border lg:pr-12 p-8 transition-colors duration-700 group">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeUp}
              transition={smoothTransition}
            >
              <h2 className="text-micro text-primary mb-6">[ MISSION ]</h2>
               <h3 
                className="font-display uppercase tracking-tighter leading-[0.85] mb-8 group-hover:text-black"
                style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)" }}
              >
                Building <br/> Scalable <br/> Systems.
              </h3>
              
              <div className="w-12 h-12 bg-primary brutalist-border"></div>
            </motion.div>
          </div>

          {/* Right Column: Meaningful Description */}
          <div className="lg:col-span-6 flex flex-col justify-center p-8 transition-colors duration-700 group">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeUp}
              transition={{ ...smoothTransition, delay: 0.2 }}
            >
               <p className="text-xl md:text-3xl font-sans mb-12 leading-snug font-medium max-w-lg">
                 I am a Software Developer & Engineer. I build resilient APIs, scalable systems, and high-performance web applications with relentless precision.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {Object.entries(RESUME_DATA.skills).slice(0, 2).map(([category, skills]) => (
                    <div key={category} className="border-t brutalist-border pt-4">
                        <span className="block text-micro text-primary mb-4">
                            [ {category.toUpperCase()} ]
                        </span>
                        <div className="flex flex-col gap-1">
                            {skills.slice(0, 4).map(s => (
                                <span key={s} className="text-sm font-sans uppercase font-bold tracking-tight">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                 ))}
               </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t brutalist-border w-full mt-12 mb-6 lg:mt-24 lg:mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
            {["ARCHITECTURE", "PERFORMANCE", "SCALABILITY"].map((label, i) => (
                <motion.span
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    className="text-micro text-neutral-500 font-bold"
                >
                    // {label}
                </motion.span>
            ))}
        </div>
      </div>
    </section>
  );
}
