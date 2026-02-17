
"use client";

import { useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const DebugPanel = ({ isVisible = true }: { isVisible?: boolean }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [count, setCount] = useState(0);
  const [keyPressed, setKeyPressed] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeyPressed(e.key);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleClick = () => {
      setCount((prev) => prev + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-12 right-12 z-40 hidden md:flex flex-col items-start pointer-events-none p-4">
       {/* Label Section */}
      

      {/* Code Block Section */}
      <div className="font-mono text-sm text-red-500">
        <div>{"{"}</div>
        <div className="pl-6 flex flex-col gap-1">
            <DebugLine label="count" value={count} />
            <DebugLine label="mouseX" value={mouseX} />
            <DebugLine label="mouseY" value={mouseY} />
            <DebugLine label="keyPressed" value={keyPressed || "null"} />
        </div>
        <div>{"}"}</div>
      </div>
    </div>
  );
};

const DebugLine = ({ label, value }: { label: string; value: any }) => {
  // Helper to render motion values or static values
  const displayValue = value && typeof value === "object" && "get" in value 
    ? Math.round(value.get()) 
    : value;

  // We need a way to subscribe to motion value updates for rendering if it's a motion value.
  // Since we are inside a standard React component, useMotionValue updates won't trigger re-renders of this text 
  // unless we use a motion component or state. 
  // However, for simplicity and performance in this specific "code look", 
  // let's stick to the raw value for static props, and for motion values, 
  // ideally we should use <motion.span>{value}</motion.span>.
  
  if (value && typeof value === "object" && "get" in value) {
     return (
        <div>
          {label}: <DisplayMotionValue value={value} />;
        </div>
     )
  }

  return (
    <div>
      {label}: {displayValue};
    </div>
  );
};

import { useTransform, motion } from "framer-motion";

const DisplayMotionValue = ({ value }: { value: any }) => {
    // Transform to integer string for display
    const rounded = useTransform(value, (v: number) => Math.round(v));
    return <motion.span>{rounded}</motion.span>;
}
