import content from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};


export default function Hero() {
  const { lang } = useLanguage();
  const hero = content[lang].hero;

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center
        bg-gradient-to-b from-slate-50 via-white to-white
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-950
        overflow-hidden
      "
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-primary-300/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] bg-cyan-300/20 dark:bg-cyan-900/20 rounded-full blur-3xl" />
      </div>

     <motion.div
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-center"
        variants={container}
        initial="hidden"
        animate="show"
     >
        {/* LEFT – TEXT */}
        <div className="md:col-span-3">
          <motion.p
            variants={item}
            className="text-lg text-slate-600 dark:text-slate-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
              {hero.name}
            </span>
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
                transition-all
              "
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              {hero.cta.projects}
            </motion.button>

            <motion.button
              onClick={() => handleScroll("contact")}
              className="
                px-8 py-4 rounded-2xl
                font-semibold
                text-slate-900 dark:text-white
                bg-white dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                hover:border-primary-400
                transition-all
              "
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              {hero.cta.contact}
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT – PHOTO */}
        <motion.div
          className="relative flex justify-center md:col-span-2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >

          <div className="relative">
            <div className="
              w-52 h-52 md:w-64 md:h-64 rounded-full
              overflow-hidden
              ring-8 ring-primary-100 dark:ring-primary-900/40
              shadow-2xl
            ">
              <Image
                src="/images/profile-removebg-preview.png"
                alt="Fadlan"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* STATUS */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-md">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Available for work
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
