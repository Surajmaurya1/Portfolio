
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { fadeUp, smoothTransition } from "@/lib/animations";
import { ScrollRevealText } from "./ScrollRevealText";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [0.6, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-4 md:px-8 pb-8 overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-x-0 -top-[20%] h-[150%] z-0"
      >
        <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40 grayscale hover:grayscale-0 transition-all duration-700 blur-[1px]"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2546&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={smoothTransition}
        className="relative z-10 w-full max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 md:pb-24 overflow-hidden"
      >
        {/* <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10 hidden lg:block">
            <span className="font-mono text-sm text-neutral-500 uppercase tracking-widest">[ 2026 ]</span>
        </div> */}

        {/* Massive Name - Stacked or wrapped */}
        <div className="lg:col-span-8 order-2 lg:order-1">
            <h1 className="font-bold font-display tracking-[-0.04em] leading-[0.8] text-white uppercase break-words mix-blend-difference"
                style={{ fontSize: "clamp(4.5rem, 11vw, 9rem)" }}>
                <ScrollRevealText 
                    text="Suraj Maurya" 
                    className="flex flex-col items-start"
                    tagName="span"
                    wordClassName="inline-block"
                />
            </h1>
        </div>

        {/* Description & Meta - Right aligned on desktop */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col justify-end items-start lg:items-end mb-4 lg:mb-8 space-y-6">
             {/* <div className="text-right hidden lg:block">
                <span className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">[ LOCATION ]</span>
                <span className="block text-white font-medium font-[family-name:var(--font-playfair)] italic text-lg">India, Earth</span>
             </div>
             
             <div className="text-right hidden lg:block">
                <span className="block text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">[ STATUS ]</span>
                <span className="block text-white font-medium flex items-center gap-2 justify-end">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Available for new projects
                </span>
             </div> */}

            <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed max-w-sm text-left lg:text-right">
                <span className="font-[family-name:var(--font-playfair)] italic">Frontend Engineer</span> focused on building <span className="font-[family-name:var(--font-playfair)] italic">scalable</span>, high-performance web applications with clean architecture.
            </p>
            
            <div className="flex gap-6">
                 <Link href="#projects" className="text-white border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all uppercase text-sm tracking-widest">
                    [ View Work ]
                 </Link>
                 <Link href="#contact" className="text-white border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all uppercase text-sm tracking-widest">
                    [ Contact ]
                 </Link>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
