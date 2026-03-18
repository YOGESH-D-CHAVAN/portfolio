"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { projects } from '../../data/projects';

// === LOCAL IMAGE IMPORTS ===
import eduimage from '../../assets/images/Edumedia.webp';
import money from '../../assets/images/money.webp';
import college from '../../assets/images/college.webp';
import news from '../../assets/images/news.jpg';
import notes from '../../assets/images/notes.webp';
import vajrachat from '../../assets/images/Vajrachat.png';

const vaultImage = 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1200&auto=format&fit=crop';
const PLACEHOLDER = 'https://via.placeholder.com/1200x800?text=Project+Preview';

const projectsWithImages = projects.map(project => {
  let image;
  switch (project.id) {
    case 1: image = vajrachat; break; // Vajra Chat
    case 2: image = eduimage; break;  // EduMedia
    case 3: image = vaultImage; break; // Vault
    case 4: image = notes; break;      // NoteNest
    case 5: image = money; break;      // Money Manager
    case 6: image = college; break;    // SVIT College Clone
    case 7: image = news; break;       // QuickNews
    default: image = PLACEHOLDER;
  }
  return { ...project, image };
});

const ProjectCard = ({ project, i, progress, range }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, 0.9]); // Constant scale down to 0.9 for all stacked cards

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <motion.article
        style={{ scale, top: `calc(-5vh + ${i * 20}px)` }} // Slightly tighter stack
        className="relative w-full max-w-6xl h-[75vh] md:h-[80vh] bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-stone-200 flex flex-col md:flex-row origin-top group transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(16,185,129,0.15)]"
      >
        {/* Left: Content */}
        <div className="w-full md:w-[45%] p-8 md:p-16 flex flex-col justify-between z-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-emerald-100">
                {project.category}
              </span>
            </motion.div>
            <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight group-hover:text-emerald-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-stone-500 text-sm md:text-base leading-relaxed line-clamp-4 mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-stone-50 text-stone-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-stone-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-stone-100">
            <div className="flex gap-6">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-stone-300 hover:text-stone-900 transition-colors transform hover:-translate-y-1">
                  <FaGithub size={24} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="text-stone-300 hover:text-emerald-500 transition-colors transform hover:-translate-y-1">
                  <FaExternalLinkAlt size={22} />
                </a>
              )}
            </div>
            <Link href={`/projects/${project.slug}`} className="group/btn flex items-center gap-3 bg-stone-900 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/20">
              Details
              <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden md:block w-full md:w-[55%] h-full relative overflow-hidden bg-stone-100">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors" />
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

  return (
    <section ref={container} className="relative bg-[#fafaf9]" id="projects">
      {/* Scrollable container for the header */}
      <div className="h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-stone-500 font-mono text-[10px] uppercase tracking-widest font-bold">Selected Works</span>
          </div>
          <h2 className="text-7xl md:text-[12rem] font-black text-stone-900 tracking-tighter leading-[0.75] mb-12">
            CRAFTED <br /> <span className="text-emerald-600 italic">BEYOND</span> <br /> CODE.
          </h2>
          <div className="flex items-center justify-center gap-6 text-stone-300 font-mono text-[9px] uppercase tracking-[0.4em]">
            <span>Scroll Down</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-12 bg-stone-200"
            />
            <span>Impact Focused</span>
          </div>
        </motion.div>
      </div>

      {/* The Projects Stack */}
      <div className="relative">
        {projectsWithImages.map((project, i) => {
          // Calculation for the range where each card should scale down
          // We want the card to stay at 1 until it's 'covered' by the next one
          const start = i * (1 / projectsWithImages.length);
          const end = (i + 1) * (1 / projectsWithImages.length);
          return (
            <ProjectCard
              key={project.id}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        })}
      </div>

      {/* Bottom Spacer */}
      <div className="h-[30vh]" />
    </section>
  );
}
