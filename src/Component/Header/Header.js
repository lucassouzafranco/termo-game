import React, { useState } from "react";
import Modal from "react-modal";
import { Main, Menu, StyledButton, HelpButton, IconStyle} from "./styleHeader";
import {BsGithub} from 'react-icons/bs';
import {ModalContent } from "../InstructionsModal/styleInstructionsModal";

Modal.setAppElement("#root");

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Main>
      <Menu>
        <StyledButton>
          <HelpButton onClick={toggleModal}>?</HelpButton>          
        </StyledButton>
        TERMO
        <StyledButton>
          <IconStyle><a href="https://github.com/lucassouzafranco"><BsGithub/></a></IconStyle>
        </StyledButton>
        <Modal
          isOpen={showModal}
          onRequestClose={toggleModal}
          contentLabel="Instructions Modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9999
            },
            content: {
              margin: "2em auto",
              backgroundColor: "#312B2D",
              alignItems: "center",
              justifyContent: "center",
              outline: "none",
              border: "none",
              width: "50vw",
              borderRadius: "8px"
            },
          }}
        >
        <ModalContent />
        </Modal>
      </Menu>
    </Main>
  );
};

export default Header;
