import React from "react";
import style from "./Intro.module.css";

const Intro = ({ desc, children }) => {
  return (
    <section className="w-screen h-[300vh] relative">
      <div className="sticky top-0 left-0 w-screen h-screen flex justify-center items-center">
        <div className="relative w-screen h-screen">
          {children}
          <h2 className="text-3xl text-center absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-8/12">
            {desc}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Intro;
