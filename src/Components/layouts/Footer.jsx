import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Footer() {
  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/Yogesh100-design/',
      label: 'GitHub',
      color: 'from-gray-900 to-gray-700'
    },
    { 
      icon: FiLinkedin, 
      href: 'https://www.linkedin.com/in/yogesh-chavan-494196316/',
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-500'
    },
    { 
      icon: FiMail, 
      href: 'mailto:yogeshchavan1209@gmail.com',
      label: 'Email',
      color: 'from-red-500 to-red-400'
    },
  ];
  
  const [emailCopied, setEmailCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const year = new Date().getFullYear();

  // Smooth scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic cursor effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };
  
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translate(0px, 0px)';
  };

  // Handle email click
  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('yogeshchavan1209@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
      
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      
      {/* Floating tech symbols */}
      <motion.div
        className="absolute top-10 left-10 text-blue-400/10 text-8xl pointer-events-none"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        {'</>'}
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-purple-400/10 text-6xl pointer-events-none"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        {'{}'}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Content */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16"
        >
          {/* Brand Section */}
          <motion.div className="md:col-span-1 text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4"
            >
              Yogesh Chavan
              <motion.span 
                className="block h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mt-2 mx-auto md:mx-0"
                initial={{ width: 0 }}
                animate={{ width: '3rem' }}
                transition={{ delay: 0.3 }}
              />
            </motion.h3>
            <p className="text-gray-300/80 text-sm md:text-base mb-4 max-w-xs mx-auto md:mx-0">
              Building digital experiences that blend innovation with precision.
            </p>
            
            {/* Animated heart */}
            <motion.div 
              className="inline-flex items-center gap-2 text-sm text-gray-400"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FiHeart className="text-red-400" /> Crafted with passion in India
            </motion.div>
          </motion.div>

          {/* Connect Section */}
          <motion.div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-2 text-center md:text-left">Let's Connect</h4>
            <p className="text-gray-300/80 mb-6 text-center md:text-left">
              Open to collaborations and exciting opportunities
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 md:gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                  >
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={social.label === 'Email' ? handleEmailClick : null}
                      whileHover={{ 
                        scale: 1.15,
                        y: -5,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      whileTap={{ scale: 0.9 }}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      className={`w-14 h-14 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg
                                bg-white/10 hover:bg-white/20 border border-white/20
                                transition-all duration-300`}
                      aria-label={social.label}
                    >
                      {/* Gradient background on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0`}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.2 }}
                      />
                      <Icon className="text-white text-xl relative z-10" />
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Email tooltip */}
            <AnimatePresence>
              {emailCopied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 text-center md:text-left text-sm text-emerald-400 font-medium"
                >
                  ✓ Email copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {year} Yogesh Chavan. All rights reserved. | Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><FiHeart className="inline text-red-400" /></motion.span> and ☕
          </p>
          
          {/* Scroll to top button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all border border-white/20 z-50"
              >
                <FiArrowUp className="text-white text-lg" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </footer>
  );
}