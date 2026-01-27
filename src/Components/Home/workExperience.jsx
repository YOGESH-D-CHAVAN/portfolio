import { motion } from 'framer-motion';
import { FaBuilding, FaFlagCheckered, FaCalendarAlt, FaCheck, FaArrowRight } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    title: "College Website Developer",
    subtitle: "Frontend Engineering & Git Excellence",
    role: "Frontend Developer",
    period: "2023 - Present",
    type: "Development",
    description: "Led the redevelopment of my college's official website with modern, scalable architecture and enterprise-grade version control.",
    achievements: [
      "Built modular, reusable component architecture",
      "Established clean folder structures and naming conventions",
      "Implemented responsive design across all breakpoints",
      "Maintained 100% Git hygiene with semantic commits"
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
    description: "Engineered production-ready full-stack solutions in 48-hour sprints, competing against 500+ teams nationwide.",
    achievements: [
      "Shipped 2 complete MERN stack applications",
      "Implemented JWT auth with 99.9% security score",
      "Optimized API response times by 60%",
      "Built real-time collaborative features"
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "WebSocket"]
  }
];

const TimelineItem = ({ exp, index }) => {
  const isOdd = index % 2 !== 0;
  
  return (
    <div className={`flex flex-col md:flex-row gap-8 md:gap-0 relative ${isOdd ? 'md:flex-row-reverse' : ''}`}>
      {/* Date Marker (Desktop) */}
      <div className={`hidden md:block w-1/2 ${isOdd ? 'pl-12 text-left' : 'pr-12 text-right'} pt-2`}>
        <span className="inline-block px-4 py-1 rounded-full bg-stone-100 text-stone-600 font-mono text-sm font-semibold border border-stone-200">
          {exp.period}
        </span>
      </div>
      
      {/* Center Line Marker */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 flex flex-col items-center">
        <div className="w-[2px] h-full bg-stone-200"></div>
        <div className="absolute top-0 md:top-2 w-10 h-10 rounded-full bg-white border-4 border-stone-100 flex items-center justify-center transform -translate-x-1/2 md:translate-x-[-50%] ml-[2px] md:ml-[1px]">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
        </div>
      </div>
      
      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        className={`w-full md:w-1/2 pl-12 md:pl-12 ${isOdd ? 'md:pr-12 md:pl-0' : 'md:pr-0'}`}
      >
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative group">
          {/* Mobile Date */}
          <div className="md:hidden mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-stone-100 text-stone-600 font-mono text-xs font-semibold">
              {exp.period}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-1 group-hover:text-emerald-700 transition-colors">
            {exp.title}
          </h3>
          <p className="text-emerald-600 font-medium mb-4 flex items-center gap-2">
            {exp.role}
            <span className="w-1 h-1 rounded-full bg-stone-300"></span>
            <span className="text-stone-500 text-sm font-normal">{exp.type}</span>
          </p>
          
          <p className="text-stone-600 mb-6 leading-relaxed text-sm md:text-base">
            {exp.description}
          </p>
          
          <div className="bg-stone-50 rounded-xl p-4 mb-6">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                  <span className="mt-1 text-emerald-500 flex-shrink-0 text-[10px]"><FaCheck /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 bg-white border border-stone-200 rounded-md text-xs font-medium text-stone-600">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-24 md:text-center md:mx-auto">
           <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-stone-900 mb-6"
           >
             Professional <span className="text-stone-400">Journey</span>
           </motion.h2>
           <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto"
           >
             A timeline of my professional roles, key projects, and hackathon victories that define my career path.
           </motion.p>
        </div>

        <div className="flex flex-col gap-0">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-20"
        >
            <a href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 text-stone-900 font-bold border-b-2 border-stone-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                View Full Resume <FaArrowRight size={12} />
            </a>
        </motion.div>
      </div>
    </section>
  );
}