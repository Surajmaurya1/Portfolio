"use client";

import { useEffect, useState } from "react";
import CountUp from "./CountUp"; 
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "wait";
    } else {
      document.body.style.overflow = "";
      document.body.style.cursor = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.cursor = "";
    };
  }, [show]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
           key="preloader"
           initial={{ y: 0 }}
           exit={{ y: "-100%" }}
           transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
           className="fixed inset-0 z-[9999] flex items-end justify-between p-8 bg-background text-foreground cursor-wait brutalist-border"
        >
           {/* Decorative elements */}
           <div className="absolute top-8 left-8 text-micro text-neutral-500 animate-pulse">
             SYSTEM INITIALIZING...
           </div>
           <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary"></div>
           <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary"></div>

           <div className="flex items-end justify-end w-full text-9xl md:text-[15rem] leading-none font-bold font-display tracking-tighter overflow-hidden text-primary">
                <CountUp 
                  to={100} 
                  duration={1.5} 
                  onEnd={() => {
                     setTimeout(() => setShow(false), 200);
                  }}
                  className="tabular-nums leading-none tracking-tighter"
                />
                <span className="text-4xl md:text-8xl mb-4 md:mb-12 ml-2">%</span>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
