import React, { useState, useRef, useEffect } from "react";
import { Main, Menu, StyledButton, HelpButton } from "./styleHeader";
import InstructionsModal from "../InstructionsModal/Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Main>
      <Menu>
        <StyledButton>
          <HelpButton onClick={toggleModal}>?</HelpButton>
          {showModal && (
            <InstructionsModal toggleModal={toggleModal} ref={modalRef} />
          )}
        </StyledButton>
        TERMO
      </Menu>
    </Main>
  );
};

export default Header;
