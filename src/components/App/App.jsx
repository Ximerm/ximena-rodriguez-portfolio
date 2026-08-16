import "./App.css";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <Hero />
        <FeaturedProjects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
