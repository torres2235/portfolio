import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /*
  =============== 
  Welcome Window
  ===============
  */
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

  const openWelcome = () => {
    setIsWelcomeOpen(true);
    setIsWelcomeVisible(true);
  };
  const closeWelcome = () => {
    setIsWelcomeOpen(false);
  };

  const toggleWelcomeVisible = () => {
    setIsWelcomeVisible((current) => !current);
    console.log(isWelcomeVisible);
  };

  /*
  =============== 
  About Window
  ===============
  */
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(true);

  const openAbout = () => {
    setIsAboutOpen(true);
    setIsAboutVisible(true);
  };
  const closeAbout = () => {
    setIsAboutOpen(false);
  };

  const toggleAboutVisible = () => {
    setIsAboutVisible((current) => !current);
    console.log(isWelcomeVisible);
  };

  /*
  =============== 
  Projects Window
  ===============
  */
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(true);

  const openProjects = () => {
    setIsProjectsOpen(true);
    setIsProjectsVisible(true);
  };
  const closeProjects = () => {
    setIsProjectsOpen(false);
  };

  const toggleProjectsVisible = () => {
    setIsProjectsVisible((current) => !current);
  };

  /*
  =============== 
  Links Window
  ===============
  */
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isLinksVisible, setIsLinksVisible] = useState(true);

  const openLinks = () => {
    setIsLinksOpen(true);
    setIsLinksVisible(true);
  };
  const closeLinks = () => {
    setIsLinksOpen(false);
  };

  const toggleLinksVisible = () => {
    setIsLinksVisible((current) => !current);
  };

  /*
  =============== 
  Contact Window
  ===============
  */
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(true);

  const openContact = () => {
    setIsContactOpen(true);
    setIsContactVisible(true);
  };
  const closeContact = () => {
    setIsContactOpen(false);
  };

  const toggleContactVisible = () => {
    setIsContactVisible((current) => !current);
  };

  /*
  =============== 
  Blog Window
  ===============
  */
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isBlogVisible, setIsBlogVisible] = useState(true);

  const openBlog = () => {
    setIsBlogOpen(true);
    setIsBlogVisible(true);
  };
  const closeBlog = () => {
    setIsBlogOpen(false);
  };

  const toggleBlogVisible = () => {
    setIsBlogVisible((current) => !current);
  };

  /*
  =============== 
  Credits Window
  ===============
  */
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [isCreditsVisible, setIsCreditsVisible] = useState(true);

  const openCredits = () => {
    setIsCreditsOpen(true);
    setIsCreditsVisible(true);
  };
  const closeCredits = () => {
    setIsCreditsOpen(false);
  };

  const toggleCreditsVisible = () => {
    setIsCreditsVisible((current) => !current);
  };

  /*
  =============== 
  Light/Dark Mode
  ===============
  */

  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <AppContext.Provider
      value={{
        isWelcomeOpen,
        isWelcomeVisible,
        openWelcome,
        closeWelcome,
        toggleWelcomeVisible,

        isAboutOpen,
        isAboutVisible,
        openAbout,
        closeAbout,
        toggleAboutVisible,

        isProjectsOpen,
        isProjectsVisible,
        openProjects,
        closeProjects,
        toggleProjectsVisible,

        isLinksOpen,
        isLinksVisible,
        openLinks,
        closeLinks,
        toggleLinksVisible,

        isContactOpen,
        isContactVisible,
        openContact,
        closeContact,
        toggleContactVisible,

        isBlogOpen,
        isBlogVisible,
        openBlog,
        closeBlog,
        toggleBlogVisible,

        isCreditsOpen,
        isCreditsVisible,
        openCredits,
        closeCredits,
        toggleCreditsVisible,

        mode,
        toggleMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
