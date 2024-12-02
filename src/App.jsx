import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Features from "./components/Features";

const App = () => {
  return (
    <BrowserRouter>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Features/>
      </main>
    </BrowserRouter>
  );
};

export default App;
