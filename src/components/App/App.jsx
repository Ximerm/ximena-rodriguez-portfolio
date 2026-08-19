import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Footer from "../Footer/Footer";

import About from "../About/About";

function App() {
  const location = useLocation();

  const footerVariants = {
    "/": "gray",
    "/sobre-mi": "white",
    "/proyectos": "white",
    "/contacto": "white",
  };

  const footerVariant = footerVariants[location.pathname] || "white";

  return (
    <div className="page">
      <Header />

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <FeaturedProjects />
            </main>
          }
        />

        {/* Página Sobre mí */}
        <Route path="/sobre-mi" element={<About />} />
      </Routes>

      <Footer variant={footerVariant} />
    </div>
  );
}

export default App;
