import content from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
};

const photoVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  show: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3
    }
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const hero = content[lang].hero;
  const sectionRef = useRef(null);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="
        relative min-h-screen flex items-center
        bg-gradient-to-b from-slate-50 via-white to-white
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-950
        overflow-hidden
      "
    >
      {/* ANIMATED BACKGROUND DECOR */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        {/* Primary blob - floating animation */}
        <motion.div 
          className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-primary-300/30 dark:bg-primary-900/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary blob - different timing */}
        <motion.div 
          className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] bg-cyan-300/20 dark:bg-cyan-900/20 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Extra decorative elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400/40 rounded-full"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/3 w-3 h-3 bg-cyan-400/40 rounded-full"
          animate={{
            y: [15, -15, 15],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary-300/50 rounded-full"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-center"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: textY }}
      >
        {/* LEFT – TEXT */}
        <div className="md:col-span-3">
          <motion.p
            variants={item}
            className="text-lg text-slate-600 dark:text-slate-400 mb-4"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            <motion.span 
              className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {hero.name}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-6"
          >
            {hero.role}
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-10"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => handleScroll("projects")}
              className="
                px-8 py-4 rounded-2xl
                font-semibold text-white
                bg-gradient-to-r from-primary-600 to-cyan-500
                shadow-lg shadow-primary-500/30
                hover:shadow-xl hover:shadow-primary-500/40
                transition-all relative overflow-hidden
              "
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Shimmer effect overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10">{hero.cta.projects}</span>
            </motion.button>

            <motion.button
              onClick={() => handleScroll("contact")}
              className="
                px-8 py-4 rounded-2xl
                font-semibold
                text-slate-900 dark:text-white
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                hover:border-primary-400 dark:hover:border-primary-500
                transition-all
              "
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {hero.cta.contact}
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT – PHOTO */}
        <motion.div
          className="relative flex justify-center md:col-span-2"
          variants={photoVariant}
        >
          {/* Animated ring behind photo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full border-2 border-dashed border-primary-200/50 dark:border-primary-800/30" />
          </motion.div>

          <motion.div 
            className="relative"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="
              w-52 h-52 md:w-64 md:h-64 rounded-full
              overflow-hidden
              ring-8 ring-primary-100 dark:ring-primary-900/40
              shadow-2xl
            ">
              <Image
                src="/images/profile/profile.png"
                alt="Fadlan"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* STATUS - with pulse animation */}
            <motion.div 
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-md"
              initial={{ opacity: 0, scale: 0, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <motion.span 
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {lang === "id" ? "Tersedia untuk kerja" : "Available for work"}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => handleScroll("about")}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {lang === "id" ? "Scroll ke bawah" : "Scroll down"}
          </span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 flex justify-center pt-2"
            animate={{
              borderColor: ["rgba(148, 163, 184, 0.5)", "rgba(59, 130, 246, 0.5)", "rgba(148, 163, 184, 0.5)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-1.5 h-3 bg-slate-400 dark:bg-slate-500 rounded-full"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
