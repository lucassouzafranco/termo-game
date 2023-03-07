import './Game.css';
import Header from './Component/Header/Header';
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

function Game() {

  const [randomWord, setRandomWord] = useState({});
  const [chosenWord, setChosenWord] = useState('');
  const [stopSearch, setStopSearch] = useState(false);

  useEffect(() => {
    axios.get('https://api.dicionario-aberto.net/random')
      .then(response => {
        setRandomWord(response.data.word);
        console.log(randomWord);

        if (randomWord.length === 4) {
          setChosenWord(randomWord);
          setStopSearch(true);
        }
      })
      .catch(error => {
        console.log(error); 
      });
  }, []); //https://www.google.com/search?q=condition+in+useeffect+dependency&oq=condition+in+the+useEffect+&aqs=edge.2.69i57j0i22i30l4.8051j0j1&sourceid=chrome&ie=UTF-8

  return (
    <Fragment>
      <div className="Game">
        <Header/>
      </div>
    </Fragment>
  );
}

export default Game;
