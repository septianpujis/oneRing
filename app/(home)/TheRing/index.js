"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";

const TheRing = () => {
  return (
    <div className="fixed left-1/3 top-1/5 w-[500px] h-[500px] animate-spin-slow">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh rotation={[-Math.PI / 1, 1, 1]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="red" roughness={0.5} metalness={0.5} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default TheRing;
