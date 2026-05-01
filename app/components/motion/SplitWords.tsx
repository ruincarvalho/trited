"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
  triggerOnView?: boolean;
};

export default function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
  y = 28,
  triggerOnView = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const start = triggerOnView ? inView : true;
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.08em" }}
        >
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            initial={{ y, opacity: 0 }}
            animate={start ? { y: 0, opacity: 1 } : { y, opacity: 0 }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: "circOut",
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
