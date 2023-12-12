import React from "react";
import style from "./People.module.css";
import { Qoutes } from "../../../component";

const People = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h2>People</h2>
        <div className="flex flex-nowrap gap-4">
          <div>
            <p>Isildur</p>
            <div className="w-36 h-36 bg-red-500 rounded-full"></div>
            <p>
              Claimed the Ring from Sauron but succumbed to its allure and was
              later slain by Orcs, losing the Ring in the River Anduin.
            </p>
            <div className="h-4 hover:h-full">
              <p>
                Initially resisting the Ring's influence, Isildur ultimately
                claimed it as his own. This decision proved to be his downfall,
                leading to his own demise and the loss of the Ring.
              </p>
              <Qoutes text={`Lorem Ipsum Dolor sit amet`} />
            </div>
          </div>
          <div>
            <p>Déagol</p>
            <div className="w-36 h-36 bg-yellow-500 rounded-full"></div>
            <p>
              Briefly held the Ring while fishing, but was murdered by his
              friend Sméagol over its possession.
            </p>
            <div className="h-4 hover:h-full">
              <p>
                Déagol stumbled upon the Ring while fishing in the River Anduin.
                However, his joy was short-lived as his friend Sméagol, consumed
                by desire, killed him to claim it.
              </p>
              <Qoutes text={`Lorem Ipsum Dolor sit amet`} />
            </div>
          </div>
          <div>
            <p>Sméagol/Gollum</p>
            <div className="w-36 h-36 bg-purple-500 rounded-full"></div>
            <p>
              Possessed the Ring for centuries, twisting his body and mind into
              Gollum. Lost the Ring to Bilbo Baggins.
            </p>
            <div className="h-4 hover:h-full">
              <p>
                Driven by his obsession with the Ring, Sméagol murdered his
                friend Déagol and was subsequently transformed into the
                grotesque creature known as Gollum. He held onto the Ring for
                centuries, its corrupting influence altering his body and soul.
              </p>
              <Qoutes text={`Lorem Ipsum Dolor sit amet`} />
            </div>
          </div>
          <div>
            <p>Bilbo Baggins</p>
            <div className="w-36 h-36 bg-blue-500 rounded-full"></div>
            <p>
              Found the Ring in Gollum's cave and used it for decades before
              reluctantly passing it on to Frodo.
            </p>
            <div className="h-4 hover:h-full">
              <p>
                Bilbo stumbled upon the Ring during his adventure with the
                dwarves. Despite its tempting power, he managed to resist its
                full influence and eventually decided to give it up for the
                greater good.
              </p>
              <Qoutes text={`Lorem Ipsum Dolor sit amet`} />
            </div>
          </div>
          <div>
            <p>Frodo Baggins</p>
            <div className="w-36 h-36 bg-green-500 rounded-full"></div>
            <p>
              Inherited the Ring from Bilbo and embarked on a perilous journey
              to destroy it, ultimately succeeding at Mount Doom.
            </p>
            <div className="h-4 hover:h-full">
              <p>
                Frodo bravely accepted the responsibility of destroying the Ring
                and endured immense physical and mental strain throughout his
                journey. He faced numerous challenges and confrontations,
                ultimately succeeding in his quest despite the Ring's constant
                temptation.
              </p>
              <Qoutes text={`Lorem Ipsum Dolor sit amet`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
