import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="tagline">Empowering Tech Magic with Fun</p>
        <h1 className="display-4 fw-bold">
          Transforming Ideas into
          <span className="highlight"> Seamless Experiences</span>
        </h1>
        <p className="lead mt-3">
          Hi! I'm <strong>Rutuja Ainapure</strong>, a Developer, IT Trainer & Cybersecurity Enthusiast.
        </p>
        <motion.a
          href="#projects"
          className="btn btn-outline-light mt-4"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
