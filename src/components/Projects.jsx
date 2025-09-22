import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projectsData = [
  {
    title: 'Smart Budget Buddy',
    category: 'Web',
    description: 'Expense tracker with AI insights for budgeting and savings.',
    tech: 'MERN, AI',
  },
  {
    title: 'Plant Care Scheduler',
    category: 'Web',
    description: 'Reminders and logs for indoor plant care with AI tips.',
    tech: 'MEVN (Vue.js, Node.js, MongoDB, Express), AI',
  },
  {
    title: 'Vue Pomodoro App',
    category: 'Web',
    description: 'A simple productivity timer built with Vue.js.',
    tech: 'Vue.js',
  },
  {
    title: 'Cryptography Algorithm Visualizer',
    category: 'Cybersecurity',
    description: 'Interactive visualization of cryptography algorithms.',
    tech: 'React.js',
  },
  {
    title: 'VulnScanner Web App',
    category: 'Cybersecurity',
    description: 'Web vulnerability scanning tool for security analysis.',
    tech: 'Python, Flask',
  },
  {
    title: 'Secure File Vault',
    category: 'Cybersecurity',
    description: 'End-to-end encrypted file storage using AES and hashing algorithms.',
    tech: 'Python, Flask, JWT',
  },
  {
    title: 'JWT Attack Simulator',
    category: 'Cybersecurity',
    description: 'Educational tool to simulate and understand JWT attacks.',
    tech: 'Python, Flask',
  },
  {
    title: 'Cybersecurity Awareness App',
    category: 'Cybersecurity',
    description: 'Educates users about phishing, malware, and safety tips.',
    tech: 'React.js, Bootstrap, Firebase',
  },
  {
    title: 'AWS IAM Console Demo',
    category: 'AWS',
    description: 'Practical IAM demo for teaching AWS identity management.',
    tech: 'AWS Console, IAM, Security Groups',
  },
  {
    title: 'All-in-One Expense Tracker',
    category: 'Web',
    description: 'Track expenses with budget goals and real-time charts.',
    tech: 'Next.js, MongoDB, Tailwind, Chart.js',
  },
];

const categories = ['All', 'Web', 'Cybersecurity', 'AWS'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section text-white">
      <div className="container text-center">
        <h2 className="section-title">Projects</h2>

        <div className="filter-buttons mt-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-5 col-lg-4 mb-4 project-card-wrapper"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-card tilt">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <div className="tech-used">{project.tech}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
