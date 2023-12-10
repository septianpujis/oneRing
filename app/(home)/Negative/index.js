import React from "react";
import style from "./Negative.module.css";

const Negative = () => {
  return (
    <section className={style.negative}>
      <div className="w-screen h-screen flex justify-center items-center">
        <h2>Negative part 1</h2>
      </div>
      <div className="bg-black text-white w-screen h-screen flex justify-center items-center">
        <h2>Negative part 2</h2>
      </div>
    </section>
  );
};

export default Negative;
