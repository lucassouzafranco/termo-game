import React, { useState, useRef, useEffect } from "react";
import { Main, Menu, StyledButton, HelpButton, IconStyle} from "./styleHeader";
import InstructionsModal from "../InstructionsModal/Modal";
import {BsGithub} from 'react-icons/bs';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  // Ref to the modal content to detect clicks outside the modal
  const modalRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the modal
    const handleClickOutside = (event) => {
      // If the modal exists and the click is outside the modal content,
      // close the modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

     // Add the click event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

     // Clean up function to remove the event listener when the component unmounts
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
        <StyledButton>
          <IconStyle><a href="https://github.com/lucassouzafranco"><BsGithub/></a></IconStyle>
        </StyledButton>
      </Menu>
    </Main>
  );
};

export default Header;
