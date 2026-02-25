import { posts } from '../../data/posts';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';


export const metadata = {
  title: 'Blog & Knowledge Base | Yogesh Chavan - Software Engineer',
  description: 'Deep dives into web performance, React patterns, and full-stack architecture. Sharing knowledge as a Full-Stack Software Engineer.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="mb-20 text-center">
            <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase mb-4 block">Knowledge Base</span>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6">Expertise & <span className="text-emerald-600">Insights</span></h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Why experience is just a number. Knowledge is about the depth of understanding and the ability to solve complex problems.
            </p>
        </header>

        <div className="grid grid-cols-1 gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-stone-900 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent z-10" />
                 <div className="absolute inset-0 flex items-center justify-center p-12 text-center opacity-40 group-hover:opacity-60 transition-opacity">
                    <span className="text-8xl font-bold text-white uppercase tracking-tighter select-none">{post.category.split(" ")[0]}</span>
                 </div>
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                <div>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-stone-400 mb-6 font-medium">
                        <span className="flex items-center gap-2"><FaCalendarAlt size={12} /> {post.date}</span>
                        <span className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase"><FaTag size={10} /> {post.category}</span>
                    </div>

                    <h2 className="text-3xl font-bold text-stone-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    
                    <p className="text-stone-600 text-lg leading-relaxed mb-8">
                        {post.excerpt}
                    </p>
                </div>

                <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-stone-900 group/link"
                >
                    Read Full Article <FaArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
