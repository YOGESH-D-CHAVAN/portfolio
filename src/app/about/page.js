import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaCode, FaRocket, FaHandshake, FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'About Yogesh Chavan | The Story Behind the Engineer',
  description: 'Learn more about Yogesh Chavan, his journey into software engineering, his philosophy on clean code, and his dedication to building the future of the web.',
};

export default function AboutPage() {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Lines of Code', value: '100K+' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-12 text-center max-w-4xl mx-auto">
             <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase mb-4 block">The Biography</span>
             <h1 className="text-6xl md:text-8xl font-black text-stone-900 mb-8 leading-tight">Driven by Code. Defined by <span className="text-emerald-600">Performance.</span></h1>
             <p className="text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
                I am Yogesh Chavan—a Software Engineer who believes that in the digital age, knowledge and speed are the only metrics that matter. 
             </p>
          </div>
        </section>

        {/* The Narrative */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
            <div className="lg:col-span-7 space-y-12">
                <div>
                    <h2 className="text-3xl font-bold text-stone-900 mb-6 flex items-center gap-4">
                        <span className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl"><FaRocket /></span>
                        The Mission
                    </h2>
                    <div className="prose prose-lg text-stone-600 space-y-6 max-w-none">
                        <p>
                            Starting my journey 2 years ago, I didn't set out to just 'write code.' I set out to solve the problems that modern businesses face when transitioning into a digital-first world. 
                        </p>
                        <p>
                            While some rely on decades of legacy experience, I thrive on the **Speed of Now**. My expertise is built on the latest architectural patterns, ensuring that every application I build is ready for the demands of 2026 and beyond.
                        </p>
                        <p>
                            I specialize in the **MERN Stack** and **Next.js**, bridging the gap between complex backend engineering and intuitive, high-converting user interfaces.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="p-8 bg-white rounded-[2rem] border border-stone-100 shadow-xl text-center">
                            <div className="text-4xl font-black text-emerald-600 mb-2">{stat.value}</div>
                            <div className="text-sm font-bold text-stone-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-8">
                    <div className="p-10 bg-stone-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h3 className="text-2xl font-bold mb-6">Core Philosophy</h3>
                        <ul className="space-y-6">
                            {[
                                { title: 'Atomic Excellence', desc: 'Code should be clean, modular, and maintainable.' },
                                { title: 'User-First Logic', desc: 'If the user doesn\'t understand it, the engineering failed.' },
                                { title: 'Performance is UX', desc: 'Speed isn\'t an afterthought; it\'s a primary feature.' }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1"><FaCode className="text-emerald-500" /></div>
                                    <div>
                                        <h4 className="font-bold text-stone-100 mb-1">{item.title}</h4>
                                        <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-10 bg-white border border-stone-100 rounded-[3rem] shadow-xl">
                        <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                            <FaHandshake className="text-emerald-600" /> Let's Connect
                        </h3>
                        <p className="text-stone-600 mb-8 leading-relaxed">
                            I am always looking for challenges that push the boundaries of what is possible on the web.
                        </p>
                        <Link href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-2xl font-bold group">
                            Work with me <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Education & Roots */}
        <section className="bg-white rounded-[4rem] p-12 md:p-20 border border-stone-100 shadow-2xl">
            <div className="max-w-4xl">
                <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase mb-4 block">Foundations</span>
                <h2 className="text-4xl font-bold text-stone-900 mb-12">Academic & Self-Taught Roots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4 p-8 bg-stone-50 rounded-3xl">
                        <FaGraduationCap size={32} className="text-emerald-600" />
                        <h4 className="text-xl font-bold text-stone-900">Computer Science & Engineering</h4>
                        <p className="text-stone-600 leading-relaxed">
                            My formal education provided the theoretical backbone—algorithms, data structures, and computer architecture.
                        </p>
                    </div>
                    <div className="space-y-4 p-8 bg-stone-50 rounded-3xl">
                        <FaCode size={28} className="text-emerald-600" />
                        <h4 className="text-xl font-bold text-stone-900">Open Source & Community</h4>
                        <p className="text-stone-600 leading-relaxed">
                            True mastery came from building, breaking, and shipping real projects to the open-source community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
