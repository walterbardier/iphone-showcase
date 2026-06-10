import { useEffect, useRef } from "react";
import { usePhone } from "../context/PhoneContext";

import { motion } from "framer-motion";

export default function CameraSection() {
  const ref = useRef();

  const { setSection } = usePhone();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSection("camera");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="camera" className="feature-section">
      <motion.div
        className="glass-feature"

        initial={{
          opacity: 0,
          y: 80,
          filter: "blur(20px)",
          scale: 0.95,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
        }}

        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}

        viewport={{
          once: false,
          amount: 0.5,
        }}
      >

        <span>48MP Pro Camera</span>

        <h2>
          Capture
          every detail.
        </h2>

        <p>
          Incredible sharpness, depth,
          and low-light performance.
        </p>

        <div className="feature-stats">

          <div className="stat-card">
            <h3>48MP</h3>
            <p>Main Sensor</p>
          </div>

          <div className="stat-card">
            <h3>4K</h3>
            <p>Cinematic Video</p>
          </div>

          <div className="stat-card">
            <h3>3x</h3>
            <p>Optical Zoom</p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}