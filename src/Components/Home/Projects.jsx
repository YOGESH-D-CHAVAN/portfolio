import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useState, useRef } from 'react';
import { projects } from '../../data/projects'; 

// === 1. LOCAL IMAGE IMPORTS ===
import eduimage from '../../assets/images/Edumedia.jpg';
import money from '../../assets/images/money.jpeg';
import textUtils from '../../assets/images/textutils.jpeg';
import college from '../../assets/images/college.jpeg';
import news from '../../assets/images/news.webp';
import notes from '../../assets/images/notes.jpeg';

const PLACEHOLDER = 'https://via.placeholder.com/1200x800?text=Project+Preview';

// === IMAGE MAPPING ===
const projectImageMap = {
  edumedia: eduimage,
  moneymanager: money,
  textutils: textUtils,
  svitcollegewebsiteclone: college,
  newsappreact: news,
  notenestmern: notes,
};

const getProjectImage = (project) => {
  if (!project?.title) return PLACEHOLDER;
  const key = project.title.toLowerCase().replace(/[^a-z0-9]/g, '');
  return projectImageMap[key] || PLACEHOLDER;
};

// --- SPOTLIGHT CARD COMPONENT ---
const SpotlightCard = ({ children, className = "", onClick }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative border border-stone-200 bg-stone-50 overflow-hidden dark:border-stone-800 dark:bg-stone-900 group ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

// --- PROJECT CARD ---
const ProjectCard = ({ project, index, onOpen }) => {
  const image = getProjectImage(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={() => onOpen(project)}
      className="cursor-pointer"
    >
      <SpotlightCard className="h-full rounded-2xl flex flex-col hover:border-emerald-500/30 transition-colors duration-300 bg-white shadow-sm hover:shadow-lg">
        {/* Image Area */}
        <div className="relative h-56 overflow-hidden bg-stone-200">
          <img
            src={image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-60" />
          
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
             <div className="bg-stone-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-emerald-400">
               {project.year || '2024'}
             </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack?.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md">
                  {tech}
                </span>
              ))}
              {project.techStack?.length > 3 && (
                 <span className="text-xs font-semibold text-stone-400 px-1 py-1">+{(project.techStack.length - 3)}</span>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm font-medium pt-4 border-t border-stone-100">
               <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center text-emerald-600 gap-1">
                 View Details <span aria-hidden="true">&rarr;</span>
               </span>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-600 font-mono text-sm tracking-wider uppercase mb-2 block"
          >
            // Selected Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6"
          >
            Engineering digital experiences with <span className="text-emerald-600">precision</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 leading-relaxed"
          >
            A collection of projects demonstrating expertise in full-stack architecture, performance optimization, and user-centric design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>
      
      {/* Keeping Modal Logic (Assuming it works, simplified styles) */}
       {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img 
                    src={getProjectImage(selectedProject)} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                />
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                >
                    <FaTimes />
                </button>
             </div>
             
             <div className="p-8 md:p-10">
                <h3 className="text-3xl font-bold text-stone-900 mb-4">{selectedProject.title}</h3>
                <p className="text-stone-600 text-lg leading-relaxed mb-8">{selectedProject.description}</p>
                
                <div className="mb-8">
                    <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack?.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm font-medium border border-stone-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-stone-100">
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" 
                       className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium">
                        <FaGithub /> Source Code
                    </a>
                    {selectedProject.live && (
                         <a href={selectedProject.live} target="_blank" rel="noreferrer" 
                            className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                             <FaExternalLinkAlt /> Live Demo
                         </a>
                    )}
                </div>
             </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

