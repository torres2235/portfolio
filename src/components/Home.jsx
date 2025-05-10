import React, { useState } from "react";
import { useGlobalContext } from "../context/context";

// icons
import world from "../assets/aconfuseddragon1/world.png";
import profile from "../assets/aconfuseddragon1/text_file_2.png";
import folder from "../assets/aconfuseddragon1/folder_open.png";
import link from "../assets/aconfuseddragon1/this_computer.png";
import email from "../assets/aconfuseddragon1/mail.png";
import search from "../assets/aconfuseddragon1/search.png";
// windows
import WelcomeWindow from "./windowComponents/WelcomeWindow";
import AboutMeWindow from "./windowComponents/AboutMeWindow";
import ProjectsWindow from "./windowComponents/ProjectsWindow";
import LinksWindow from "./windowComponents/LinksWindow";
import ContactWindow from "./windowComponents/ContactWindow";
import CreditsWindow from "./windowComponents/CreditsWindow";

const Home = () => {
  const {
    openWelcome,
    openAbout,
    openProjects,
    openContact,
    openLinks,
    openCredits,
    isWelcomeOpen,
    isAboutOpen,
    isProjectsOpen,
    isLinksOpen,
    isContactOpen,
    isCreditsOpen,
  } = useGlobalContext();

  const [componentList, setComponentList] = useState([
    { id: 0, zIndex: 0 },
    { id: 1, zIndex: 0 },
    { id: 2, zIndex: 0 },
    { id: 3, zIndex: 0 },
    { id: 4, zIndex: 0 },
    { id: 5, zIndex: 0 },
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
    <>
      <div className="grid grid-cols-1 gap-6 m-4">
        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={() => {
            openWelcome();
            parentClickHandler(componentList[0].id);
          }}
        >
          <img src={world} alt="world" />
          <p className="text-sm">Welcome</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={() => {
            openAbout();
            parentClickHandler(componentList[1].id);
          }}
        >
          <img src={profile} alt="profile" />
          <p className="text-sm">About Me</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={() => {
            openProjects();
            parentClickHandler(componentList[2].id);
          }}
        >
          <img src={folder} alt="projects" />
          <p className="text-sm">Projects</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={() => {
            openLinks();
            parentClickHandler(componentList[3].id);
          }}
        >
          <img src={link} alt="link" />
          <p className="text-sm">Links</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={() => {
            openContact();
            parentClickHandler(componentList[4].id);
          }}
        >
          <img src={email} alt="email" />
          <p className="text-sm">Contact</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={() => {
            openCredits();
            parentClickHandler(componentList[5].id);
          }}
        >
          <img src={search} alt="credits" />
          <p className="text-sm">Credits</p>
        </div>
      </div>

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
        <LinksWindow
          key={componentList[3].id}
          zIndex={componentList[3].zIndex}
          parentClickHandler={() => parentClickHandler(componentList[3].id)}
        />
      )}
      {isContactOpen && (
        <ContactWindow
          key={componentList[4].id}
          zIndex={componentList[4].zIndex}
          parentClickHandler={() => parentClickHandler(componentList[4].id)}
        />
      )}
      {isCreditsOpen && (
        <CreditsWindow
          key={componentList[5].id}
          zIndex={componentList[5].zIndex}
          parentClickHandler={() => parentClickHandler(componentList[5].id)}
        />
      )}
    </>
  );
};

export default Home;
