import React, { Fragment } from "react";
import { GameBoardWrapper} from "./styleGameBoard";
import InputFields from "../WordBox";

const GameBoard = () => {
  return(
    <Fragment>
      <GameBoardWrapper >
        <InputFields />
      </GameBoardWrapper>
    </Fragment>
)}

export default GameBoard;