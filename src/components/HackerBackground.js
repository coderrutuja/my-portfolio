import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const HackerBackground = () => {
  const mountRef = useRef(null);
  const frameIdRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesMeshRef = useRef(null);

  useEffect(() => {
    const mountEl = mountRef.current; 
    if (!mountRef.current) return;

    // Scene + camera + renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    const rendererEl = renderer.domElement;
    mountRef.current.appendChild(renderer.domElement);

    // Particles geometry
    const particlesCount = 50;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3 + 0] = (Math.random() - 0.5) * 20; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 10; // z
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      // color will be controlled by HSL in animation if you want
      color: 0x00f0ff,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesMeshRef.current = particles;
    scene.add(particles);

    // subtle directional light to get depth
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.2);
    dirLight.position.set(0, 1, 1);
    scene.add(dirLight);

    // Animation loop
    const animate = () => {
      // rotate slowly for hacker vibe
      const mesh = particlesMeshRef.current;
      if (mesh) {
        mesh.rotation.y += 0.0009;
        mesh.rotation.x += 0.0004;
      }

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!rendererRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // CLEANUP
    return () => {
      // stop animation
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
        frameIdRef.current = null;
      }

      // remove resize listener
      window.removeEventListener("resize", handleResize);

      // remove renderer DOM only if mountRef still exists
      try {
        if (mountEl && rendererEl && mountEl.contains(rendererEl)) {
            mountEl.removeChild(rendererEl);
        }
      } catch (err) {
        // safe ignore - guard against nulls
        // console.warn("HackerBackground cleanup removeChild failed:", err);
        console.warn("HackerBackground cleanup failed:", err);
      }

      // dispose geometry/materials to free GPU memory
      if (particlesMeshRef.current) {
        const geom = particlesMeshRef.current.geometry;
        const mat = particlesMeshRef.current.material;
        if (geom) geom.dispose();
        if (mat) {
          if (Array.isArray(mat)) {
            mat.forEach(m => m.dispose && m.dispose());
          } else {
            mat.dispose && mat.dispose();
          }
        }
        scene.remove(particlesMeshRef.current);
        particlesMeshRef.current = null;
      }

      // dispose renderer
      if (rendererRef.current) {
        rendererRef.current.forceContextLoss && rendererRef.current.forceContextLoss();
        rendererRef.current.dispose && rendererRef.current.dispose();
        rendererRef.current = null;
      }
    };
  }, []);

  // container styles are in CSS (see below)
  return <div ref={mountRef} className="hacker-bg" aria-hidden="true" />;
};

export default HackerBackground;
