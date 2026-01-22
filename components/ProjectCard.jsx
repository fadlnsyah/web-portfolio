import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function ProjectCard({ title, onClick }) {
  // Spotlight Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="
        group relative cursor-pointer
        bg-white dark:bg-slate-900/50
        border border-slate-200 dark:border-slate-800
        rounded-2xl p-6
        shadow-sm hover:shadow-xl
        transition-all duration-300
        overflow-hidden
        flex items-center justify-center
        min-h-[140px]
      "
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* SPOTLIGHT GRADIENT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-cyan-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* TITLE */}
      <div className="relative z-10 text-center">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view details →
        </p>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-cyan-100 dark:from-primary-900/30 dark:to-cyan-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
