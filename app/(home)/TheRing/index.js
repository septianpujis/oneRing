"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";

const TheRing = () => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh rotation={[-Math.PI / 1, 1, 1]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="red" roughness={0.5} metalness={0.5} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default TheRing;
