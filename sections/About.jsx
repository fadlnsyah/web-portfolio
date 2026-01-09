import content from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import useReveal from "@/hooks/useReveal";

const techStack = [
  { name: "JavaScript", color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" },
  { name: "TypeScript", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { name: "PHP (Laravel)", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" },
  { name: "Java (Spring Boot)", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  { name: "Python", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  { name: "Next.js / React", color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" },
  { name: "MySQL & PostgreSQL", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400" },
  { name: "AWS & Cloud", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
];


export default function About() {
  const { lang } = useLanguage();
  const about = content[lang].about;
  const { ref, show } = useReveal();

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-28 md:py-36
                bg-gradient-to-b from-slate-50 to-white
                dark:from-slate-900 dark:to-slate-950"
    >
      {/* WRAPPER UTAMA */}
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* SECTION HEADER */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            {about.title}
          </h2>
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-cyan-400 mb-6" />
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative bg-white dark:bg-slate-800
                            rounded-3xl p-8
                            border border-slate-200/70 dark:border-slate-700
                            shadow-sm hover:shadow-xl
                            transition-all">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                {about.approach.title}
              </h3>

              <ul className="space-y-4">
                {about.approach.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-primary-500" />
                    <span className="text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-8">
              {about.skills.title}
            </h3>

            <div className="flex flex-wrap gap-3 mb-14">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-medium
                              shadow-sm hover:shadow-md
                              transition-transform hover:-translate-y-0.5
                              ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "2+", labelId: "Tahun Pengalaman", labelEn: "Years Experience" },
                { value: "10+", labelId: "Proyek Selesai", labelEn: "Projects Completed" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-primary-500 to-cyan-500
                            text-white rounded-3xl p-8
                            shadow-xl text-center"
                >
                  <div className="text-4xl font-extrabold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm opacity-90">
                    {lang === "id" ? stat.labelId : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>

  );
}
