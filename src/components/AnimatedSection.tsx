"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  "aria-labelledby"?: string;
}

export default function AnimatedSection({ children, className = "", delay = 0, id, "aria-labelledby": ariaLabelledBy }: Props) {
  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledBy}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
