import { useEffect, useRef, useState } from "react";
import projectsData from "@data/projects";
import ProjectCard from "@components/ProjectCard";
import useReveal from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref, show } = useReveal();
  const { lang } = useLanguage();
  
  const projects = projectsData[lang];

  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const scrollByAmount = 420;

  // ===== MOUSE DRAG STATE (TAMBAHAN MINIMAL) =====
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
    setAutoScroll(false);
  };

  const onMouseLeave = () => {
    isDown.current = false;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  // ===== AUTO SCROLL (TETAP ADA, TIDAK DIUBAH) =====
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
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* ================= HEADER ================= */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
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
        </motion.div>

        {/* ================= PROJECT SCROLLER ================= */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="
            overflow-x-auto
            overflow-y-hidden
            scrollbar-hide
            cursor-grab active:cursor-grabbing
            select-none
          "
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
