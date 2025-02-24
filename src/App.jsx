import React from "react";
// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

let App = () => {
  console.log("thanks for using StepItUp!");
  return (
    <>
      <header className="selection:bg-amber-500">
        <Header />
      </header>
      <main className="selection:bg-black selection:text-white">
        <Hero />
      </main>
      <footer className="selection:bg-black selection:text-white">
        <Footer />
      </footer>
    </>
  );
};

export default App;
