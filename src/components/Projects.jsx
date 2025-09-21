import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projectsData = [
  {
    title: 'All-in-One Expense Tracker',
    category: 'Web',
    description: 'Track expenses with budget goals and real-time charts.',
    tech: 'Next.js, MongoDB, Tailwind, Chart.js',
  },
  {
    title: 'AWS IAM Console Demo',
    category: 'AWS',
    description: 'Practical IAM demo for teaching AWS identity management.',
    tech: 'AWS Console, IAM, Security Groups',
  },
  {
    title: 'Cybersecurity Awareness App',
    category: 'Cybersecurity',
    description: 'Educates users about phishing, malware, and safety tips.',
    tech: 'React.js, Bootstrap, Firebase',
  },
  {
    title: 'Plant Care Scheduler',
    category: 'Web',
    description: 'Reminders and logs for indoor plant care with AI tips.',
    tech: 'Next.js, MongoDB, AI image analysis',
  },
];

const categories = ['All', 'Web', 'AWS', 'Cybersecurity'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

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
