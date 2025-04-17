import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// navbar
import Navbar from "./components/Navbar";
// modal
import AboutMeWindow from "./components/AboutMeWindow";
import ContactWindow from "./components/ContactWindow";
import LinksWindow from "./components/LinksWindow";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
