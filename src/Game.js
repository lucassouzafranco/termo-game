import './Game.css';
import Header from './Component/Header/Header';
import GameBoard from './Component/GameBoard/GameBoard';
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

function Game() {
  const [randomWord, setRandomWord] = useState({});

    // use useEffect to fetch a random word from API every 220ms
  useEffect(() => {
    // set intervalID to clear the interval when the component is unmounted
    const intervalID = setInterval(async () => {
      try {
        // fetch a random word from the API
        const response = await axios.get('https://api.dicionario-aberto.net/random');
        // extract the word data from the response
        const wordData = response.data;
        
        // if the word has a length of 5, log it to the console and clear the interval
        if (wordData.word.length === 5) {
          clearInterval(intervalID);
          console.log(wordData);

          // If you don't update the state, the randomWord variable 
          // will still hold the previous word data, and you won't be able to 
          // compare the length of the new word in the next iteration.
        } else {
          setRandomWord(wordData);
        }
      } catch (error) {
        console.log(error);
      }
    }, 400);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <Fragment>
      <div className="Game">
        <Header />
        <GameBoard />
      </div>
    </Fragment>
  );
}

export default Game;
