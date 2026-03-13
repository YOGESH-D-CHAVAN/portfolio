"use client";

import { m as motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
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

// --- CAROUSEL CARD COMPONENT ---
const CarouselCard = ({ project, angle }) => {
  return (
    <article
      className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden border border-white/40 shadow-[0_30px_60px_rgba(0,0,0,0.12)] bg-white/90 backdrop-blur-xl cursor-pointer group transition-all duration-700 ease-out hover:shadow-[0_45px_100px_rgba(16,185,129,0.25)] ring-1 ring-black/5"
      style={{
        transform: `rotateY(${angle}deg) translateZ(var(--carousel-radius))`,
      }}
    >
      <div className="flex flex-col md:flex-row h-full w-full relative">
        {/* Decorative background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

        {/* Left: Content */}
        <div className="w-full md:w-[45%] p-6 sm:p-8 md:p-12 flex flex-col justify-between relative z-20">
          <div className="relative z-20 transform transition-transform duration-500 group-hover:translate-x-2">
            <h2 className="text-3xl font-bold text-stone-900 mb-3 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-500 transition-all duration-300">
              <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:z-10">
                {project.title}
              </Link>
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.slice(0, 3).map(tech => (
                <span key={tech} className="px-2.5 py-1 bg-stone-100/80 backdrop-blur-sm border border-stone-200/50 text-stone-600 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm">{tech}</span>
              ))}
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed line-clamp-4">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 relative z-30 transform transition-transform duration-500 group-hover:translate-x-2">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-full font-medium text-sm hover:bg-emerald-600 transition-colors shadow-md hover:shadow-emerald-500/30 group/btn"
            >
              View Case Study 
              <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1"><FaArrowRight size={12} /></span>
            </Link>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-stone-100 text-stone-600 rounded-full hover:bg-stone-900 hover:text-white transition-all shadow-sm hover:shadow-md relative z-20"
              onClick={(e) => {
                e.stopPropagation();
              }}
              aria-label="View source code on GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-[55%] h-full relative overflow-hidden bg-stone-100 group-hover:shadow-inner-xl transition-all duration-700">
          <div className="w-full h-full transform origin-center transition-transform duration-700 group-hover:scale-105">
            <LazyImage
              src={getProjectImage(project)}
              alt={`Screenshot of ${project.title} project`}
              className="w-full h-full object-cover"
            />
            {/* Soft overlay gradient on the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
          </div>

          {/* Floating Action Hint */}
          <div className="absolute bottom-6 right-6 px-5 py-2.5 bg-white/95 backdrop-blur-md rounded-xl text-xs font-bold uppercase tracking-widest text-stone-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Explore
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const len = projectsWithImages.length;

  return (
    <div className="relative bg-stone-50 overflow-hidden" id="projects">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

      <style>{`
        :root {
          --carousel-radius: 85vw;
        }
        @media (min-width: 768px) {
          :root {
            --carousel-radius: 800px;
          }
        }
        
        .carousel-container {
          perspective: 3000px;
          perspective-origin: 50% 40%;
        }

        .carousel-wrapper {
          transform-style: preserve-3d;
          animation: carousel-rotate 35s infinite linear;
        }

        .carousel-wrapper:hover {
          animation-play-state: paused;
        }

        @keyframes carousel-rotate {
          0% {
            transform: translateZ(calc(var(--carousel-radius) * -1)) rotateY(0deg);
          }
          100% {
            transform: translateZ(calc(var(--carousel-radius) * -1)) rotateY(-360deg);
          }
        }
      `}</style>

      {/* Intro Section */}
      <section className="py-24 px-6 container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-700 font-mono text-xs tracking-widest uppercase font-semibold">Selected Works</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Gallery</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            A curated selection of robust applications and digital solutions. 
            <span className="block mt-2 text-sm text-stone-400 italic">Interact with the carousel to explore.</span>
          </p>
        </motion.div>
      </section>

      {/* 3D Carousel Container */}
      <div className="carousel-container relative w-full h-[70vh] sm:h-[60vh] md:h-[550px] flex items-center justify-center mb-40 mt-12 pb-12 relative z-20">
        <div className="carousel-wrapper absolute w-[85vw] sm:w-[80vw] md:w-[800px] h-[70vh] sm:h-[60vh] md:h-[450px]">
          {projectsWithImages.map((project, i) => {
            const angle = (i * 360) / len;
            return (
              <CarouselCard
                key={project.id || i}
                project={project}
                angle={angle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
