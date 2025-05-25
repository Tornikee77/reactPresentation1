import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Card from "./components/cards/card";
import { EmblaCarousel } from "./components/emblaCarousel/BurgerEmbla";

const App = () => {
  return (
    <div>
      <div className="rounded-2xl">
        <Header />
        <Hero />

        <EmblaCarousel />
      </div>
    </div>
  );
};

export default App;
