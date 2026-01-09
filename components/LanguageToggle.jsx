import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.button
      onClick={toggleLang}
      className="px-3 py-1.5 text-sm font-medium border border-slate-200 dark:border-slate-700 rounded-lg 
                 text-slate-600 dark:text-slate-400 
                 hover:bg-slate-100 dark:hover:bg-slate-800 
                 hover:border-slate-300 dark:hover:border-slate-600
                 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {lang === "id" ? "EN" : "ID"}
    </motion.button>
  );
}
