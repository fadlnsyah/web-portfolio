import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import experienceData from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";
import useReveal from "@/hooks/useReveal";

// Documentation Modal with Image Carousel
function DocumentationModal({ images, title, isOpen, onClose, lang }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isOpen || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, images.length]);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-4xl bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          {lang === "id" ? "Dokumentasi" : "Documentation"} - {title}
        </h3>

        {/* Image Carousel */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`${title} - ${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-primary-500 w-5"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        {/* Image counter */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
          {currentIndex + 1} / {images.length}
        </p>
      </motion.div>
    </div>
  );
}

// Documentation Button
function DocumentationButton({ onClick, lang }) {
  return (
    <button
      onClick={onClick}
      className="
        mt-4 inline-flex items-center gap-2
        px-4 py-2 rounded-xl
        bg-primary-500/10 hover:bg-primary-500/20
        text-primary-600 dark:text-primary-400
        text-sm font-medium
        transition-colors
      "
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {lang === "id" ? "Lihat Dokumentasi" : "View Documentation"}
    </button>
  );
}

export default function Experience() {
  const { lang } = useLanguage();
  const [activeId, setActiveId] = useState(null);
  const [modalData, setModalData] = useState({ isOpen: false, images: [], title: "" });

  const {ref, show} = useReveal();

  const experience = experienceData[lang];

  const openModal = (images, title) => {
    setModalData({ isOpen: true, images, title });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, images: [], title: "" });
  };

  return (
    <>
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
                      {/* DOCUMENTATION BUTTON */}
                      {exp.images && exp.images.length > 0 && (
                        <DocumentationButton 
                          onClick={() => openModal(exp.images, exp.role)} 
                          lang={lang} 
                        />
                      )}

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

      {/* Documentation Modal */}
      <DocumentationModal
        images={modalData.images}
        title={modalData.title}
        isOpen={modalData.isOpen}
        onClose={closeModal}
        lang={lang}
      />
    </>
  );
}
