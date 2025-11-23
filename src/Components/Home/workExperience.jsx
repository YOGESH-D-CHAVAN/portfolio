import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  FaBuilding, FaCode, FaGitAlt, FaGithub, FaLaptopCode, FaStar,
  FaTrophy, FaRocket, FaCalendar, FaFlagCheckered, FaGraduationCap,
  FaCheckCircle, FaToolbox, FaBolt
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Tech emoji mapping for visual flair
const techEmojis = {
  'Git': '📦', 'GitHub': '🐙', 'React': '⚛️', 'Node.js': '🟢', 'MongoDB': '🍃', 'Express': '🚄',
  'MySQL': '🐬', 'JWT': '🔐', 'HTML': '📝', 'CSS': '🎨', 'JavaScript': '🟨', 'API': '🔌', 'CRUD': '💾'
};

const experiences = [
  {
    id: 1,
    title: "College Website Developer",
    subtitle: "Frontend Engineering & Git Excellence",
    role: "Frontend Developer",
    period: "2023 - Present",
    type: "Development",
    icon: FaBuilding,
    color: "from-blue-500 to-cyan-600",
    description: "Led the redevelopment of my college's official website with modern, scalable architecture and enterprise-grade version control.",
    achievements: [
      "Built modular, reusable component architecture",
      "Established clean folder structures and naming conventions",
      "Implemented responsive design across all breakpoints",
      "Maintained 100% Git hygiene with semantic commits"
    ],
    githubSkills: [
      "Branch management with Git Flow strategy",
      "Peer-reviewed 50+ pull requests",
      "Resolved complex merge conflicts",
      "Automated releases with GitHub Actions"
    ],
    tech: ["React", "Tailwind CSS", "Git", "GitHub", "Vite"]
  },
  {
    id: 2,
    title: "Smart India Hackathon",
    subtitle: "Full-Stack Innovation Under Pressure",
    role: "Full-Stack Developer",
    period: "2024",
    type: "Competition",
    icon: FaFlagCheckered,
    color: "from-purple-500 to-pink-600",
    description: "Engineered production-ready full-stack solutions in 48-hour sprints, competing against 500+ teams nationwide.",
    projects: ["EduMedia", "MoneyMate"],
    achievements: [
      "Shipped 2 complete MERN stack applications",
      "Implemented JWT auth with 99.9% security score",
      "Optimized API response times by 60%",
      "Built real-time collaborative features"
    ],
    enhancedSkills: [
      "System design for scale",
      "Microservices architecture",
      "Database sharding strategies",
      "Performance profiling",
      "CI/CD pipeline deployment"
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "WebSocket"]
  }
];

const ExperienceCard = ({ exp, index }) => {
  const IconComponent = exp.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  // Magnetic cursor effect (lightweight)
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] // Custom bezier for smoothness
      }}
      className="relative group will-change-transform"
    >
      {/* Glassmorphism card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          background: `
            radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), 
            rgba(59, 130, 246, 0.08), transparent 40%)
          `,
        }}
        className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl border border-white/30 overflow-hidden"
      >
        {/* Subtle glow aura on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100"
          animate={{ boxShadow: isHovered ? "0 0 50px rgba(59, 130, 246, 0.15)" : "0 0 0px rgba(59, 130, 246, 0)" }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Animated header bar */}
        <motion.div 
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.2 }}
        />

        {/* Floating badge */}
        <motion.div 
          className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg z-20`}
          whileHover={{ rotate: 15, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {exp.type === "Competition" ? (
            <FaTrophy className="text-white text-lg" />
          ) : (
            <FaBuilding className="text-white text-lg" />
          )}
        </motion.div>

        {/* Header with gradient text */}
        <motion.div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative z-10">
          <div className="md:pr-8">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, ease: "easeOut" }}
            >
              <span className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                <IconComponent className="text-2xl md:text-3xl" />
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-600">
                {exp.title}
              </span>
            </motion.h3>
            
            <motion.p 
              className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {exp.subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="flex items-center gap-2">
                <FaLaptopCode />
                {exp.role}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendar />
                {exp.period}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Description with highlight */}
        <motion.p 
          className="text-slate-700 text-base md:text-lg mb-6 leading-relaxed relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, ease: "easeOut" }}
        >
          {exp.description}
        </motion.p>

        {/* Tech Stack with emoji */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-6 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {exp.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.7 + (i * 0.05),
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ scale: 1.15, y: -3 }}
              className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 border border-blue-200 hover:bg-blue-600 hover:text-white transition-all"
            >
              <motion.span whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                {techEmojis[tech] || '🛠️'}
              </motion.span>
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Enhanced Skills Grid */}
        {exp.githubSkills && (
          <motion.div 
            className="mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <FaGitAlt className="text-red-500 text-xl" /> Version Control Mastery
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {exp.githubSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.03, x: 5, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 p-4 bg-white/60 rounded-xl border border-red-100/50 backdrop-blur-sm hover:bg-white/90 transition-all"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.3 }}>
                    <FaGithub className="text-red-500 text-lg flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm md:text-base text-slate-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Achievements Grid */}
        {exp.achievements && (
          <motion.div 
            className="mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <FaCheckCircle className="text-green-500 text-xl" /> Key Impact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {exp.achievements.map((achievement, i) => (
                <motion.div
                  key={achievement}
                  whileHover={{ scale: 1.03, x: 5, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 p-4 bg-white/60 rounded-xl border border-green-100/50 backdrop-blur-sm hover:bg-white/90 transition-all"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.4 }}>
                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm md:text-base text-slate-700 font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function Experience() {
  const totalTech = experiences.reduce((acc, exp) => acc + exp.tech.length, 0);
  const totalSkills = experiences.reduce((acc, exp) => {
    const github = exp.githubSkills?.length || 0;
    const enhanced = exp.enhancedSkills?.length || 0;
    return acc + github + enhanced;
  }, 0);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -20], { clamp: true });

  return (
    <section id="experience" className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="container mx-auto px-4">
        
        {/* Animated Header */}
        <motion.div className="text-center mb-16 md:mb-20 relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            {experiences.length} Career Milestones
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-600 mb-4"
          >
            Professional Journey
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '6rem' }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Milestones that shaped my technical expertise</p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-10 md:space-y-14">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* Stats Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-blue-100 shadow-xl"
        >
          <div className="flex flex-wrap justify-center gap-8">
            <StatCard icon={<FaToolbox />} number={totalTech} label="Technologies" />
            <StatCard icon={<FaStar />} number={totalSkills} label="Skills Mastered" />
            <StatCard icon={<FaGraduationCap />} number={`${experiences.length}+`} label="Experiences" />
            <StatCard icon={<FaBolt />} number="500+" label="Hours Coding" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Reusable stat card component
const StatCard = ({ icon, number, label }) => (
  <motion.div 
    className="text-center min-w-32"
    whileHover={{ scale: 1.08, y: -3 }}
    transition={{ duration: 0.2 }}
  >
    <motion.div 
      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="text-white text-2xl">{icon}</span>
    </motion.div>
    <span className="text-3xl font-bold text-slate-900 block mb-1">{number}</span>
    <span className="text-sm text-gray-600">{label}</span>
  </motion.div>
);