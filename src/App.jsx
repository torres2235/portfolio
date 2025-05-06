import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// navbar
import Navbar from "./components/Navbar";
// pages
import Home from "./components/Home";
import Error from "./components/Error";
// windows
import WelcomeWindow from "./components/windowComponents/WelcomeWindow";
import AboutMeWindow from "./components/windowComponents/AboutMeWindow";
import ProjectsWindow from "./components/windowComponents/ProjectsWindow";
import LinksWindow from "./components/windowComponents/LinksWindow";
import ContactWindow from "./components/windowComponents/ContactWindow";
import CreditsWindow from "./components/windowComponents/CreditsWindow";

import wallpaper from "./assets/backgrounds/wallpaper4.gif";

function App() {
  return (
    <main
      className="w-screen h-screen overscroll-none no-scrollbar bg-cover bg-center bg-no-repeat text-white font-pixel"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>

      <WelcomeWindow />
      <AboutMeWindow />
      <ProjectsWindow />
      <Router>
        <LinksWindow />
      </Router>
      <ContactWindow />
      <Router>
        <CreditsWindow />
      </Router>
    </main>
  );
}

export default App;
