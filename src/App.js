import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
//import { motion } from "framer-motion";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { useEffect } from 'react';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    const updateCursor = (e) => {
      document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* <Testimonials /> */}
        <Footer />
      </main>
    </>
  );
}

export default App;
