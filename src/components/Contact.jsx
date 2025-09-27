import React from 'react';
import '../styles/Contact.css';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import HackerBackground from './HackerBackground';


const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <HackerBackground />

      <div className="terminal-box container">
      <div className="terminal-header">
  <Typewriter
    words={['root@rutuja-portfolio:~$']}
    loop={1}
    cursor
    typeSpeed={90}
    cursorStyle="_"
  />
</div>

        <form className="terminal-form" action="https://formsubmit.co/your@email.com" method="POST">

        <input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="box" />
<input type="hidden" name="_subject" value="New message from Portfolio Contact Form!" />


<motion.label initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <label>
            <span> Enter your name:</span>
            <input type="text" placeholder="Your Name" required />
          </label>
          </motion.label>

          <motion.label initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <label>
            <span> Enter your email:</span>
            <input type="email" placeholder="your@email.com" required />
          </label>
          </motion.label>

          <motion.label initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <label>
            <span> Type your message:</span>
            <textarea rows="4" placeholder="Hey Rutuja, I’d like to connect!" required />
          </label>
          </motion.label>

          <button type="submit"> send_message</button>
        </form>
        <div className="blinking-cursor">|</div>
      </div>
    </section>
  );
};

export default Contact;
