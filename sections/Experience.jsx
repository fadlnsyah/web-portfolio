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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-10"
        >
          <svg className="w-5 h-5 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 pr-10">
          {lang === "id" ? "Dokumentasi" : "Documentation"} — <span className="text-primary-600 dark:text-primary-400">{title}</span>
        </h3>

        {/* Image Carousel */}
        <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950/50">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{ opacity: idx === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={img}
                alt={`${title} - ${idx + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <div className="flex flex-col items-center mt-4 gap-2">
            <div className="flex justify-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-primary-500 w-6"
                      : "bg-slate-300 dark:bg-slate-700 w-1.5 hover:bg-primary-400"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Documentation Button
function DocumentationButton({ onClick, lang }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevent accordion toggle
        onClick();
      }}
      className="
        mt-4 inline-flex items-center gap-2
        px-4 py-2 rounded-xl
        bg-primary-500/10 hover:bg-primary-500/20
        text-primary-700 dark:text-primary-300
        text-sm font-semibold
        transition-colors
        border border-primary-200/50 dark:border-primary-800/30
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
        <div className="grid gap-6">
          {experience.map((exp, index) => {
            const isOpen = activeId === exp.id;

            return (
              <motion.div
                    key={exp.id}
                    layout 
                    initial={{ opacity: 0, y: 30 }}
                    animate={show ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1,
                        ease: "easeOut",
                    }}
                    className={`
                        group relative overflow-hidden
                        bg-white dark:bg-slate-900/40
                        border transition-all duration-500
                        rounded-3xl p-8
                        ${isOpen 
                          ? "border-primary-500/30 shadow-xl shadow-primary-500/5 ring-1 ring-primary-500/30" 
                          : "border-slate-200 dark:border-slate-800 hover:border-primary-300 dark:hover:border-primary-700 shadow-sm hover:shadow-lg"}
                    `}
                    onClick={() => setActiveId(isOpen ? null : exp.id)}
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-transparent dark:from-primary-900/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* HEADER */}
                <div className="relative cursor-pointer z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                        {/* Status Icon */}
                        <motion.div 
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500 dark:group-hover:bg-slate-800"}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.div>
                        
                        <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {exp.role}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 font-medium mt-1">
                            {exp.company}
                        </p>
                        </div>
                    </div>

                    <div className="md:text-right pl-12 md:pl-0">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {exp.period}
                        </span>
                    </div>
                  </div>
                </div>

                {/* DETAILS */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden pl-0 md:pl-12"
                    >
                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/50 mt-6">
                            {/* TECH STACK */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {exp.tech.map((t) => (
                                <span
                                    key={t}
                                    className="
                                    px-3 py-1 text-[11px] font-semibold uppercase tracking-wider
                                    rounded-full
                                    bg-primary-50 dark:bg-primary-900/20
                                    text-primary-700 dark:text-primary-300
                                    border border-primary-100 dark:border-primary-800/30
                                    "
                                >
                                    {t}
                                </span>
                                ))}
                            </div>

                            <ul className="space-y-4">
                                {exp.responsibilities.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed"
                                >
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0 shadow-[0_0_8px_rgba(14,165,233,0.6)]" />
                                    {item}
                                </li>
                                ))}
                            </ul>

                            {/* DOCUMENTATION BUTTON */}
                            {exp.images && exp.images.length > 0 && (
                                <DocumentationButton 
                                onClick={() => openModal(exp.images, exp.role)} 
                                lang={lang} 
                                />
                            )}
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>

      {/* Documentation Modal */}
      <AnimatePresence>
        {modalData.isOpen && (
            <DocumentationModal
                images={modalData.images}
                title={modalData.title}
                isOpen={modalData.isOpen}
                onClose={closeModal}
                lang={lang}
            />
        )}
      </AnimatePresence>
    </>
  );
}

