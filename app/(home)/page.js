import { Qoutes } from "../../component";
import End from "./End";
import Footer from "./Footer";
import Hero from "./Hero";
import Infograph from "./Infograph";
import Intro from "./Intro";
import Negative from "./Negative";
import People from "./People";
import TheRing from "./TheRing";

export default function Home() {
  return (
    <main>
      <TheRing />
      <Hero />
      <Intro desc={`Tribute to Tolkien's Universe: The One Ring`}>
        <Qoutes text={`Isildur's Bane`} position={`top-1/4 right-1/3`} />
      </Intro>
      <Infograph />
      <Intro
        desc={
          <>
            " One Ring to rule them all, <br />
            One Ring to find them, <br />
            One Ring to bring them all <br />
            and in the darkness bind them. "
          </>
        }
      />
      <Negative />
      <People />
      <End />
      <Footer />
    </main>
  );
}
