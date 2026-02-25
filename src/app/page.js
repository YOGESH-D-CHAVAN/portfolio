import { Suspense, lazy } from 'react';
import Hero from '../Components/Home/Hero';
import Projects from '../Components/Home/Projects';
import Skills from '../Components/Home/Skills';
import Experience from '../Components/Home/workExperience';
import Contact from '../Components/Home/Contact';
import { projects } from '../data/projects';

// Simple fallback loader
const PageLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

import LatestInsights from '../Components/Home/LatestInsights';
import FAQ from '../Components/Home/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<PageLoader />}>
        <Skills />
        <Projects project={projects} />
        <Experience />
        <LatestInsights />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  );
}


