import React from "react";
import style from "./Negative.module.css";

const Negative = () => {
  return (
    <section className={style.negative}>
      <div className="h-[300vh] relative">
        <div className="w-screen h-screen flex justify-center items-center sticky top-0 left-0">
          <p className="text-2xl text-center w-8/12">
            For those who dared to wear it, the One Ring bestowed upon them a
            chilling gift: <br />
            <br />
            invisibility to the mortal world. The bearer would vanish from
            sight, hidden from the eyes of men, elves, and dwarves.
          </p>
        </div>
      </div>
      <div className="h-[300vh] relative">
        <div className="bg-black text-white w-screen h-screen flex justify-center items-center sticky top-0 left-0">
          <p className="text-2xl text-center w-8/12">
            But this invisibility was not a blessing. It was a curse that cast
            the bearer into a shadowy realm, unseen by the world yet exposed to
            the watchful eyes of Sauron. <br />
            <br />
            The Ring acted as a beacon, broadcasting its location to the Dark
            Lord, drawing him ever closer to his precious treasure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Negative;
