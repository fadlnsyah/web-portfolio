import content from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import LanguageToggle from "./LanguageToggle";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sun icon component
function SunIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

// Moon icon component
function MoonIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}

// Menu icon for mobile
function MenuIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

// Close icon for mobile menu
function CloseIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function Navbar() {
  const { lang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const nav = content[lang]?.nav;

  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];

    const onScroll = () => {
      const scrollY = window.scrollY + 120;

      // Check if scrolled for shadow effect
      setScrolled(window.scrollY > 10);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        if (
          scrollY >= el.offsetTop &&
          scrollY < el.offsetTop + el.offsetHeight
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!nav) return null;

  const navItems = [
    { id: "home", label: nav.home },
    { id: "about", label: nav.about },
    { id: "experience", label: nav.experience },
    { id: "projects", label: nav.projects },
    { id: "contact", label: nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm"
          : "bg-white dark:bg-slate-900"
        } border-b border-slate-200 dark:border-slate-800`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.span
          onClick={() => handleScroll("home")}
          className="font-bold text-xl cursor-pointer bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Fadlan
        </motion.span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${active === item.id
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Language Toggle */}
          <LanguageToggle />

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
          >
            <ul className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => handleScroll(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active === item.id
                        ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
