import React from "react";
import style from "./Infograph.module.css";

const Infograph = () => {
  return (
    <section className="container flex flex-col mx-auto">
      <div className="h-screen w-full md:w-6/12 xl:w-5/12 ml-auto flex items-center">
        <p>
          In the fires of Mount Doom, Sauron forged the One Ring, an artifact of
          immense power imbued with his dark essence. This ring, destined to
          shape the fate of Middle-earth, held dominion over the others and
          promised the Dark Lord ultimate control.
        </p>
      </div>
      <div className="h-screen w-5/12 flex items-center">
        <p>
          Crafted from Mount Doom's fiery depths and inscribed with secrets of
          Mordor, the Ring's influence was undeniable. It tested the very fabric
          of good and drew in even the purest hearts, posing a constant threat
          to the balance of Middle-earth.
        </p>
      </div>
    </section>
  );
};

export default Infograph;
