import React from "react";
import "./InstructionsModal.css";
import {
  ModalContainer,
  ModalOverlay, 
  ModalContent,
  ParagraphContainer,
  Example,
  Letter
} from "./styleInstructionsModal";

const InstructionsModal = ({ isOpen, onClose }) => {
  const modalContainer = (
    <ModalContent>
      <ParagraphContainer>
        <p>
          Descubra a palavra certa em 6 tentativas. Depois de cada tentativa as peças mostram o quão perto você está da solução.
        </p>
      </ParagraphContainer>
      <Example>
        <Letter isRight>T</Letter>
        <span role="text" aria-label="letra E" className="letter">E</span>
        <span role="text" aria-label="letra R" className="letter">R</span>
        <span role="text" aria-label="letra M" className="letter">M</span>
        <span role="text" aria-label="letra A" className="letter">O</span>
      </Example>
      <div className="paragraphContainer">
        <p>
          A letra <span className="letter right">T</span>faz parte da palavra e está na posição correta.
        </p>
      </div>

      <div className="example">
        <span role="text" aria-label="letra V" className="letter">V</span>
        <span role="text" aria-label="letra I" className="letter">I</span>
        <span role="text" aria-label="letra O existe" className="letter exists">O</span>
        <span role="text" aria-label="letra L" className="letter">L</span>
        <span role="text" aria-label="letra A" className="letter">A</span>
      </div>

      <div className="paragraphContainer">
        <p>
          A letra <span className="letter exists">O</span>faz parte da palavra e está na posição correta.
        </p>
      </div>

      <div className="example">
        <span role="text" aria-label="letra P" className="letter">P</span>
        <span role="text" aria-label="letra O" className="letter">O</span>
        <span role="text" aria-label="letra M errada" className="letter wrong">M</span>
        <span role="text" aria-label="letra A" className="letter">A</span>
        <span role="text" aria-label="letra R" className="letter">R</span>
      </div>
      <div className="paragraphContainer">
        <p>
          A letra <span className="letter wrong">M</span>não faz parte da palavra.
        </p>
      </div>

      <div className="paragraphContainer">
        <p>
          Os acentos são preenchidos automaticamente, e não são
          considerados nas dicas.
        </p>
      </div>
      <div className="paragraphContainer">
        <p>
          As palavras podem possuir letras repetidas.
        </p>
      </div>

      <div className="paragraphContainer">
        <p>
          Recarregue a página e jogue quantas vezes quiser :)
        </p>
      </div>
    </ModalContent>
  );

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
          {modalContainer}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default InstructionsModal;
