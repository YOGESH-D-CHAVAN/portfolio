import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, 
  FaGithub, FaNpm, FaDatabase, FaCode, FaServer, FaTools, FaLayerGroup
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiTypescript, SiVite
} from 'react-icons/si';
import { skillCategories } from '../../data/skills'; 

const skillIconMap = {
  'HTML5': FaHtml5, 'CSS3': FaCss3Alt, 'JavaScript (ES6+)': FaJs,
  'React.js': FaReact, 'Tailwind CSS': SiTailwindcss, 'Bootstrap': FaBootstrap,
  'Node.js': FaNodeJs, 'Express.js': SiExpress, 'MongoDB (Mongoose)': SiMongodb,
  'MySQL (using PHP)': SiMysql, 'Git & GitHub': FaGithub, 'npm / yarn': FaNpm,
  'Postman': SiPostman, 'CRUD Operations': FaDatabase, 'MERN Stack': FaReact,
  'XAMPP': FaDatabase, 'PHPMyAdmin': SiMongodb, 'Responsive Design': FaCss3Alt,
  'API Integration': FaJs, 'React Hooks': FaReact, 'Vite': SiVite,
  'Authentication (JWT)': FaJs, 'Middleware Handling': FaNodeJs,
};

const categoryIconMap = {
  "Frontend Development": FaCode,
  "Backend Development": FaServer,
  "Tools & Version Control": FaTools,
  "Concepts & Architecture": FaLayerGroup
};

const SkillItem = ({ skill, index }) => {
  const Icon = skillIconMap[skill] || FaCode;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 bg-white hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 group"
    >
      <div className="p-2 rounded-md bg-stone-50 text-stone-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
        <Icon size={18} />
      </div>
      <span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">{skill}</span>
    </motion.div>
  );
};

const CategorySection = ({ category, index }) => {
  const CatIcon = categoryIconMap[category.category] || FaLayerGroup;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="mb-12 last:mb-0"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-white shadow-lg shadow-stone-900/20">
          <CatIcon size={16} />
        </div>
        <h3 className="text-xl font-bold text-stone-900">{category.category}</h3>
        <div className="h-[1px] flex-grow bg-stone-200 ml-4"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.skills.map((skill, idx) => (
          <SkillItem key={skill} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-20">
           <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-stone-900 mb-6"
           >
             Technical <span className="text-stone-400">Proficiency</span>
           </motion.h2>
           <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 leading-relaxed"
           >
             A comprehensive overview of the technologies, tools, and methodologies I utilize to build scalable, full-stack applications.
           </motion.p>
        </div>

        <div className="mt-16">
          {skillCategories.map((category, index) => (
            <CategorySection key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
