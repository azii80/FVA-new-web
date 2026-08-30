"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll reveal. Every section uses this so the page has one motion language.
 * Honors prefers-reduced-motion by rendering the content already in place.
 */
export function Reveal({ children, delay = 0, y = 22, className, once = true }) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggers direct children of a grid/row without hand-tuning each delay.
 * Children opt in with `variants={revealItem}`, so the group must stay a
 * motion element even when motion is reduced — otherwise those children lose
 * their variant context and stick on the hidden state. Instead we start them
 * already shown and drop the stagger.
 */
export function RevealGroup({ children, className, stagger = 0.08 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        show: { transition: { staggerChildren: reduce ? 0 : stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
