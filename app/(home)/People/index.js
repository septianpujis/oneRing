import React from "react";
import style from "./People.module.css";

const People = () => {
  return (
    <section className={style.people}>
      <h2>People</h2>
      <div>
        {/* Carousel */}
        <div>
          <h3>Person 1</h3>
        </div>
        <div>
          <h3>Person 2</h3>
        </div>
        <div>
          <h3>Person 3</h3>
        </div>
      </div>
    </section>
  );
};

export default People;
