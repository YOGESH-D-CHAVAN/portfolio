import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, 
  FaGithub, FaNpm, FaDatabase, FaStar, FaCode, FaCogs
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman 
} from 'react-icons/si';
// Ensure this path is correct
import { skillCategories } from '../../data/skills'; 
import { useState, useRef } from 'react';

const skillIconMap = {
  'HTML5': FaHtml5, 'CSS3': FaCss3Alt, 'JavaScript (ES6+)': FaJs,
  'React.js': FaReact, 'Tailwind CSS': SiTailwindcss, 'Bootstrap': FaBootstrap,
  'Node.js': FaNodeJs, 'Express.js': SiExpress, 'MongoDB (Mongoose)': SiMongodb,
  'MySQL (using PHP)': SiMysql, 'Git & GitHub': FaGithub, 'npm / yarn': FaNpm,
  'Postman': SiPostman, 'CRUD Operations': FaDatabase, 'MERN Stack': FaReact,
  'XAMPP': FaDatabase, 'PHPMyAdmin': SiMongodb, 'Responsive Design': FaCss3Alt,
  'API Integration': FaJs, 'React Hooks': FaReact, 'Vite': FaJs,
  'Authentication (JWT)': FaJs, 'Middleware Handling': FaNodeJs,
};

// --- Spring Config for smooth interaction ---
const springConfig = {
    type: 'spring',
    stiffness: 300, // Reduced stiffness for less jiggle
    damping: 20,    // Increased damping for faster settle
};

const SkillChip = ({ skill, index }) => {
  const Icon = skillIconMap[skill] || FaJs;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const chipRef = useRef(null);

  // Magnetic effect variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useTransform(mouseX, [-50, 50], [0.8, -0.8]); // Reduced sensitivity
  const tiltY = useTransform(mouseY, [-50, 50], [0.8, -0.8]); // Reduced sensitivity

  const handleMouseMove = (e) => {
    if (!chipRef.current) return;
    const rect = chipRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = e.clientX - rect.left - centerX;
    const deltaY = e.clientY - rect.top - centerY;
    
    // Scale down the influence of the mouse position
    mouseX.set(deltaX * 0.5); 
    mouseY.set(deltaY * 0.5);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={chipRef}
      initial={{ opacity: 0, scale: 0.5, rotate: -90 }} // Less dramatic initial rotate
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        delay: index * 0.05, // Slightly less aggressive stagger delay
        type: 'spring',
        stiffness: 200, // Reduced stiffness (was 400)
        damping: 15,    // Reduced damping (was 25)
      }}
      style={{ x: tiltX, y: tiltY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      
      // Use spring transition for whileHover/whileTap
      whileHover={{ scale: 1.1, zIndex: 50, transition: springConfig }} 
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      onClick={() => setIsClicked(!isClicked)}
      className="relative flex items-center gap-3 bg-white/70 hover:bg-primary-50 text-primary-900 px-5 py-2.5 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer backdrop-blur-md border border-primary-200/40 overflow-hidden"
    >
      
      {/* Animated background fill */}
      <motion.div className="absolute inset-0 bg-primary-500/10" initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.3, ease: "easeOut" }} />
      
      {/* Pulse ring on click */}
      <AnimatePresence>
        {isClicked && (
          <motion.div className="absolute inset-0 rounded-full border-2 border-primary-500 pointer-events-none"
            initial={{ scale: 0.5, opacity: 1 }} 
            animate={{ scale: 1.8, opacity: 0 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }} // Longer, smoother pulse
          />
        )}
      </AnimatePresence>
      
      {/* Icon rotation animation */}
      <motion.span 
        animate={{ rotate: isHovered ? 360 : 0 }} // Rotate on hover state
        transition={{ duration: 0.8, ease: "easeInOut" }} // Smoother rotation transition
      >
        <Icon className="text-xl text-primary-500 relative z-10" />
      </motion.span>
      <span className="font-semibold text-sm relative z-10">{skill}</span>
      
      {/* Hover particles (Optimized) */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div key={i} className="absolute w-1 h-1 bg-primary-500 rounded-full pointer-events-none"
                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }} 
                animate={{ scale: [0, 1, 0], x: [-15 + i * 15, -30 + i * 30], y: [-5, -25], opacity: [1, 0.5, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }} // Longer particle lifespan
              />
            ))}
          </>
        )}
      </AnimatePresence>
      
      {/* Progress bar on hover */}
      <motion.div className="absolute bottom-0 left-0 h-0.5 bg-primary-500" initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.3 }} />
    </motion.div>
  );
};

