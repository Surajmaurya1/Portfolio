"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import React from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  tagName?: keyof React.JSX.IntrinsicElements;
}

export const ScrollRevealText = ({ 
  text, 
  className,
  wordClassName,
  tagName = "h2"
}: ScrollRevealTextProps) => {
  const words = text.split(" ");
  const MotionTag = motion.create(tagName as any);

  return (
    <MotionTag
      className={cn("overflow-hidden", className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <span className="screen-reader-text sr-only">{text}</span>
      <span aria-hidden="true" className="block">
        {words.map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap">
            <motion.span
              className={cn("inline-block", wordClassName)}
              variants={staggerItem}
            >
              {word}
            </motion.span>
            {/* Add space after word if not last */}
            {i !== words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </span>
    </MotionTag>
  );
};
