"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import aiCertImage from '../../assets/images/A1.jpeg';

export default function AICertification() {
  return (
    <section className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Dynamic Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            {/* Image Side (Certification) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.3)] border-4 border-white/10 group">
                <Image
                  src={aiCertImage}
                  alt="Agentic AI Certification"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent mix-blend-overlay" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -top-6 -right-6 md:right-0 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Certified</p>
                    <p className="text-indigo-200 text-xs">AI Engineer</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-[2px] bg-indigo-500 rounded-full"></span>
                <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase font-bold">New Milestone</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Certified <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                  Agentic AI Engineer.
                </span>
              </h2>

              <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p className="text-lg md:text-xl text-stone-300 leading-relaxed">
                  "Earned certification in <span className="text-indigo-300 font-semibold">Agentic AI</span> after an intensive 5-day specialized training. Mastered the architecture of autonomous AI agents, multi-agent orchestrations, and advanced reasoning frameworks."
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 divide-x divide-white/10">
                <div className="pl-0">
                  <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold mb-2">Duration</p>
                  <p className="text-white font-bold">5 Days Intensive</p>
                </div>
                <div className="pl-8">
                  <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold mb-2">Focus</p>
                  <p className="text-white font-bold">Autonomous Agents</p>
                </div>
              </div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="mt-10 flex items-center gap-4 text-indigo-400 font-bold group cursor-pointer"
              >
                <span>View Credentials</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
