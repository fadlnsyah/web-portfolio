import { useEffect, useRef, useState } from "react";
import projects from "@data/projects";
import ProjectCard from "@components/ProjectCard";
import useReveal from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref, show } = useReveal();
  const { lang } = useLanguage();

  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const scrollByAmount = 420;

  const scrollLeft = () => {
    setAutoScroll(false);
    scrollRef.current?.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    setAutoScroll(false);
    scrollRef.current?.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });
  };

  // ===== AUTO SCROLL =====
  useEffect(() => {
    if (!autoScroll) return;

    autoScrollRef.current = setInterval(() => {
      scrollRef.current?.scrollBy({
        left: scrollByAmount,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(autoScrollRef.current);
  }, [autoScroll]);

  return (
    <section
      ref={ref}
      id="projects"
      className="
        relative
        py-28 md:py-36
        bg-gradient-to-b from-white to-slate-50
        dark:from-slate-950 dark:to-slate-900
      "
    >
      {/* ===== CONTAINER UTAMA ===== */}
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* ================= HEADER + BUTTON ================= */}
        <motion.div
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              {lang === "id" ? "Proyek Unggulan" : "Featured Projects"}
            </h2>

            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-cyan-400 mb-6" />

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === "id"
                ? "Beberapa proyek pilihan yang mencerminkan kemampuan saya dalam membangun aplikasi web modern dan solusi berbasis data."
                : "A selection of projects that showcase my ability to build modern web applications and data-driven solutions."}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="hidden md:flex gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="
                w-11 h-11 flex items-center justify-center
                rounded-full
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                shadow-sm hover:shadow-md
                transition
              "
            >
              ←
            </button>

            <button
              onClick={scrollRight}
              className="
                w-11 h-11 flex items-center justify-center
                rounded-full
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                shadow-sm hover:shadow-md
                transition
              "
            >
              →
            </button>
          </div>
        </motion.div>

        {/* ================= PROJECT SCROLLER ================= */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden"
        >
          <div
            className="
              grid grid-flow-col
              auto-cols-[85%]
              sm:auto-cols-[60%]
              md:auto-cols-[48%]
              gap-8
            "
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
