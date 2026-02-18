
"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { RESUME_DATA } from "@/data/resume";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { ScrollRevealText } from "./ScrollRevealText";
import { fadeUp, smoothTransition, staggerContainer } from "@/lib/animations";
import Link from "next/link";

export function Contact() {
  return (
    <Section id="contact" className="py-20 lg:py-32 bg-transparent">
        <div className="container mx-auto px-4 md:px-8">
            <motion.div 
                initial={{ opacity: 0, width: "0%" }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
                className="w-full h-px bg-white/20 mb-12 lg:mb-20" 
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                 {/* Title - Sticky */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        transition={smoothTransition}
                        viewport={{ once: true, margin: "-10%" }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold font-display tracking-tighter leading-[0.9] text-white uppercase break-words">
                            <ScrollRevealText
                            text="Let's Connect"
                            className="block text-left"
                            tagName="span"
                            />
                        </h2>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                     <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeUp}
                        transition={smoothTransition}
                        viewport={{ once: true, margin: "-10%" }}
                        className="mb-12"
                    >
                        <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl">
                             Open for opportunities to bring value to high-performance engineering teams.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        className="flex flex-col"
                    >
                        {[
                            { label: "Email Me", href: RESUME_DATA.contacts.email, icon: Mail },
                            { label: "LinkedIn", href: RESUME_DATA.contacts.linkedin, icon: Linkedin },
                            { label: "GitHub", href: RESUME_DATA.contacts.github, icon: Github }
                        ].map((item, index) => (
                             <motion.div 
                                key={item.label}
                                variants={fadeUp}
                                transition={smoothTransition}
                            >
                                <Link 
                                    href={item.href}
                                    target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                                    className="group flex items-center justify-between py-8 md:py-10 border-t border-white/10 last:border-b hover:px-4 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <item.icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                                        <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
                                            {item.label}
                                        </span>
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-neutral-500 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </Section>
  );
}
