import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./context/context";

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
  const {
    isWelcomeOpen,
    isAboutOpen,
    isProjectsOpen,
    isLinksOpen,
    isContactOpen,
    isCreditsOpen,
  } = useGlobalContext();

  const [componentList, setComponentList] = useState([
    { id: 0, zIndex: 1 },
    { id: 1, zIndex: 2 },
    { id: 2, zIndex: 3 },
    { id: 3, zIndex: 4 },
    { id: 4, zIndex: 5 },
    { id: 5, zIndex: 6 },
  ]);

  function parentClickHandler(id) {
    let tmpIndex = componentList.find((item) => item.id === id).zIndex;
    let newArray = componentList.map((item) => {
      let newItem = { ...item };
      if (item.id === id) {
        newItem.zIndex = componentList.length;
      } else if (item.zIndex > tmpIndex) {
        newItem.zIndex -= 1;
      }
      return newItem;
    });
    setComponentList(newArray);
  }

  return (
    <main
      className="w-screen h-screen overscroll-none no-scrollbar bg-cover bg-center bg-no-repeat text-white font-pixel"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

      {isWelcomeOpen && (
        <WelcomeWindow
          key={componentList[0].id}
          zIndex={componentList[0].zIndex}
          parentClickHandler={() => parentClickHandler(componentList[0].id)}
        />
      )}
      {isAboutOpen && (
        <AboutMeWindow
          key={componentList[1].id}
          zIndex={componentList[1].zIndex}
          parentClickHandler={() => parentClickHandler(componentList[1].id)}
        />
      )}
      {isProjectsOpen && (
        <ProjectsWindow
          key={componentList[2].id}
          zIndex={componentList[2].zIndex}
          parentClickHandler={() => parentClickHandler(componentList[2].id)}
        />
      )}
      {isLinksOpen && (
        <Router>
          <LinksWindow
            key={componentList[3].id}
            zIndex={componentList[3].zIndex}
            parentClickHandler={() => parentClickHandler(componentList[3].id)}
          />
        </Router>
      )}
      {isContactOpen && (
        <ContactWindow
          key={componentList[4].id}
          zIndex={componentList[4].zIndex}
          parentClickHandler={() => parentClickHandler(componentList[4].id)}
        />
      )}
      {isCreditsOpen && (
        <Router>
          <CreditsWindow
            key={componentList[5].id}
            zIndex={componentList[5].zIndex}
            parentClickHandler={() => parentClickHandler(componentList[5].id)}
          />
        </Router>
      )}
    </main>
  );
}

export default App;
