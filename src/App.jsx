import Header from './Components/layouts/Header';
import Hero from './Components/Home/Hero';
import Projects from './Components/Home/Projects';
import Contact from './Components/Home/Contact';
import Footer from './Components/layouts/Footer';
import project from './data/projects';
import Skills from './Components/Home/Skills';
import Experience from './Components/Home/workExperience';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Skills/>
        <Projects  project={project} />
        <Experience/>
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}