import React from "react";
import style from "./People.module.css";

const People = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h2>People</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div>
            <p>Isildur</p>
          </div>
          <div>
            <p>Déagol</p>
          </div>
          <div>
            <p>Sméagol/Gollum</p>
          </div>
          <div>
            <p>Bilbo Baggins</p>
          </div>
          <div>
            <p>Frodo Baggins</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
