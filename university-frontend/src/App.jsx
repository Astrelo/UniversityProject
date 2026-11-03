import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      {/* Ruban décoratif bleu en haut à droite */}
      <div className="blue-ribbon top-ribbon"></div>
      
      <Navbar />
      <Hero />
      <QuickLinks />
      <About />
      <News />
      <Footer />
    </div>
  );
}

export default App;
