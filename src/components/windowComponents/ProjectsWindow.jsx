import { useRef } from "react";
import { useGlobalContext } from "../../context/context";
import Draggable from "react-draggable";
import { FaFolderOpen } from "react-icons/fa";

import Window from "../Window";

const ProjectsWindow = () => {
  const { isProjectsOpen, closeProjects } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".cursor-move">
      <div
        ref={nodeRef}
        className={`${
          isProjectsOpen
            ? "show-window visible top-70 left-110 w-2/3 h-3/5"
            : "show-window collapse top-0 left-0"
        }`}
      >
        <Window
          closeContext={closeProjects}
          icon={<FaFolderOpen className="ml-1" />}
          windowName={"Projects"}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            placeat unde dolorem vero, tenetur animi, reiciendis provident sequi
            necessitatibus laborum quas sapiente ab odio nulla a delectus.
            Eligendi, iusto. Et, quidem inventore fuga similique nisi corrupti
            accusamus delectus eligendi sed repellat alias cum excepturi veniam
            harum sequi corporis atque, nemo, deserunt quibusdam doloremque.
            Consequatur nemo fuga error, ex eos quae ad et, reiciendis,
            reprehenderit nam harum deserunt consectetur! Sint dolor accusantium
            repellendus veritatis aperiam fuga magni corporis tenetur et magnam,
            alias exercitationem explicabo culpa, eius nulla aliquid nesciunt
            atque quidem dignissimos blanditiis repellat quasi est saepe? Earum
            debitis magnam reiciendis velit quia suscipit distinctio aut,
            quibusdam ut maiores nesciunt fugiat aspernatur saepe architecto
            facere molestiae voluptatibus sed unde ex! Iure, sequi? Suscipit
            velit tempore doloremque, aspernatur vel necessitatibus. Sunt rerum
            id deserunt tenetur. Nemo pariatur quos aliquid maiores iste
            praesentium. Aliquam blanditiis odio ex praesentium ut sapiente,
            perferendis neque quae et voluptas excepturi ipsum modi, ea, iusto
            libero? Ratione placeat aut sequi praesentium ipsam repudiandae
            iure, eveniet recusandae consequuntur aspernatur pariatur magni
            dicta veniam modi maxime aliquid alias quidem dolor nihil nesciunt
            molestias nemo eius architecto id? Nulla rerum repellendus adipisci
            cumque autem dolore libero mollitia, suscipit inventore vel in!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            placeat unde dolorem vero, tenetur animi, reiciendis provident sequi
            necessitatibus laborum quas sapiente ab odio nulla a delectus.
            Eligendi, iusto. Et, quidem inventore fuga similique nisi corrupti
            accusamus delectus eligendi sed repellat alias cum excepturi veniam
            harum sequi corporis atque, nemo, deserunt quibusdam doloremque.
            Consequatur nemo fuga error, ex eos quae ad et, reiciendis,
            reprehenderit nam harum deserunt consectetur! Sint dolor accusantium
            repellendus veritatis aperiam fuga magni corporis tenetur et magnam,
            alias exercitationem explicabo culpa, eius nulla aliquid nesciunt
            atque quidem dignissimos blanditiis repellat quasi est saepe? Earum
            debitis magnam reiciendis velit quia suscipit distinctio aut,
            quibusdam ut maiores nesciunt fugiat aspernatur saepe architecto
            facere molestiae voluptatibus sed unde ex! Iure, sequi? Suscipit
            velit tempore doloremque, aspernatur vel necessitatibus. Sunt rerum
            id deserunt tenetur. Nemo pariatur quos aliquid maiores iste
            praesentium. Aliquam blanditiis odio ex praesentium ut sapiente,
            perferendis neque quae et voluptas excepturi ipsum modi, ea, iusto
            libero? Ratione placeat aut sequi praesentium ipsam repudiandae
            iure, eveniet recusandae consequuntur aspernatur pariatur magni
            dicta veniam modi maxime aliquid alias quidem dolor nihil nesciunt
            molestias nemo eius architecto id? Nulla rerum repellendus adipisci
            cumque autem dolore libero mollitia, suscipit inventore vel in!
          </p>
        </Window>
      </div>
    </Draggable>
  );
};

export default ProjectsWindow;
