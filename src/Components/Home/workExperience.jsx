import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBuilding, FaCode, FaGitAlt, FaGithub, FaLaptopCode,
  FaTrophy, FaRobot, FaDatabase, FaShieldAlt, FaRocket,
  FaCalendar, FaFlagCheckered // ✅ REPLACED SiHackathon with FaFlagCheckered
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const experiences = [
  {
    id: 1,
    title: "College Website Development",
    subtitle: "Frontend Engineering & Version Control",
    role: "Frontend Developer & Git Maintainer",
    period: "2023 - Present",
    icon: FaBuilding,
    color: "from-blue-500 to-blue-600",
    description: "I contributed to the redevelopment of my college's website, focusing on writing modular, reusable, and component-driven code.",
    achievements: [
      "Component breakdown and modular architecture",
      "Clean folder structuring and naming conventions",
      "Reusable UI elements",
      "Responsive design principles"
    ],
    githubSkills: [
      "Creating and managing branches",
      "Pull requests and code reviews",
      "Resolving merge conflicts",
      "Maintaining commit history and versioned releases"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git", "GitHub"]
  },
  {
    id: 2,
    title: "Smart India Hackathon",
    subtitle: "Full-Stack Development & Rapid Prototyping",
    role: "Full-Stack Developer",
    period: "2024",
    icon: FaFlagCheckered, // ✅ CORRECTED ICON
    color: "from-purple-500 to-purple-600",
    description: "I participated in the Smart India Hackathon (SIH) where I engineered full-stack solutions in a high-pressure, time-bounded environment.",
    projects: ["EduMedia", "MoneyMate"],
    achievements: [
      "React.js for dynamic, component-based UI",
      "Node.js + Express.js for developing RESTful APIs",
      "MongoDB/MySQL for database modeling and CRUD operations",
      "JWT authentication, secure routes, and validations",
      "State management, API integration, and responsive layouts"
    ],
    enhancedSkills: [
      "System design",
      "API architecture",
      "Database schema design",
      "Performance optimization",
      "Building production-level features under strict deadlines"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "MySQL", "JWT"]
  }
];

// ... rest of the component code remains exactly the same as previously provided

const ExperienceCard = ({ exp, index }) => {
  const IconComponent = exp.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        type: 'spring',
        stiffness: 80,
        damping: 20
      }}
      className="relative"
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        className="absolute -left-4 top-6 w-8 h-8 bg-white rounded-full border-4 border-primary-500 shadow-lg z-10"
      >
        <IconComponent className="absolute inset-0 m-auto text-primary-500" size={16} />
      </motion.div>

      <motion.div
        whileHover={{ 
          y: -10,
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}
        transition={{ duration: 0.3 }}
        className="ml-8 bg-white rounded-2xl p-8 shadow-xl border border-primary-100"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-primary-900 flex items-center gap-3 mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                <IconComponent size={28} />
              </span>
              {exp.title}
            </motion.h3>
            <motion.p 
              className="text-lg text-primary-600 font-medium mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {exp.subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="flex items-center gap-1">
                <FaLaptopCode size={14} />
                {exp.role}
              </span>
              <span className="flex items-center gap-1">
                <FaCalendar size={14} />
                {exp.period}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <motion.p 
          className="text-gray-700 text-base leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {exp.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {exp.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + (i * 0.05), type: 'spring' }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full border border-primary-200"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Key Achievements */}
        {exp.achievements && (
          <div className="mb-6">
            <motion.h4 
              className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <FaCode className="text-primary-500" />
              Key Achievements
            </motion.h4>
            <motion.ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaCode className="text-primary-500 mt-1 flex-shrink-0" size={14} />
                  </motion.div>
                  <span className="text-sm md:text-base">{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}

        {/* GitHub Skills (if exists) */}
        {exp.githubSkills && (
          <div className="mb-6">
            <motion.h4 
              className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <FaGitAlt className="text-primary-500" />
              Version Control Mastery
            </motion.h4>
            <motion.ul className="space-y-2">
              {exp.githubSkills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaGithub className="text-primary-500 mt-1 flex-shrink-0" size={14} />
                  </motion.div>
                  <span className="text-sm md:text-base">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}

        {/* Enhanced Skills (if exists) */}
        {exp.enhancedSkills && (
          <div>
            <motion.h4 
              className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <FaRocket className="text-primary-500" />
              Enhanced Capabilities
            </motion.h4>
            <motion.ul className="space-y-2">
              {exp.enhancedSkills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + (i * 0.1) }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaTrophy className="text-primary-500 mt-1 flex-shrink-0" size={14} />
                  </motion.div>
                  <span className="text-sm md:text-base">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// Custom hook for intersection observer
const useInView = (threshold = 0.3) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, inView];
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-white to-primary-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full opacity-5 blur-3xl"
        animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-4 inline-block"
          >
            Work Experience
            <motion.span
              className="block h-1 bg-primary-500 rounded-full mt-3 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Professional projects that shaped my development journey
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
          
          {/* Experience Cards */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}