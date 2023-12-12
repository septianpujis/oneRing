import React from "react";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="container">
        <h1 className="relative z-[2] font-extrabold font-hero text-center">
          ONE RING TO RULE THEM ALL
        </h1>
      </div>
    </section>
  );
};

export default Hero;
