import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

// Helper to get local image (hack for demo, ideally images are in public or imported correctly)
// Since we are in a sub-directory, imports might be tricky. Using absolute paths or public folder is better.
const getProjectImage = (slug) => {
    // In a real app, you'd probably have these in the public folder or a mapping
    switch(slug) {
        case 'edumedia': return '/edu.jpg'; // Placeholder or actual path
        default: return 'https://via.placeholder.com/1200x800';
    }
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | ${project.category} Portfolio - Yogesh Chavan`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Yogesh Chavan Project`,
      description: project.description,
      images: [project.image || '/og-image.png'],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

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
        "name": "Projects",
        "item": "https://yogeshchavan.in/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://yogeshchavan.in/projects/${project.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-6 max-w-6xl">

        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-12 transition-colors font-medium"
        >
          <FaArrowLeft size={14} /> Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <span className="text-emerald-600 font-mono text-sm tracking-widest uppercase mb-4 block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed mb-12">
              {project.description}
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-100 shadow-sm">
                      <div className="mt-1 p-1 bg-emerald-100 text-emerald-600 rounded">
                        <FaCheck size={12} />
                      </div>
                      <span className="text-stone-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-3 py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all shadow-xl hover:shadow-stone-900/20"
                >
                  <FaGithub size={20} /> View Github
                </a>
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 py-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-xl hover:shadow-emerald-500/20"
                  >
                    <FaExternalLinkAlt size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar / Tech Stack */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-stone-50 text-stone-700 rounded-lg text-sm font-bold border border-stone-100 hover:border-emerald-200 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Knowledge Section */}
              <div className="bg-emerald-600 p-8 rounded-2xl text-white shadow-xl shadow-emerald-200">
                <h3 className="text-lg font-bold mb-4">Want to learn how I built this?</h3>
                <p className="text-emerald-50 opacity-90 mb-6 text-sm flex-grow">
                  I've documented the architecture and challenges of this project in my knowledge base.
                </p>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                >
                  Read Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
