import React from "react";
import { Fragment } from "react";
import { ModalContent } from "./styleInstructionsModal";"./styleInstructionsModal";

const InstructionsModal = () => {
  return(
    <Fragment>
      <ModalContent>
        <p>
          Descubra a palavra certa em 6 tentativas. Depois de cada tentativa,
          as peças mostram o quão perto você está da solução.
        </p>
        <p>Os acentos são preenchidos automaticamente, e não são considerados nas dicas.</p> 

        <p>As palavras podem possuir letras repetidas.</p>

        <p>Uma palavra nova aparece ao recarregar a página.</p>
      </ModalContent>
    </Fragment>
  )
}

export default InstructionsModal;
