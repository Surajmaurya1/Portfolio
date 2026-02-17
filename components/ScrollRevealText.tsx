
"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";

  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0],
  );

  return (
    <motion.span
      className={cn("inline-block", isSpace && "w-4")}
      style={{
        x,
        rotateX,
      }}
    >
      {char}
    </motion.span>
  );
};

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export const ScrollRevealText = ({ text, className }: ScrollRevealTextProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"]
  });

  const words = text.split(" ");
  // Calculate total characters to determine center index correctly
  const totalChars = text.length; 
  const centerIndex = Math.floor(totalChars / 2);
  
  let globalCharIndex = 0;

  return (
    <div
      ref={targetRef}
      className={cn("text-center w-full overflow-hidden py-4", className)}
      style={{
        perspective: "500px",
      }}
    >
        {words.map((word, i) => {
            const isLastWord = i === words.length - 1;
            
            return (
                <React.Fragment key={i}>
                    <span className="inline-block whitespace-nowrap">
                        {word.split("").map((char) => (
                             <CharacterV1
                                key={globalCharIndex}
                                char={char}
                                index={globalCharIndex++}
                                centerIndex={centerIndex}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </span>
                     {/* Add space except for last word */}
                    {!isLastWord && (
                         <CharacterV1
                            key={globalCharIndex}
                            char=" "
                            index={globalCharIndex++}
                            centerIndex={centerIndex}
                            scrollYProgress={scrollYProgress}
                        />
                    )}
                </React.Fragment>
            );
        })}
    </div>
  );
};
