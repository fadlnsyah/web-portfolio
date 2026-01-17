import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function KaggleIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.285z" />
    </svg>
  );
}

function JournalIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

export default function ProjectCard({ title, description, tech, github, kaggle, journal, youtube, website, images }) {
  const imageList = images ? (Array.isArray(images) ? images : [images]) : [];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Spotlight Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Auto-slide every 3 seconds
  React.useEffect(() => {
    if (imageList.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 3500); // Slightly slower for better viewing

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <motion.div
      className="
        group relative h-full
        bg-white dark:bg-slate-900/50
        border border-slate-200 dark:border-slate-800
        rounded-3xl p-6 sm:p-8
        shadow-sm hover:shadow-2xl
        transition-all duration-500
        overflow-hidden
      "
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {/* SPOTLIGHT GRADIENT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* IMAGE CAROUSEL */}
      {imageList.length > 0 && (
        <div className="relative w-full h-52 mb-6 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800/50">
          {imageList.map((img, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{ 
                opacity: idx === currentIndex ? 1 : 0,
                scale: idx === currentIndex ? 1 : 1.05
              }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={img}
                alt={`${title} - ${idx + 1}`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={idx === 0} // Only prioritize first image
              />
            </motion.div>
          ))}
          
          {/* Dots indicator */}
          {imageList.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-primary-500 w-6"
                      : "bg-slate-300/80 dark:bg-slate-600/80 w-1.5 hover:bg-primary-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col h-[calc(100%-14rem)]">
        {/* TITLE */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>

        {/* DESCRIPTION - Increased contrast (slate-500 -> 600 dark:300 -> 200) */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tech.map((t) => (
            <span
              key={t}
              className="
                px-3 py-1 text-[11px] font-semibold track-wide uppercase
                rounded-full
                bg-slate-100 dark:bg-slate-800
                text-slate-600 dark:text-slate-300
                border border-slate-200 dark:border-slate-700
                group-hover:border-primary-200 dark:group-hover:border-primary-800
                transition-colors
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <GitHubIcon />
              <span className="relative">
                Code
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
              </span>
            </a>
          )}

          {kaggle && (
            <a
              href={kaggle}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors"
            >
              <KaggleIcon />
              <span className="relative">
                Kaggle
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
              </span>
            </a>
          )}

          {journal && (
            <a
              href={journal}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
            >
              <JournalIcon />
              <span className="relative">
                Journal
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
              </span>
            </a>
          )}

          {youtube && (
            <a
              href={youtube}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors"
            >
              <YouTubeIcon />
              <span className="relative">
                Demo
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
              </span>
            </a>
          )}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ExternalLinkIcon />
              <span className="relative">
                Visit
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

