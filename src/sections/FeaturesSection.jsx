import { useEffect, useRef } from "react";
import { usePhone } from "../context/PhoneContext";

import { motion } from "framer-motion";

export default function FeaturesSection() {
  const ref = useRef();

  const { setSection } = usePhone();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSection("features");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="features" className="feature-section">
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

        <span>iOS Experience</span>

        <h2>
          Designed for
          fluidity.
        </h2>

        <p>
          Hardware and software
          working together seamlessly.
        </p>

        <div className="features-grid">

          <div className="mini-glass">
            Dynamic Island
          </div>

          <div className="mini-glass">
            Always-On Display
          </div>

          <div className="mini-glass">
            Face ID
          </div>

          <div className="mini-glass">
            ProMotion 120Hz
          </div>

        </div>

      </motion.div>
    </section>
  );
}