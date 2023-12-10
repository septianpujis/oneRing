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
      <Intro />
      <Infograph />
      <Negative />
      <People />
      <End />
      <Footer />
    </main>
  );
}
