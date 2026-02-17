
"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Button } from "./Button";
import { RESUME_DATA } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-surface/20 to-transparent">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-gradient mb-8"
        >
          Let's build something exceptional together.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed"
        >
          Open for opportunities to bring value to high-performance engineering teams.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button href={RESUME_DATA.contacts.email} size="lg" className="min-w-[180px]">
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </Button>
          <Button href={RESUME_DATA.contacts.linkedin} variant="secondary" size="lg" className="min-w-[180px]">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button href={RESUME_DATA.contacts.github} variant="outline" size="lg" className="min-w-[180px]">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
