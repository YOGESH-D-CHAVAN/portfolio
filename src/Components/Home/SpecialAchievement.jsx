"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import achievementImage from '../../assets/images/A2.webp';

export default function SpecialAchievement() {
  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100h1000M0 200h1000M0 300h1000M0 400h1000" stroke="currentColor" strokeWidth="1" />
          <path d="M100 0v1000M200 0v1000M300 0v1000M400 0v1000" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
                <Image
                  src={achievementImage}
                  alt="College Felicitations - Horizon 2k26"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl font-bold italic" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl font-bold italic" />
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-[2px] bg-emerald-500 rounded-full"></span>
                <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase font-bold">Special Recognition</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">
                Tech-Enabled <br />
                <span className="text-emerald-600">Security Solutions.</span>
              </h2>

              <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-stone-100">
                <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic">
                  "Felicitated by college for developing the secured website for annual gathering 'Horizon 2k26' to restrict the entry of unauthorized students and keep record of entry and exit of people, implemented using QR and scanners."
                </p>
                <div className="absolute -bottom-4 -right-4 p-4 bg-emerald-500 text-white rounded-xl shadow-lg font-bold text-xs uppercase tracking-widest">
                  Horizon 2k26
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 divide-x divide-stone-100">
                <div className="pl-0">
                  <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-2">Institution</p>
                  <p className="text-stone-900 font-bold">SVIT, Nashik</p>
                </div>
                <div className="pl-8">
                  <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold mb-2">Role</p>
                  <p className="text-stone-900 font-bold">Developer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
