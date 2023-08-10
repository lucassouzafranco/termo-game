import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(84, 81, 84, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background-color: #312B2D;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 58%;
  max-height: 86%;
  color: #BBBBBB;
  font-weight: 300;
  font-size: x-large;
  overflow: auto;
`;

export const ModalContent = styled.div`
  line-height: 1em;
  pointer-events: auto;
`;

export const ParagraphContainer = styled.div`
  height: 13vh;
  width: 100%;
  display: inline-flex;
  align-items: center;
`;

export const Example = styled.div`
  display: inline-flex;
  height: 7.6vh;
  color: white;
  margin-top: 1em;
`;

export const Letter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #4c4347;
  font-weight: 500;
  font-size: large;
  cursor: default;
  width: 3.6vw;
  background-color: ${props => props.isRight ? '#3aa394' : 'transparent'}; // Add this line
  border-color: ${props => props.isRight ? '#3aa394' : '#4c4347'};
  color: ${props => (props.isRight || props.isExists) ? 'white' : '#5E5C5C'};
  border-radius: ${props => props.isRight ? '5px' : 'none'};
  margin-right: 5px;
  font-size: ${props => props.isWrong ? '1.1em' : 'large'};
  padding: ${props => props.isWrong ? '0.5em' : '0'};
`;
