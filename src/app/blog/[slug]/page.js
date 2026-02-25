import { posts } from '../../../data/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Blog - Yogesh Chavan`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Yogesh Chavan'],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yogeshchavan.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://yogeshchavan.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://yogeshchavan.in/blog/${post.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-6 max-w-4xl">

        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-12 transition-colors font-medium"
        >
          <FaArrowLeft size={14} /> Back to Blog
        </Link>

        <article className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-stone-100 shadow-2xl overflow-hidden relative">
            {/* Visual Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-40 pointer-events-none" />
            
            <header className="relative z-10 mb-12">
                <div className="flex flex-wrap items-center gap-6 text-sm text-stone-400 mb-6 font-medium">
                    <span className="flex items-center gap-2"><FaCalendarAlt size={12} /> {post.date}</span>
                    <span className="flex items-center gap-2"><FaUser size={12} /> By {post.author}</span>
                    <span className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{post.category}</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight mb-8">
                    {post.title}
                </h1>
                
                <p className="text-2xl text-stone-500 font-medium italic leading-relaxed">
                    "{post.excerpt}"
                </p>
            </header>

            <div className="prose prose-lg prose-stone max-w-none relative z-10 leading-relaxed text-stone-600">
                {/* Simulated Content with actual knowledge pieces */}
                <div className="space-y-8">
                    <p className="text-xl">
                        {post.content}
                    </p>
                    
                    <h2 className="text-2xl font-bold text-stone-900 pt-8 border-t border-stone-100">Why this matters</h2>
                    <p>
                        In my journey as a Full-Stack Engineer, I've realized that the tools change every year, but the principles of good architecture remain constant. Whether it's the nuances of event loops in Node.js or the optimization algorithms in modern CSS engines, understanding the 'why' is what separates a developer from an engineer.
                    </p>

                    <blockquote className="border-l-4 border-emerald-500 bg-emerald-50 p-6 rounded-r-xl italic font-medium text-emerald-900">
                        "Experience is just how many times you've seen a problem. Knowledge is knowing why the solution works."
                    </blockquote>

                    <div className="flex flex-wrap gap-2 pt-12">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 bg-stone-100 text-stone-600 rounded-lg text-sm font-bold border border-stone-100">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="mt-20 pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-white font-bold">YC</div>
                    <div>
                        <p className="text-sm font-bold text-stone-900">Yogesh Chavan</p>
                        <p className="text-xs text-stone-400">Full-Stack Software Engineer</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 text-stone-400">
                    <span className="text-xs font-bold uppercase tracking-widest mr-2">Share</span>
                    <button className="hover:text-stone-900 transition-colors"><FaFacebook size={18} /></button>
                    <button className="hover:text-stone-900 transition-colors"><FaTwitter size={18} /></button>
                    <button className="hover:text-stone-900 transition-colors"><FaLinkedin size={18} /></button>
                </div>
            </footer>
        </article>
      </div>
    </div>
  );
}
