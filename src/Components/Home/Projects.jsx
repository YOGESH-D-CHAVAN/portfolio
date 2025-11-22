import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects'; 
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasLiveLink = project.live && project.live.length > 0;

  // Card entrance from alternating directions
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: index % 2 === 0 ? 100 : -100,
      rotate: index % 2 === 0 ? -5 : 5 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      transition: { 
        duration: 0.6, 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: index * 0.1 
      }
    },
    hover: {
      y: -15,
      rotate: 0.5,
      transition: { 
        duration: 0.3,
        type: 'spring',
        stiffness: 300
      }
    }
  };

  // Image reveal animation
  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
    hover: { scale: 1.1 }
  };

  // Tech tags stagger animation
  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5 + (i * 0.05) }
    }),
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  // Link button variants
  const linkVariants = {
    hover: { 
      x: [0, 5, 0],
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Image with animated overlay */}
      <motion.div
        className="h-48 overflow-hidden relative"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/800x400?text=${encodeURIComponent(project.title)}`;
          }}
        />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Tech badges overlay on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 flex flex-wrap gap-2"
            >
              {project.techStack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs bg-white/90 text-primary-900 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Card Body with animated border */}
      <motion.div 
        className="p-6 flex flex-col flex-grow"
        animate={{ borderTopColor: isHovered ? 'rgb(59, 130, 246)' : 'transparent' }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-2xl font-bold text-primary-900 mb-2"
          animate={{ color: isHovered ? 'rgb(37, 99, 235)' : 'rgb(15, 23, 42)' }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        
        {/* Animated tagline with highlight */}
        <motion.p 
          className="text-gray-600 mb-4 flex-grow"
          animate={{ color: isHovered ? 'rgb(75, 85, 99)' : 'rgb(107, 114, 128)' }}
        >
          {project.tagline}
        </motion.p>
        
        {/* Full description */}
        <p className="text-gray-700 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack with animation */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <motion.span 
              key={tech}
              custom={i}
              variants={techVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="text-xs font-medium bg-primary-100 text-primary-700 px-3 py-1 rounded-full border border-primary-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Links with enhanced animation */}
        <motion.div 
          className="flex gap-4 mt-auto pt-4 border-t border-gray-100"
          animate={{ borderTopColor: isHovered ? 'rgb(209, 213, 219)' : 'rgb(229, 231, 235)' }}
        >
          {/* GitHub Link */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex-1 flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaGithub className="text-lg" />
            </motion.div>
            <span>Code</span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          {/* Live Demo Link */}
          {hasLiveLink && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex-1 flex items-center gap-2 border-2 border-primary-500 text-primary-500 px-4 py-2 rounded-lg hover:bg-primary-500 hover:text-white transition-all font-medium relative overflow-hidden"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Live Demo</span>
              <motion.div
                className="absolute inset-0 bg-primary-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          )}
        </motion.div>
        
        {/* No links message */}
        {(!project.github || project.github.trim() === "") && 
         (!project.live || project.live.trim() === "") && (
          <motion.p 
            className="text-gray-400 text-xs text-center mt-4 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Private project — links not available
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, type: 'spring' }
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-extrabold text-center text-primary-900 mb-12"
        >
          My Projects
          <motion.div
            className="w-24 h-1 bg-primary-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.h2>
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
      </motion.div>
    </section>
  );
}