const CategoryCard = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }} // Less initial y movement and rotation
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        delay: index * 0.2, // Slightly reduced delay
        type: 'spring',
        stiffness: 50, // Much softer spring (was 70)
        damping: 15,    // Softer damping (was 25)
      }}
      whileHover={{ 
        y: -5, // Less intense y movement on hover
        rotateX: 2, // Less intense rotation
        rotateY: 1, // Less intense rotation
        transition: { type: "spring", stiffness: 100, damping: 10 } // Smooth spring hover
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group bg-gradient-to-br from-white to-primary-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary-100"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {/* 3D depth layer */}
      <motion.div 
        className="absolute inset-0 rounded-3xl bg-primary-500/5" 
        initial={{ opacity: 0 }} 
        whileHover={{ opacity: 1 }} 
        transition={{ duration: 0.4 }}
        style={{ transform: "translateZ(-20px)" }} 
      />
      
      {/* Animated grid background */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
          transform: "translateZ(-10px)"
        }} />
      
      {/* Floating corner icon */}
      <motion.div className="absolute -top-3 -right-3 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg z-10"
        whileHover={{ scale: 1.1, rotate: 10 }} transition={springConfig}>
        <span className="text-white text-xl">{category.icon}</span>
      </motion.div>
      
      {/* Header with animated underline */}
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }} // Smoother slide-in
        className="flex items-center gap-4 mb-6 pb-4 border-b border-primary-100">
        <motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }} // Slower, subtler sway
          className="text-3xl text-primary-500">
          {category.icon}
        </motion.div>
        <h3 className="text-2xl font-bold text-primary-900">{category.category}</h3>
      </motion.div>

      {/* Skills Grid */}
      <motion.div layout className="flex flex-wrap gap-3 relative z-10">
        {category.skills.map((skill, skillIndex) => (
          <SkillChip key={skill} skill={skill} index={skillIndex} />
        ))}
      </motion.div>

      {/* Glow aura */}
      <motion.div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
        animate={{ boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 30px rgba(59,130,246,0.2)", "0 0 0px rgba(59,130,246,0)"] }} // Lower intensity glow
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      
      {/* Parallax background layers */}
      {/* Parallax background layers */}
      <motion.div className="absolute inset-0" style={{ y: -80 }}>
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: "radial-gradient(circle at 10% 90%, rgba(59,130,246,0.06) 0%, transparent 40%)" 
        }} />
      </motion.div>
      <motion.div className="absolute inset-0" style={{ y: -40 }}>
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: "radial-gradient(circle at 90% 10%, rgba(59,130,246,0.06) 0%, transparent 40%)" 
        }} />
      </motion.div>
      
      {/* Floating tech particles (Smoother, slower transition) */}
      {[...Array(12)].map((_, i) => (
        <motion.div key={i} className="absolute text-primary-400/20 font-mono font-bold text-7xl pointer-events-none"
          style={{ left: `${5 + i * 8}%`, top: `${i * 15}%` }}
          initial={{ y: 200, opacity: 0, rotate: 0 }} 
          animate={{ y: -200, opacity: [0, 0.3, 0.3, 0], rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: i * 3 }} // Slower, longer duration
        >
          {['<', '{', '(', '[', '&&', '||', '!=', '==='][i % 8]}
        </motion.div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16 relative">
          <motion.h2 initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 100 }}
            className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-4 inline-block">
            Technical Skills
            <motion.span className="block h-1 bg-primary-500 rounded-full mt-3 mx-auto"
              initial={{ width: 0 }} whileInView={{ width: '10rem' }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} />
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies I work with to build amazing products
          </motion.p>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div variants={{ visible: { transition: { staggerChildren: 0.2 } } }} 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <CategoryCard key={category.category} category={category} index={index} />
          ))}
        </motion.div>

        {/* Interactive stats footer */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-primary-100 shadow-xl">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: FaCode, number: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0), label: "Total Skills" },
              { icon: FaStar, number: skillCategories.length, label: "Categories" },
              { icon: FaCogs, number: "95%", label: "Proficiency" }
            ].map((stat, i) => (
              <motion.div key={stat.label} className="text-center" whileHover={{ scale: 1.05, y: -3 }} transition={springConfig}>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 + i * 0.1, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <stat.icon className="text-white text-2xl" />
                </motion.div>
                <span className="text-2xl font-bold text-primary-600 block">{stat.number}</span>
                <span className="text-sm text-gray-600">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}