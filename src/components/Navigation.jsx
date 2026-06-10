import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const items = [
  { id: "hero", label: "Home" },
  { id: "camera", label: "Camera" },
  { id: "battery", label: "Battery" },
  { id: "features", label: "Features" },
  { id: "showcase", label: "Showcase" },
];

export default function Navigation() {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const distanceFromRight =
        window.innerWidth - e.clientX;

      setNear(distanceFromRight < 250);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <motion.nav
      className="ios-nav"
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: near ? -30 : -20, // -30 -> hacia donde crece y cuanto; -20 -> posicion normal
        opacity: near ? 1 : 0.6,
        scale: near ? 1 : 0.82,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {items.map((item) => (
        <motion.button
          key={item.id}
          className="ios-nav-item"
          whileHover={{
            scale: 1.2,
            x: -8,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() =>
            scrollToSection(item.id)
          }
        >
          <span>{item.label}</span>

          <div className="nav-dot" />
        </motion.button>
      ))}
    </motion.nav>
  );
}