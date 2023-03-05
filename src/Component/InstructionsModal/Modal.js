import React from "react";
import { Modal, ModalContent } from "./styleModal";

function InstructionsModal(props) {
  return(
    <Modal>
      <ModalContent>
      Descubra a palavra certa em 6 tentativas. Depois de cada 
      tentativa, as peças mostram o quão perto você está da 
      solução. 
      </ModalContent>
    </Modal>
  );
}

export default InstructionsModal;