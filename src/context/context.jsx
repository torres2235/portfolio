import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /*
  =============== 
  About Window
  ===============
  */
  const [isAboutOpen, setIsAboutOpen] = useState(true);

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
