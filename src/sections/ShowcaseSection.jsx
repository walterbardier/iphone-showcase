import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePhone } from "../context/PhoneContext";

function Card({ title, desc }) {
  return (
    <motion.div
      className="showcase-card"
      whileHover={{
        rotateY: 15,
        rotateX: -10,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}

export default function ShowcaseSection() {
  const ref = useRef();
  const { setSection } = usePhone();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSection("showcase");
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="showcase" className="showcase-section">

      {/* GLASS TEXT LAYER */}
      <motion.div
        className="showcase-glass"
        initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>IPHONE 14 PRO MAX</span>

        <h2>
          Power beyond.
          <br />
          Pro beyond.
        </h2>

        <p>
          Dynamic Island, the A16 Bionic chip,
          and an advanced Pro camera system —
          all designed to push everyday experiences further.
        </p>

      </motion.div>

      {/* INTERACTIVE CARDS */}
      <div className="showcase-cards">

        <Card
          title="A16 Bionic"
          desc="Industry-leading performance and efficiency for demanding tasks."
        />

        <Card
          title="Dynamic Island"
          desc="A fluid new way to interact with alerts, activities, and apps."
        />

        <Card
          title="Pro Camera"
          desc="48MP main sensor with incredible detail and low-light performance."
        />

      </div>
    </section>
  );
}