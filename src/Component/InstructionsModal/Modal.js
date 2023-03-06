import React, { forwardRef } from "react";
import { Modal, ModalContent } from "./styleModal";

const InstructionsModal = forwardRef((props, ref) => {
  return (
    <Modal ref={ref}>
      <ModalContent>
        <p>Descubra a palavra certa em 6 tentativas. Depois de cada tentativa, 
        as peças mostram o quão perto você está da solução.</p>
      </ModalContent>
    </Modal>
  );
});

export default InstructionsModal;
