"use client";

import { m as motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';


export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Scroll Appearance
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  // Active Section Spy
  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY < 100 && window.location.pathname === '/') {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScrollTop, { passive: true });

    let observer;

    const observeSections = () => {
      const pathname = window.location.pathname;
      if (pathname !== '/') {
        if (pathname.startsWith('/blog')) setActiveSection('blog');
        else if (pathname.startsWith('/about')) setActiveSection('about');
        return true;
      }

      const hashLinks = navLinks.filter(link => link.href.includes('#'));
      const sectionElements = hashLinks
        .map(link => {
          const id = link.href.split('#')[1];
          return document.querySelector(`#${id}`);
        })
        .filter(el => el !== null);

      if (sectionElements.length > 0) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // For long sections, even a small intersection is enough if it's the main thing
                // But we can prioritize sections that occupy more of the viewport
                if (entry.intersectionRatio > 0.1) {
                  setActiveSection(entry.target.id);
                }
              }
            });
          },
          {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
            rootMargin: "-20% 0px -40% 0px"
          }
        );
        sectionElements.forEach(section => observer.observe(section));
        return true;
      }
      return false;
    };

    if (!observeSections()) {
      const intervalId = setInterval(() => {
        if (observeSections()) clearInterval(intervalId);
      }, 500);
      return () => {
        window.removeEventListener('scroll', handleScrollTop);
        clearInterval(intervalId);
        if (observer) observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener('scroll', handleScrollTop);
      if (observer) observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/#experience' },

    { name: 'Contact', href: '/#contact' },
  ];


  const logoText = "yogesh".split("");

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'h-20 bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-100'
          : 'h-24 bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-6 h-full flex justify-between items-center">

          {/* Logo */}
          <a
            href="#home"
            className="relative z-50 group cursor-pointer flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            <motion.div className="text-3xl font-bold font-display tracking-tight flex gap-0.5 overflow-hidden">
              {logoText.map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-stone-900 inline-block"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  whileHover={{
                    y: -5,
                    color: "#059669", // emerald-600
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                className="text-emerald-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >.</motion.span>
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300">
              {navLinks.map((link) => {
                const targetId = link.href.includes('#') ? link.href.split('#')[1] : link.href.replace('/', '');
                const isActive = activeSection === targetId;
                const isInternalHash = link.href.startsWith('/#');

                return (
                  <li key={link.name} className="relative">
                    {isInternalHash ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (window.location.pathname === '/') {
                            const targetId = link.href.split('#')[1];
                            if (targetId) {
                              e.preventDefault();
                              setActiveSection(targetId);
                              document.querySelector(`#${targetId}`)?.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                        className={`relative z-10 block px-5 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-stone-600 hover:text-stone-900'
                          }`}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="navPill"
                            className="absolute inset-0 bg-stone-900 rounded-full -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          />
                        )}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={`relative z-10 block px-5 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-stone-600 hover:text-stone-900'
                          }`}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="navPill"
                            className="absolute inset-0 bg-stone-900 rounded-full -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          />
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}

            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            suppressHydrationWarning
            className="md:hidden relative z-50 p-2 text-stone-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
            aria-label="Mobile Navigation"
          >
            <ul className="space-y-6 text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      const targetId = link.href.split('#')[1];
                      if (targetId) setActiveSection(targetId);
                    }}
                    className={`text-2xl sm:text-3xl md:text-4xl font-display font-medium block ${activeSection === (link.href.includes('#') ? link.href.split('#')[1] : link.href.replace('/', ''))
                      ? 'text-stone-900'
                      : 'text-stone-400 hover:text-stone-900 transition-colors'
                      }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="absolute bottom-12 text-stone-400 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Designed & Built by Yogesh
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
