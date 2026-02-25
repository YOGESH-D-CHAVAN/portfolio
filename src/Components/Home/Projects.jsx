"use client";

import { m as motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../data/projects'; 


// === 1. LOCAL IMAGE IMPORTS ===
import eduimage from '../../assets/images/Edumedia.webp';
import money from '../../assets/images/money.webp';
// import textUtils from '../../assets/images/textutils.webp'; // Removed
const vaultImage = 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop'; // Vault Placeholder
import college from '../../assets/images/college.webp';
import news from '../../assets/images/news.jpg';
import notes from '../../assets/images/notes.webp';

const PLACEHOLDER = 'https://via.placeholder.com/1200x800?text=Project+Preview';

const projectsWithImages = projects.map(project => {
  let image;
  switch (project.id) {
    case 1: image = eduimage; break;
    case 2: image = money; break;
    case 3: image = vaultImage; break;
    case 4: image = college; break;
    case 5: image = news; break;
    case 6: image = notes; break;
    default: image = PLACEHOLDER;
  }
  return { ...project, image };
});

const getProjectImage = (project) => {
    return project.image || PLACEHOLDER;    
};

const PROJECT_SEO_KEYS = {
  1: 'edumedia',
  2: 'money-manager',
  3: 'vault',
  4: 'svit-college-clone',
  5: 'news-app',
  6: 'notenest'
};

const LazyImage = ({ src, alt, className }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-stone-100">
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} object-cover`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

// --- STACKING CARD COMPONENT ---
const Card = ({ i, project, setModal, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  // Parallax for the image inside the card
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  
  // Scale for the card itself (stacking effect)
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.article 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative -top-[5%] md:-top-[5%] w-[90vw] md:w-[1000px] h-[70vh] md:h-[500px] rounded-3xl overflow-hidden border border-stone-200 shadow-2xl origin-top bg-white neon-border-card cursor-pointer group"
      >
        <div className="flex flex-col md:flex-row h-full w-full">
            
            {/* Left: Content */}
            <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-between bg-white relative z-20">
               <div className="relative z-20">
                  <h2 className="text-3xl font-bold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">
                     <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:z-10">
                        {project.title}
                     </Link>
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map(tech => (
                       <span key={tech} className="px-2 py-1 bg-stone-100 text-stone-600 rounded text-xs font-bold uppercase tracking-wider">{tech}</span>
                    ))}
                  </div>
                  <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
               </div>
               
                <div className="flex items-center gap-4 mt-6 md:mt-0 relative z-30">
                   <Link 
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 text-stone-900 font-bold border-b-2 border-stone-900 pb-1 group-hover:text-emerald-600 group-hover:border-emerald-600 transition-colors"
                   >
                      View Case Study <FaArrowRight size={12} />
                   </Link>
                   <a 
                     href={project.github} 
                     target="_blank" 
                     rel="noreferrer" 
                     className="p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors" 
                     onClick={(e) => e.stopPropagation()}
                     aria-label="View source code on GitHub"
                   >
                     <FaGithub size={18} />
                   </a>
                </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-[60%] h-full relative overflow-hidden bg-stone-100">
              <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                 <LazyImage 
                    src={getProjectImage(project)} 
                    alt={`Screenshot of ${project.title} project`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                 />
              </motion.div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                 Read Full Details
              </div>
            </div>
        </div>

      </motion.article>
    </div>
  );
};

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const [isView, setIsView] = useState(false);

  // Stacking logic
  const len = projectsWithImages.length;

  return (
    <div ref={container} className="relative bg-stone-50" id="projects">
      <motion.div
        onViewportEnter={() => setIsView(true)}
        onViewportLeave={() => setIsView(false)}
        viewport={{ amount: 0.1, margin: "0px 0px -200px 0px" }}
        className="absolute inset-0 pointer-events-none" 
      />
      {/* SEO handled by Next.js layout */}
      
      {/* Intro Section - Standard Scroll */}
      <section className="py-24 px-6 container mx-auto text-center">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
         >
            <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase block">Selected Works</span>
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900">
               Project <span className="text-emerald-600">Gallery</span>
            </h2>
            <p className="text-xl text-stone-600">
               A curated selection of robust applications and digital solutions.
            </p>
         </motion.div>
      </section>

      {/* Stacking Cards Container */}
      <div className="mt-[10vh]">
        {projectsWithImages.map((project, i) => {
          // Calculate scale range for creating the stack effect
          const targetScale = 1 - ((len - i) * 0.05);
          const range = [i * (1 / len), 1];
          
          return (
            <Card 
              key={i} 
              i={i} 
              project={project} 
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      
      {/* Spacer to allow scrolling past final card */}
      <div className="h-[20vh]" />
    </div>
  );
}

