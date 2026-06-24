import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  /** Сдвиг снизу в пикселях (по умолчанию мягкий подъём). */
  y?: number;
};

/* Появление при входе во вьюпорт.
   - длиннее (0.95s) и с мягкой кривой замедления, чтобы не было резкого «выскока»;
   - запускается рано (amount: 0.12), пока блок только входит снизу, поэтому
     движение читается как плавное проявление, а не как щелчок;
   - только opacity/transform (GPU), с уважением к prefers-reduced-motion. */
export function Reveal({ children, className, style, delay = 0, y = 28 }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduce ? 0.2 : 0.95,
        delay: reduce ? 0 : delay,
        ease: [0.22, 0.61, 0.36, 1], // мягкое замедление, без рывка в начале
        opacity: { duration: reduce ? 0.2 : 1.1, delay: reduce ? 0 : delay },
      }}
    >
      {children}
    </motion.div>
  );
}
