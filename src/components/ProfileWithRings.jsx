import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import profileImage from "../assets/rva.png";
//import HackerBackground from "./HackerBackground";
//import { FaShieldAlt, FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";

const ProfileWithRings = ({ size = 180 }) => {
  const viewBox = 220;
  const center = viewBox / 2;

  const rings = [
    { radius: 60, dots: 12, speed: 12 },
    { radius: 90, dots: 16, speed: 20 },
    { radius: 120, dots: 20, speed: 28 },
  ];

//   const icons = [
//     { component: FaShieldAlt, angle: 0 },
//     { component: FaCode, angle: 90 },
//     { component: FaLaptopCode, angle: 180 },
//     { component: FaDatabase, angle: 270 },
//   ];

  return (
    <div className="glow-wrapper mb-4">
      <svg
        className="ring-svg"
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        width={size + 160}
        height={size + 160}
      >
        {/* Rotating Rings */}
        {rings.map((ring, i) => (
          <motion.circle
            key={i}
            cx={center}
            cy={center}
            r={ring.radius}
            fill="none"
            stroke={`rgba(0, 200, 255, ${0.2 + i * 0.2})`}
            strokeWidth={2}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: ring.speed, ease: "linear" }}
            style={{ transformOrigin: "50% 50%" }}
          />
        ))}

        {/* Orbiting Dots */}
        {rings.map((ring, i) =>
          Array.from({ length: ring.dots }).map((_, j) => (
            <motion.circle
              key={`${i}-${j}`}
              cx={center - ring.radius}
              cy={center}
              r={3}
              fill={`rgba(0,255,255,${0.7 - i * 0.15})`}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: ring.speed,
                ease: "linear",
                repeatType: "loop",
                delay: (j / ring.dots) * (ring.speed / 2),
              }}
              style={{
                originX: center,
                originY: center,
                transformBox: "fill-box",
                transformOrigin: "center",
              }}
            />
          ))
        )}
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

      {/* Orbiting icons */}
      {/* {icons.map((iconObj, idx) => {
        const Icon = iconObj.component;
        const radius = rings[rings.length - 1].radius + 30;
        const angleRad = (iconObj.angle * Math.PI) / 180;
        const x = radius * Math.cos(angleRad);
        const y = radius * Math.sin(angleRad); */}

        return (
          <motion.div
            // key={idx}
            // className="orbit-icon"
            // style={{
            //   left: `calc(50% + ${x}px)`,
            //   top: `calc(50% + ${y}px)`,
            // }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {/* <Icon color="#00c8ff" size={24} /> */}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProfileWithRings;
