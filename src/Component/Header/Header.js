import React, { useState } from "react";
import { Main, Menu, StyledButton, HelpButton, IconStyle } from "./styleHeader";
import { BsGithub } from 'react-icons/bs';
import InstructionsModal from '../InstructionsModal';

const Header = (props) => {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log('reconheci o click');
  };

  return (
    <Main>
      <Menu>
        <StyledButton>
          <HelpButton onClick={toggleModal}>?</HelpButton>          
        </StyledButton>
        TERMO CLONE
        <StyledButton>
          <IconStyle><a href="https://github.com/lucassouzafranco"><BsGithub/></a></IconStyle>
        </StyledButton>
      </Menu>
      {/* Conditionally render the InstructionsModal component */}
      {showModal && (
        <InstructionsModal isOpen={true} onClose={toggleModal}>
          {/* Place the content for the modal here */}
          <p>
            {props.children}
          </p>
        </InstructionsModal>
      )}
    </Main>
  );
};

export default Header;
