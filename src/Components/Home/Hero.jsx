import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profileImage from '../../assets/images/edu.jpg';

export default function Hero() {
  const yourName = "Yogesh Chavan";
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer | UI/UX Enthusiast";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white py-16 md:py-24 relative overflow-hidden md:ml-20 md:mr-16">
      
      {/* Animated background blob */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary-500 rounded-full blur-3xl opacity-10 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1 space-y-6">
            
            {/* ✅ FIXED: Removed gradient, using solid high-contrast color */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-900 leading-tight"
            >
              Hi, I'm <span className="text-primary-700 block mt-2">{yourName}</span>
            </motion.h1>
            
            {/* Typewriter effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium h-10 flex items-center justify-center md:justify-start"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-primary-500"
              >
                |
              </motion.span>
            </motion.p>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              I build modern, responsive, and high-performing web applications. Let's create something amazing together.
            </motion.p>

            {/* Animated buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-colors shadow-xl shadow-primary-500/20 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all shadow-lg"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>
          
          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
            className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 w-full max-w-sm md:max-w-lg"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={profileImage}
              alt={`${yourName} - Profile Photo`}
              className="w-full aspect-square object-cover shadow-2xl border-4 border-white rounded-2xl transform-gpu transition-transform duration-300 hover:scale-105"
              loading="eager"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x500?text=Profile+Image';
              }}
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}