import React from "react";
import "../InstructionsModal/InstructionsModal.css";

const InstructionsModal = ({ isOpen, onClose }) => {
  const modalContent = (
    <div id="help">
      <p className="paragraphContainer">
        Descubra a palavra certa em 6 tentativas. Depois de cada tentativa as peças mostram o quão perto você está da solução.
      </p>
      <div className="example">
        <span role="text" aria-label="letra T correta" className="letter right">T</span>
        <span role="text" aria-label="letra E" className="letter">E</span>
        <span role="text" aria-label="letra R" className="letter">R</span>
        <span role="text" aria-label="letra M" className="letter">M</span>
        <span role="text" aria-label="letra A" className="letter">O</span>
      </div>
      <div className="paragraphContainer">
        <p className="help_multi">
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
        <p className="help_multi">
          A letra <span className="letter exists">O</span>faz parte da palavra, mas em outra posição.
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
        <p className="help_multi">
          A letra <span className="letter wrong">M</span>não faz parte da palavra.
        </p>
      </div>
      
      <div className="paragraphContainer">
        <p className="help_multi">
        Os acentos são preenchidos automaticamente, e não são 
        considerados nas dicas.
        </p>
      </div>
      <div className="paragraphContainer">
        <p className="help_multi">
          As palavras podem possuir letras repetidas.
        </p>
      </div>

      <div className="paragraphContainer">
        <p className="help_multi">
          Recarregue a página e jogue quantas vezes quiser :)
        </p>
      </div>
      {/*
      <p>
        A letra <span className="letter wrong">G</span> não faz parte da palavra.
      </p>
      <p>
        Os acentos são preenchidos automaticamente, e não são considerados nas dicas.
      </p>
      <p>
        As palavras podem possuir letras repetidas.
      </p>
  <div className="help_termo">
        <br />
        <p>
          Uma palavra nova aparece a cada dia.
        </p>
      </div>*/}
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
        </div>
        <div className="instructions">
          {modalContent}
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal;
