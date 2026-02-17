
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
           className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white cursor-wait"
        >
           <div className="flex items-start justify-center text-8xl md:text-9xl font-bold font-display tracking-tighter overflow-hidden">
                <CountUp 
                  to={100} 
                  duration={1.5} 
                  onEnd={() => {
                     setTimeout(() => setShow(false), 200);
                  }}
                  className="tabular-nums leading-none"
                />
                <span className="text-4xl md:text-5xl mt-2 md:mt-4">%</span>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
