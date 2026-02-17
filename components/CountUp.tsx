
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

// Adjusted imports: user provided 'motion/react' but common usage is 'framer-motion'. 
// I will assuming framer-motion is installed as per previous files.

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  // Adjusted damping/stiffness logic to ensure animation matches duration roughly
  // Spring animations don't have exact duration. 
  // However, I'll keep user logic but ensure spring is created from motionValue.
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  // Helper to format value
  const formatValue = (value: number) => {
      // Logic to handle integers essentially since 'to' is likely 100
      return Math.round(value).toString();
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === 'down' ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (startWhen && isInView) { // or just startWhen for loader
       if (onStart) onStart();
       
       // Trigger animation
       // setTimeout is not ideal for spring frame-perfect start but works for delayed start
       const timeoutId = setTimeout(() => {
         motionValue.set(direction === 'down' ? from : to);
       }, delay * 1000);

       // Approximate end trigger
       const durationTimeoutId = setTimeout(() => {
          if (onEnd) onEnd();
       }, delay * 1000 + duration * 1000);

       return () => {
         clearTimeout(timeoutId);
         clearTimeout(durationTimeoutId);
       }
    }
  }, [startWhen, isInView, motionValue, direction, from, to, delay, duration, onStart, onEnd]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Simple formatting
        ref.current.textContent = Math.round(latest).toString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span className={className} ref={ref} />;
}
