import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
};

/* Появление при входе во вьюпорт: только opacity/transform, сильная ease-out,
   один раз, с уважением к prefers-reduced-motion. */
export function Reveal({ children, className, style, delay = 0 }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.64, ease: [0.23, 1, 0.32, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
