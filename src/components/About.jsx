import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinux } from 'react-icons/fa';
import { FaPython, FaJava, FaCuttlefish, FaAmazon } from 'react-icons/fa';

import { SiMongodb, SiBootstrap, SiNextdotjs, SiExpress, 
  SiMysql, SiPostgresql, SiSpringboot, SiGraphql, 
  SiFlask, SiDjango, SiGithub, SiVuedotjs  } from 'react-icons/si';
import '../styles/About.css';

const About = () => {
  const techIcons = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiVuedotjs />, name: 'Vue.js' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiBootstrap />, name: 'Bootstrap' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <FaLinux />, name: 'Linux' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiSpringboot />, name: 'Spring Boot' },
  { icon: <SiGraphql />, name: 'GraphQL' },
  { icon: <SiFlask />, name: 'Flask' },
  { icon: <SiDjango />, name: 'Django' },
  { icon: <FaAmazon />, name: 'AWS (IAM/EC2)' }, // AWS generic icon isn't in react-icons
  { icon: <FaPython />, name: 'Python' },
  
  { icon: <FaJava />, name: 'Java' },
  { icon: <FaCuttlefish />, name: 'C / C++' },
  ];

  return (
    <section id="about" className="about-section text-white">
      <div className="container text-center">
        <h2 className="section-title">About Me</h2>

        <div className="terminal-text mt-3">
        <p className="terminal-text">
  <Typewriter
    words={['Developer 💻', 'IT Trainer 📚', 'Cybersecurity Enthusiast 🔐', 'Tech Explorer 🚀']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</p>

        </div>

        <p className="about-description mt-4">
          I'm Rutuja Ainapure — a passionate full-stack developer, tech trainer, and security-conscious thinker.
          I love building elegant UIs, simplifying tech for learners, and exploring how code shapes the digital world.
        </p>

        <h3 className="tech-stack-title mt-5">Tech Stack</h3>
        <div className="row justify-content-center mt-3">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className="col-4 col-sm-3 col-md-2 tech-icon"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-box">
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
