import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /*
  =============== 
  Welcome Window
  ===============
  */
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  const openWelcome = () => {
    setIsWelcomeOpen(true);
  };
  const closeWelcome = () => {
    setIsWelcomeOpen(false);
  };

  /*
  =============== 
  About Window
  ===============
  */
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const openAbout = () => {
    setIsAboutOpen(true);
  };
  const closeAbout = () => {
    setIsAboutOpen(false);
  };

  /*
  =============== 
  Projects Window
  ===============
  */
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const openProjects = () => {
    setIsProjectsOpen(true);
  };
  const closeProjects = () => {
    setIsProjectsOpen(false);
  };

  /*
  =============== 
  Links Window
  ===============
  */
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const openLinks = () => {
    setIsLinksOpen(true);
  };
  const closeLinks = () => {
    setIsLinksOpen(false);
  };

  /*
  =============== 
  Contact Window
  ===============
  */
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => {
    setIsContactOpen(true);
  };
  const closeContact = () => {
    setIsContactOpen(false);
  };

  /*
  =============== 
  Blog Window
  ===============
  */
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const openBlog = () => {
    setIsBlogOpen(true);
  };
  const closeBlog = () => {
    setIsBlogOpen(false);
  };

  /*
  =============== 
  Credits Window
  ===============
  */
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);

  const openCredits = () => {
    setIsCreditsOpen(true);
  };
  const closeCredits = () => {
    setIsCreditsOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isWelcomeOpen,
        openWelcome,
        closeWelcome,
        isAboutOpen,
        openAbout,
        closeAbout,
        isProjectsOpen,
        openProjects,
        closeProjects,
        isLinksOpen,
        openLinks,
        closeLinks,
        isContactOpen,
        openContact,
        closeContact,
        isBlogOpen,
        openBlog,
        closeBlog,
        isCreditsOpen,
        openCredits,
        closeCredits,
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
