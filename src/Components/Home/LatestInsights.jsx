"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { posts } from '../../data/posts';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';

export default function LatestInsights() {
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase mb-4 block">Depth of Knowledge</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Latest <span className="text-emerald-600">Insights</span></h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              I believe in sharing knowledge and documenting technical challenges. Here's a look at my latest thoughts on engineering and design.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-xl hover:shadow-stone-900/20"
          >
            Visit Knowledge Base <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-emerald-200 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                <FaBookOpen size={24} />
              </div>
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 block">{post.category}</span>
              <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-emerald-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-stone-900 font-bold text-sm border-b-2 border-stone-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
              >
                Read Article <FaArrowRight size={10} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
