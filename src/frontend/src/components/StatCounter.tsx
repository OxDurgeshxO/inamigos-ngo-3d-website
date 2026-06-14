import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
  index: number;
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

export default function StatCounter({
  value,
  suffix,
  label,
  duration = 1500,
  index,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(value, duration, isInView);

  return (
    <motion.div
      ref={ref}
      data-ocid={`impact.stat.${index + 1}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="text-center"
    >
      <div className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary leading-none">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1.5 text-sm font-body font-medium text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}
