import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// navbar
import Navbar from "./components/Navbar";
// pages
import Home from "./components/Home";
import Contact from "./components/Contact";
// windows
import WelcomeWindow from "./components/WelcomeWindow";
import AboutMeWindow from "./components/AboutMeWindow";
import LinksWindow from "./components/LinksWindow";
import ContactWindow from "./components/ContactWindow";

import wallpaper from "./assets/backgrounds/wallpaper4.gif";

function App() {
  return (
    <main
      className="w-screen h-screen overflow-y-scroll no-scrollbar bg-cover bg-center bg-no-repeat text-white font-pixel"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <WelcomeWindow />
      <AboutMeWindow />
      <Router>
        <LinksWindow />
      </Router>
      <ContactWindow />
    </main>
  );
}

export default App;
