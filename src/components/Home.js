import { useGlobalContext } from "../context/context";
// icons
import noodles from "../assets/aconfuseddragon1/text_file_2.png";
import link from "../assets/aconfuseddragon1/this_computer.png";
import email from "../assets/aconfuseddragon1/mail.png";

const Home = () => {
  const { openAbout, openContact, openLinks } = useGlobalContext();

  return (
    <>
      {/* <div>
        <h1>Home Page</h1>
        <p>Welcome :)</p>
      </div> */}

      <div className="grid grid-cols-1 gap-6 m-4">
        <div
          className="flex flex-col justify-center items-center bg-gray-400 bg-opacity-50 w-20 p-2 rounded-lg cursor-pointer"
          onClick={openAbout}
        >
          <img src={noodles} alt="noodles" />
          <p className="text-sm">About Me</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400 bg-opacity-50 w-20 p-2 rounded-lg cursor-pointer"
          onClick={openLinks}
        >
          <img src={link} alt="link" />
          <p className="text-sm">Links</p>
        </div>

        <div
          className="flex flex-col justify-center items-center bg-gray-400 bg-opacity-50 w-20 p-2 rounded-lg cursor-pointer"
          onClick={openContact}
        >
          <img src={email} alt="email" />
          <p className="text-sm text-center">Contact</p>
        </div>
      </div>
    </>
  );
};

export default Home;
