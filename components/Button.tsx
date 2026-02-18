"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { hoverScaleWrapper } from "@/lib/animations";

const MotionLink = motion.create(Link);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({ 
  children, 
  className, 
  href, 
  variant = "primary", 
  size = "md",
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium duration-300 disabled:opacity-50 disabled:pointer-events-none group";
  
  const variantsStyles = {
    primary: "bg-white text-black hover:bg-neutral-200 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700",
    outline: "bg-transparent border border-neutral-700 text-neutral-300 hover:text-white hover:border-white",
    ghost: "bg-transparent text-neutral-400 hover:text-white hover:bg-white/5",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variantsStyles[variant], sizes[size], className);
  
  const motionProps = {
    whileHover: "hover",
    whileTap: { scale: 0.95 },
    variants: hoverScaleWrapper
  };

  if (href) {
    if (href.startsWith("http")) {
      return (
        <motion.a 
            href={href} 
            className={classes} 
            target="_blank" 
            rel="noopener noreferrer"
            {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <MotionLink href={href} className={classes} {...motionProps}>
        {children}
      </MotionLink>
    );    
  }

  return (
    <motion.button className={classes} {...props as any} {...motionProps}>
      {children}
    </motion.button>
  );
}
