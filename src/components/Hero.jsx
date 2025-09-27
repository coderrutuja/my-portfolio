import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import profileImage from "../assets/rva.png";
import HackerBackground from "./HackerBackground";

const ProfileWithRings = ({ size = 180 }) => {
  const viewBox = 120;
  const center = viewBox / 2;

  // multiple concentric rings radii
  const rings = [44, 50, 56]; 

  return (
    <div className="glow-wrapper mb-4">
      {/* SVG rings behind the profile image */}
      <svg
        className="ring-svg"
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        width={size + 60}
        height={size + 60}
      >
        {rings.map((radius, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={radius}
            className={`ring-ring ring-${i}`}
          />
        ))}
      </svg>

      {/* Profile Image */}
      <motion.img
        src={profileImage}
        alt="Rutuja Ainapure"
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
      <HackerBackground />

      <ProfileWithRings size={180} />

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





// import React from 'react';
// import { motion } from 'framer-motion';
// import '../styles/Hero.css';
// import profileImage from '../assets/rva.png';
// import HackerBackground from './HackerBackground';

// const Hero = () => {
//   return (
//     <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
//       <HackerBackground />

//       <div className="glow-wrapper mb-4">
//         <motion.img
//           src={profileImage}
//           alt="Rutuja Ainapure"
//           className="hero-image"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <p className="tagline">Empowering Tech Magic with Fun</p>
//         <h1 className="display-4 fw-bold">
//           Transforming Ideas into
//           <span className="highlight"> Seamless Experiences</span>
//         </h1>
//         <p className="lead mt-3">
//           Hi! I'm <strong>Rutuja Ainapure</strong>, a Developer, IT Trainer & Cybersecurity Enthusiast.
//         </p>
//         <motion.a
//           href="#projects"
//           className="btn btn-outline-light mt-4"
//           whileHover={{ scale: 1.1 }}
//         >
//           View My Work
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;



// import React from 'react';
// import { motion } from 'framer-motion';
// import '../styles/Hero.css';
// import profileImage from '../assets/rva.png';
// import HackerBackground from './HackerBackground'; // <-- new component

// const Hero = () => {
//   return (
//     <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
//       {/* Hacker vibe background */}
//       <HackerBackground />

//       {/* Profile with glowing circle */}
//       <div className="glow-wrapper mb-4">
//         <motion.img
//           src={profileImage}
//           alt="Rutuja Ainapure"
//           className="hero-image"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <p className="tagline">Empowering Tech Magic with Fun</p>
//         <h1 className="display-4 fw-bold">
//           Transforming Ideas into
//           <span className="highlight"> Seamless Experiences</span>
//         </h1>
//         <p className="lead mt-3">
//           Hi! I'm <strong>Rutuja Ainapure</strong>, a Developer, IT Trainer & Cybersecurity Enthusiast.
//         </p>
//         <motion.a
//           href="#projects"
//           className="btn btn-outline-light mt-4"
//           whileHover={{ scale: 1.1 }}
//         >
//           View My Work
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';
// import { motion } from 'framer-motion';
// import '../styles/Hero.css';
// import profileImage from '../assets/rva.png';

// const Hero = () => {
//   return (
//     <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">

//       <motion.img
//         src={profileImage}
//         alt="Rutuja Ainapure"
//         className="hero-image mb-4"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       />

//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <p className="tagline">Empowering Tech Magic with Fun</p>
//         <h1 className="display-4 fw-bold">
//           Transforming Ideas into
//           <span className="highlight"> Seamless Experiences</span>
//         </h1>
//         <p className="lead mt-3">
//           Hi! I'm <strong>Rutuja Ainapure</strong>, a Developer, IT Trainer & Cybersecurity Enthusiast.
//         </p>
//         <motion.a
//           href="#projects"
//           className="btn btn-outline-light mt-4"
//           whileHover={{ scale: 1.1 }}
//         >
//           View My Work
//         </motion.a>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
