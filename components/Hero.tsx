
"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <h2 className="text-sm md:text-base font-medium text-accent tracking-widest uppercase mb-4">
          Senior Frontend Engineer
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[1.1] text-gradient">
          Suraj Maurya
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Building scalable, high-performance web applications with clean architecture and production-grade frontend systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button href="#projects" size="lg" className="w-full sm:w-auto">
            View Work
          </Button>
          <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto">
            Let's Collaborate
          </Button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
