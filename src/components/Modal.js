import { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import Draggable from "react-draggable";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} bounds="parent">
      <div
        ref={nodeRef}
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container moveable">
          <h3>modal content</h3>
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes></FaTimes>
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default Modal;
