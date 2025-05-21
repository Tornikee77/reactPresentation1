import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Card from "./components/cards/card";

const App = () => {
  return (
    <div>
      <div className="rounded-2xl">
        <Header />
        <Hero />
        <Card />
      </div>
    </div>
  );
};

export default App;
