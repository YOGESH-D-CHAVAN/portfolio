import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, 
  FaGithub, FaNpm, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman 
} from 'react-icons/si';
import { skillCategories } from '../../data/skills';

// Icon mapping for each skill
const skillIconMap = {
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'JavaScript (ES6+)': FaJs,
  'React.js': FaReact,
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap': FaBootstrap,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'MongoDB (Mongoose)': SiMongodb,
  'MySQL (using PHP)': SiMysql,
  'Git & GitHub': FaGithub,
  'npm / yarn': FaNpm,
  'Postman': SiPostman,
  'CRUD Operations': FaDatabase,
  'MERN Stack': FaReact,
  'XAMPP': FaDatabase,
  'PHPMyAdmin': SiMongodb,
  'Responsive Design': FaCss3Alt,
  'API Integration': FaJs,
  'React Hooks': FaReact,
  'Vite': FaJs,
  'Authentication (JWT)': FaJs,
  'Middleware Handling': FaNodeJs,
};

const SkillChip = ({ skill, index }) => {
  const Icon = skillIconMap[skill] || FaJs; // Default icon
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: index * 0.05,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.08,
        y: -3,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group flex items-center gap-2 bg-white/80 hover:bg-primary-100/50 text-primary-900 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm border border-primary-200/50"
    >
      <motion.span
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.4 }}
      >
        <Icon className="text-primary-500 group-hover:text-primary-600 transition-colors" />
      </motion.span>
      <span className="font-medium text-sm">{skill}</span>
    </motion.div>
  );
};

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        delay: index * 0.15,
        type: 'spring',
        stiffness: 80,
        damping: 15
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-primary-100"
    >
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.15 + 0.2 }}
        className="flex items-center gap-3 mb-6"
      >
        <motion.span
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3,
            ease: "easeInOut"
          }}
          className="text-2xl"
        >
          {category.icon}
        </motion.span>
        <h3 className="text-2xl font-bold text-primary-900">
          {category.category}
        </h3>
      </motion.div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, skillIndex) => (
          <SkillChip key={skill} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        
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
            Technical Skills
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
            Technologies I work with to build amazing products
          </motion.p>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="relative">
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 bg-primary-500 rounded-full opacity-5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500 rounded-full opacity-5 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -50, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Skills Categories Grid */}
          <motion.div
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
          >
            {skillCategories.map((category, index) => (
              <CategoryCard key={category.category} category={category} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}