import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import experienceData from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";
import useReveal from "@/hooks/useReveal";

export default function Experience() {
  const { lang } = useLanguage();
  const [activeId, setActiveId] = useState(null);

  const {ref, show} = useReveal();

  const experience = experienceData[lang];

  return (
    <section
      ref={ref}
      id="experience"
      className="
        relative py-28 md:py-36
        bg-gradient-to-b from-white to-slate-50
        dark:from-slate-900 dark:to-slate-950
      "
    >
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        >

        {/* HEADER */}
        <motion.div
            className="mb-20 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
        >

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            {lang === "id" ? "Pengalaman" : "Experience"}
          </h2>
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-cyan-400 mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {lang === "id"
              ? "Pengalaman profesional dalam pengembangan software dan analisis data."
              : "Professional experience in software engineering and data analytics."}
          </p>
        </motion.div>

        {/* EXPERIENCE CARDS */}
        <div className="grid gap-8">
          {experience.map((exp, index) => {
            const isOpen = activeId === exp.id;

            return (
              <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={show ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: 0.25 + index * 0.1,
                        ease: "easeOut",
                    }}
                    className="
                        bg-white dark:bg-slate-800
                        border border-slate-200 dark:border-slate-700
                        rounded-3xl p-8
                        shadow-sm hover:shadow-xl
                        transition-all
                    "
                >

                {/* HEADER */}
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setActiveId(isOpen ? null : exp.id)
                  }
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {exp.company}
                      </p>
                    </div>

                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  {/* TECH STACK */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="
                          px-3 py-1 text-xs font-medium
                          rounded-full
                          bg-slate-100 dark:bg-slate-700
                          text-slate-600 dark:text-slate-300
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DETAILS */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-6 space-y-3">
                        {exp.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                          >
                            <span className="mt-2 w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* HINT */}
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                  {isOpen
                    ? lang === "id"
                      ? "Klik untuk menutup detail"
                      : "Click to collapse details"
                    : lang === "id"
                    ? "Klik untuk melihat detail pekerjaan"
                    : "Click to view role details"}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
