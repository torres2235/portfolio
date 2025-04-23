import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// navbar
import Navbar from "./components/Navbar";
// windows
import AboutMeWindow from "./components/AboutMeWindow";
import ContactWindow from "./components/ContactWindow";
import LinksWindow from "./components/LinksWindow";

import wallpaper from "./assets/backgrounds/wallpaper3.gif";

function App() {
  return (
    <main
      className="w-screen h-screen h-42 overflow-y-scroll no-scrollbar bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <AboutMeWindow />
      <Router>
        <LinksWindow />
      </Router>
      <ContactWindow />
      {/* <div className="flex justify-center items-center h-screen bg-blue-500">
        <h1 className="text-4xl text-white font-bold">Hello, Tailwind CSS!</h1>
      </div> */}
    </main>
  );
}

export default App;
