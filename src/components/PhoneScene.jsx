import { Canvas, useFrame } from "@react-three/fiber";

import {
  Environment,
  Float,
} from "@react-three/drei";

import { useEffect } from "react";

import { useRef } from "react";

import IphoneModel from "./IphoneModel";

import { usePhone } from "../context/PhoneContext";

function AnimatedPhone() {
  const phoneRef = useRef();

  const { section } = usePhone();

  const target = useRef({
    rotX: 0.15,
    rotY: -0.4,
    posX: 0,
    posY: 0,
    scale: 10,
  });

  useFrame(() => {
    if (!phoneRef.current) return;

    switch (section) {
      case "hero":
        target.current = {
          rotX: 0.15,
          rotY: -0.4,
          posX: 0,
          posY: 0,
          scale: 10,
        };
        break;

      case "camera":
        target.current = {
          rotX: 0.25,
          rotY: 1.2,
          posX: 0.8,
          posY: 0.1,
          scale: 13,
        };
        break;

      case "battery":
        target.current = {
          rotX: 0,
          rotY: 1.57,
          posX: 1.4,
          posY: -0.2,
          scale: 15,
        };
        break;

      case "features":
        target.current = {
          rotX: -0.1,
          rotY: -0.2,
          posX: 0.5,
          posY: -0.6,
          scale: 18,
        };
        break;

      case "showcase":
        target.current = {
          rotX: 0.05,
          rotY: target.current.rotY + 0.01,
          posX: 0,
          posY: -0.2,
          scale: 14,
        };
        break;

      default:
        break;
    }

    phoneRef.current.rotation.x +=
      (target.current.rotX - phoneRef.current.rotation.x) * 0.04;

    phoneRef.current.rotation.y +=
      (target.current.rotY - phoneRef.current.rotation.y) * 0.04;

    phoneRef.current.position.x +=
      (target.current.posX - phoneRef.current.position.x) * 0.04;

    phoneRef.current.position.y +=
      (target.current.posY - phoneRef.current.position.y) * 0.04;

    phoneRef.current.scale.x +=
      (target.current.scale - phoneRef.current.scale.x) * 0.04;

    phoneRef.current.scale.y +=
      (target.current.scale - phoneRef.current.scale.y) * 0.04;

    phoneRef.current.scale.z +=
      (target.current.scale - phoneRef.current.scale.z) * 0.04;
  });

  useEffect(() => {
    if (!phoneRef.current) return;
  
    phoneRef.current.scale.set(10, 10, 10);
  
    phoneRef.current.rotation.set(
      0.15,
      -0.4,
      0
    );
  }, []);

  return (
    <Float
      speed={1.5}
      floatIntensity={1.5}
      rotationIntensity={0.5}
    >
      <group ref={phoneRef}>
        <IphoneModel
          scale={4}
          position={[0, -0.48, 0]}
        />
      </group>
    </Float>
  );
}

export default function PhoneScene() {
  return (
    <div className="phone-fixed">
      <Canvas
        camera={{
          position: [0, 0, 12],
          fov: 28,
        }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
        />

        <pointLight
          position={[0, 0, 2]}
          intensity={8}
          color="#8b7dff"
        />

        <pointLight
          position={[2, 2, 3]}
          intensity={5}
          color="#ffffff"
        />

        <Environment preset="city" />

        <AnimatedPhone />
      </Canvas>
    </div>
  );
}