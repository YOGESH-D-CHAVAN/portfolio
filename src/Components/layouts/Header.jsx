import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
// CORRECTED IMPORT PATH: Ensure this path is absolutely correct relative to THIS file's location.
// For example, if your Header.jsx is in src/components/Header/Header.jsx
// and your logo is in public/yogesh.png, you might need:
// import YourLogo from '/yogesh.png'; // If public is root for direct access
// OR if using a bundler that processes assets from 'src':
import YourLogo from '../../assets/images/Gemini_Generated_Image_wsfy3twsfy3twsfy.png'; // Assuming images folder in assets at parent level

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.4, delay: 0.2 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: 0.3 + (i * 0.1),
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const mobileLinkVariants = {
    closed: { x: -20, opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center py-4 "> {/* Added mx-auto px-4 for consistency */}
        <motion.div
          variants={logoVariants}
          whileHover="hover"
          className="cursor-pointer" // Removed text-2xl font-bold text-primary-900 as these are for text, not image
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false); // Close menu on logo click
          }}
        >
          {/* CORRECTED: Use <img> tag for the imported image */}
          <img 
            src={YourLogo} 
            alt="Yogesh Logo" 
            className="h-8 md:h-10 object-contain md:ml-5" // Tailwind classes for sizing your logo
          />
        </motion.div>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 ">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a 
                href={link.href} 
                className="relative text-gray-700 hover:text-primary-500 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)} // Close menu if desktop link clicked (good practice)
              >
                {link.name}
                {/* Animated underline */}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden relative z-50 text-primary-800 hover:text-primary-600" // Added color for icon
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          animate={isMenuOpen ? "open" : "closed"}
          variants={iconVariants}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />} {/* Increased icon size slightly */}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white border-t shadow-lg overflow-hidden absolute w-full" // Added absolute w-full for full width
          >
            <ul className="container mx-auto px-4 py-6 space-y-6"> {/* Added mx-auto px-4 for consistency */}
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  variants={mobileLinkVariants}
                >
                  <a 
                    href={link.href} 
                    className="block text-lg text-gray-700 hover:text-primary-500 py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}