/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [showModal, setShowModal] = useState("");
  const openModal = setShowModal;
  const closeModal = () => setShowModal("");

  return (
    <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenButton({ children, value }) {
  const { openModal } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: (e) => {
      openModal(value);
      e.stopPropagation();
    },
  });
}

function Content({ children, value }) {
  const { showModal, closeModal } = useContext(ModalContext);
  const { ref } = useOutsideClick(closeModal);
  if (value !== showModal) return null;

  return createPortal(
    <div className="fixed inset-0 w-full h-screen bg-modal backdrop-blur-sm z-1000">
      <div
        className="fixed top-24 w-64 h-44 md:w-96 md:h-64 flex justify-center items-center bg-slate-700 left-[50%] translate-x-[-50%] rounded-2xl"
        ref={ref}
      >
        {cloneElement(children, { onCloseModal: () => closeModal() })}
      </div>
    </div>,
    document.body
  );
}

Modal.OpenButton = OpenButton;
Modal.Content = Content;

export default Modal;
