import React, { useState } from "react";
import { Main, 
  Menu, 
  StyledButton,
  HelpButton
} from "./styleHeader";
import InstructionsModal from "../InstructionsModal/Modal";


const Header = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [hideModal, setHideModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return(
    <Main>
      <Menu>
        <StyledButton>
          <HelpButton onClick={() => toggleModal()}>?</HelpButton>
          {showModal &&  <InstructionsModal toggleModal={toggleModal} />}
        </StyledButton>
        TERMO
      </Menu>
    </Main>
  )
}

export default Header;