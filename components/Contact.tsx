"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { RESUME_DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";
import Link from "next/link";

export function Contact() {
  return (
    <Section id="contact" className="py-20 lg:py-32 bg-background border-t brutalist-border">
        <div className="container mx-auto px-4 md:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 mt-8 mb-24">
                 {/* Title - Sticky */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit lg:border-r brutalist-border lg:pr-12">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        transition={smoothTransition}
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        <h2 className="text-micro text-primary mb-4">[ 06 ] INITIATE CONTACT</h2>
                        <h3 
                            className="font-display text-white uppercase break-words leading-[0.9] tracking-tight"
                            style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
                        >
                            Start The <br/> Dialog.
                        </h3>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 flex flex-col justify-end lg:pl-12">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        transition={smoothTransition}
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        <p className="text-xl md:text-3xl text-neutral-300 font-sans leading-snug max-w-2xl">
                            Always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                        </p>
                    </motion.div>
                </div>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-col border-t brutalist-border"
            >
                {[
                    { label: "EMAIL", href: RESUME_DATA.contacts.email },
                    { label: "LINKEDIN", href: RESUME_DATA.contacts.linkedin },
                    { label: "GITHUB", href: RESUME_DATA.contacts.github }
                ].map((item, index) => (
                        <motion.div 
                        key={item.label}
                        variants={fadeUp}
                        transition={smoothTransition}
                    >
                        <Link 
                            href={item.href}
                            target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                            className="group flex flex-row items-center justify-start py-12 md:py-20 border-b brutalist-border transition-colors duration-500 hover:bg-primary hover:px-4 md:hover:px-8 relative overflow-hidden gap-4 md:gap-8"
                        >
                            <span className="text-[clamp(2.5rem,8vw,12rem)] font-bold font-display leading-[0.8] text-white group-hover:text-black transition-colors tracking-tighter uppercase relative z-10 w-auto text-left">
                                {item.label}
                            </span>
                            
                            <div className="relative z-10 flex-shrink-0">
                                <ArrowUpRight className="w-10 h-10 md:w-20 md:h-20 text-neutral-700 group-hover:text-black group-hover:rotate-45 transition-all duration-500" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </Section>
  );
}
