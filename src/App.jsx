import { Toaster } from 'react-hot-toast';
import './App.css'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer/>
      <Toaster />
    </>
  );
}

export default App
