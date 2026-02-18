"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportConfig, smoothTransition } from "@/lib/animations";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Section({ children, className, fullWidth = false, ...props }: SectionProps) {
  return (
    <section 
      className={cn(
        "relative py-12 lg:py-24",
        !fullWidth && "container mx-auto px-4 md:px-8",
        className
      )} 
      {...props}
    >
      {children}
    </section>
  )
}
