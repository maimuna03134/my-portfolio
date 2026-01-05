import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css'

import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseAnimations from './components/MouseAnimations';

function App() {
  useEffect(() => {
    // Hide default cursor on desktop for custom cursor
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      document.body.style.cursor = 'none';
    }

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        {/* Mouse Animations - Only on desktop */}
        <MouseAnimations />
        
        {/* Glass Morphism Background */}
        <div className="fixed inset-0 -z-10">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900" />
          
          {/* Animated orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-400/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-4000" />
          
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-white/30 dark:bg-black/20 backdrop-blur-3xl" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          {/* Hero Section with Glass Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/10 backdrop-blur-sm" />
            <Hero />
          </div>
          
          {/* About Section with Glass Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 dark:bg-black/15 backdrop-blur-md" />
            <About />
          </div>
          
          {/* Skills Section with Glass Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/25 dark:bg-black/12 backdrop-blur-lg" />
            <Skills />
          </div>
          
          {/* Education Section with Glass Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/35 dark:bg-black/18 backdrop-blur-xl" />
            <Education />
          </div>
          
          {/* Projects Section with Glass Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/28 dark:bg-black/14 backdrop-blur-lg" />
            <Projects />
          </div>
          
          {/* Contact Section with Glass Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/32 dark:bg-black/16 backdrop-blur-xl" />
            <Contact />
          </div>
          
          <Footer/>
          <Toaster />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App
