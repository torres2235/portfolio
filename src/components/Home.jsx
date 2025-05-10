import { useGlobalContext } from "../context/context";

// icons
import world from "../assets/aconfuseddragon1/world.png";
import profile from "../assets/aconfuseddragon1/text_file_2.png";
import folder from "../assets/aconfuseddragon1/folder_open.png";
import link from "../assets/aconfuseddragon1/this_computer.png";
import email from "../assets/aconfuseddragon1/mail.png";
import search from "../assets/aconfuseddragon1/search.png";

const Home = () => {
  const {
    openWelcome,
    openAbout,
    openProjects,
    openContact,
    openLinks,
    openCredits,
  } = useGlobalContext();

  return (
    <>
      <div className="grid grid-cols-1 gap-6 m-4">
        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={openWelcome}
        >
          <img src={world} alt="world" />
          <p className="text-sm">Welcome</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={openAbout}
        >
          <img src={profile} alt="profile" />
          <p className="text-sm">About Me</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={openProjects}
        >
          <img src={folder} alt="projects" />
          <p className="text-sm">Projects</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={openLinks}
        >
          <img src={link} alt="link" />
          <p className="text-sm">Links</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={openContact}
        >
          <img src={email} alt="email" />
          <p className="text-sm">Contact</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400/50 h-20 w-20 p-2 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-400/100 hover:border-2 hover:border-fuchsia-900"
          onClick={openCredits}
        >
          <img src={search} alt="credits" />
          <p className="text-sm">Credits</p>
        </div>
      </div>
    </>
  );
};

export default Home;
