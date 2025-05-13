import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// navbar
import Navbar from "./components/Navbar";
// pages
import Home from "./components/Home";
import Error from "./components/Error";

import { useGlobalContext } from "./context/context";

import dark from "./assets/backgrounds/wallpaper4.gif";
import light from "./assets/backgrounds/wallpaper4-white.gif";

function App() {
  const { mode } = useGlobalContext();
  return (
    <main
      className="w-screen h-screen overscroll-none no-scrollbar bg-cover bg-center bg-no-repeat text-white font-pixel transition duration-100 ease-in-out"
      style={
        mode === "dark"
          ? { backgroundImage: `url(${dark})` }
          : { backgroundImage: `url(${light})` }
      }
    >
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
