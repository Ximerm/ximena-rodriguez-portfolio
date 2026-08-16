import "./App.css";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <Hero />
        <FeaturedProjects />
      </main>
    </div>
  );
}

export default App;
