import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import Footer from "../Footer/Footer";

import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    /*
     * Si entramos a una ruta con hash,
     * por ejemplo:
     *
     * /proyectos#ecobuildlab
     *
     * dejamos que el navegador llegue al proyecto
     * correspondiente.
     */
    if (location.hash) {
      const id = location.hash.substring(1);

      requestAnimationFrame(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        }
      });

      return;
    }

    /*
     * Si no hay hash, cada página comienza arriba.
     */
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  const footerVariants = {
    "/": "gray",
    "/sobre-mi": "white",
    "/proyectos": "white",
    "/contacto": "orange",
  };

  const footerVariant = footerVariants[location.pathname] || "white";

  return (
    <div className="page">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <FeaturedProjects />
            </main>
          }
        />

        <Route path="/sobre-mi" element={<About />} />

        <Route path="/proyectos" element={<Projects />} />

        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer variant={footerVariant} />
    </div>
  );
}

export default App;
