import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Split logo text for stagger animation
  const logoText = "yogesh".split("");

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(section => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'Projects', href: '#projects', icon: '💼' },
  ];

  // Refined animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    hover: { 
      scale: 1.05,
      filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.5))",
      transition: { 
        type: "tween",
        duration: 0.2,
        ease: "easeOut"
      }
    },
    float: {
      y: [0, -4, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3 + (i * 0.08)
      }
    }),
    hover: { 
      y: -2,
      scale: 1.01,
      transition: { 
        type: "tween",
        duration: 0.15,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { 
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.08
      }
    }
  };

  const mobileLinkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: i * 0.05
      }
    })
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrollYProgress > 0.1 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center h-20">
          {/* TEXT LOGO - Replaces image */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate={["visible", "float"]}
            whileHover="hover"
            className="cursor-pointer select-none"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            <motion.h1 className="text-3xl md:text-4xl font-extrabold flex gap-0.5">
              {logoText.map((letter, i) => (
                <motion.span
                  key={i}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  whileHover={{ 
                    scale: 1.2,
                    color: "#2563eb",
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href={link.href} 
                  className={`relative group flex items-center gap-2 font-medium transition-colors ${
                    activeSection === link.href.substring(1) 
                      ? 'text-indigo-600' 
                      : 'text-slate-700 dark:text-slate-300 hover:text-indigo-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl">{link.icon}</span>
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    animate={activeSection === link.href.substring(1) ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  />
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -top-2 -right-2 w-2 h-2 bg-indigo-500 rounded-full"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <motion.button
            className="md:hidden relative z-50 text-indigo-600 dark:text-indigo-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <HiX size={28} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <HiMenu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-slate-800 shadow-2xl md:hidden"
              >
                <div className="flex flex-col pt-24 pb-8 px-8 h-full">
                  <ul className="space-y-6">
                    {navLinks.map((link, index) => (
                      <motion.li key={link.name} custom={index} variants={mobileLinkVariants}>
                        <motion.a 
                          href={link.href} 
                          className="flex items-center gap-4 text-2xl font-semibold py-3"
                          onClick={() => setIsMenuOpen(false)}
                          whileHover={{ x: 8 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-3xl">{link.icon}</span>
                          <span className={activeSection === link.href.substring(1) ? 'text-indigo-600' : 'text-slate-800 dark:text-slate-200'}>
                            {link.name}
                          </span>
                          {activeSection === link.href.substring(1) && (
                            <motion.span className="ml-auto w-3 h-3 bg-indigo-500 rounded-full" />
                          )}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-center text-slate-500 text-sm">© Yogesh Portfolio</p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}