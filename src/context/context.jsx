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

  return (
    <AppContext.Provider
      value={{
        isWelcomeOpen,
        openWelcome,
        closeWelcome,
        isAboutOpen,
        openAbout,
        closeAbout,
        isContactOpen,
        openContact,
        closeContact,
        isLinksOpen,
        openLinks,
        closeLinks,
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
