import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Analytics from './components/Analytics';
import ContactAdmin from './components/ContactAdmin';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Analytics />
      <Contact />
      <ContactAdmin />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;