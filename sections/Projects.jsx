import { useState } from "react";
import projectsData from "@data/projects";
import ProjectCard from "@components/ProjectCard";
import ProjectModal from "@components/ProjectModal";
import useReveal from "@/hooks/useReveal";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { ref, show } = useReveal();
  const { lang } = useLanguage();
  const projects = projectsData[lang];
  
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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

        {/* ================= PROJECT GRID (3 COLUMNS) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProjectCard
                title={project.title}
                onClick={() => handleOpenModal(project)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
