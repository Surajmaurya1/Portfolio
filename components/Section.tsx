
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Section({ children, className, fullWidth = false, ...props }: SectionProps) {
  return (
    <section 
      className={cn(
        "relative py-20 lg:py-32",
        !fullWidth && "container mx-auto px-4 md:px-8",
        className
      )} 
      {...props}
    >
      {children}
    </section>
  )
}
