// React
import React from "react";
import { useState } from "react";
import PhrasesList from "./data/phrasesList.js";

// Components
import Header from "./Header";
import Popup from "./Popup";

// Css
import "./css/Game.css";

const Phrases = () => {
  const phrasesKeys = Object.keys(PhrasesList);
  const maxPhrases = 0;

  const [randomKey, setRandomKey] = useState(phrasesKeys[Math.floor(Math.random() * phrasesKeys.length)]);
  const [phrase, setPhrase] = useState(PhrasesList[randomKey]);

  const [numberOfPhrases, setNumberOfPhrases] = useState(0);
  const [response, setResponse] = useState("");
  const [theme, setTheme] = useState("");

  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentChar, setCurrentChar] = useState(phrase.charAt(0));
  const [incomingChars, setIncomingChars] = useState(phrase.substr(1));

  const [wrongResponses, setWrongResponses] = useState(0);
  const [goodResponses, setGoodResponses] = useState(0);

  const [endGame, setEndGame] = useState(false);

  const getKeyPress = (event) => {
    comparePhrases(event.key);
    event.preventDefault();
  };

  const comparePhrases = (keyPress) => {
    if (keyPress === currentChar) {
      setResponse(keyPress);
      setRandomKey(phrasesKeys[Math.floor(Math.random() * phrasesKeys.length)]);
      setTheme("");
      setGoodResponses(goodResponses + 1);
      let updatedOutgoingChars = outgoingChars;
      let updatedIncomingChars = incomingChars;

      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);

      setCurrentChar(incomingChars.charAt(0));

      updatedIncomingChars = incomingChars.substring(1);
      setIncomingChars(updatedIncomingChars);

      if (incomingChars.length === 0) {
        setTheme("good");
        setNumberOfPhrases(numberOfPhrases + 1);

        setTimeout(function() {
          stopGame();
          setTheme("");
          setResponse("");
          setPhrase(PhrasesList[randomKey]);
          setOutgoingChars("");
          setCurrentChar(phrase.charAt(0));
          setIncomingChars(phrase.substr(1));
        }, 500);
      }
    } else {
      setTheme("wrong");
      setWrongResponses(wrongResponses + 1);
    }
  };

  const stopGame = () => {
    if (numberOfPhrases === maxPhrases) {
      setEndGame(true);
    }
  };

  return (
    <main>
      <Header goodResponses={goodResponses} wrongResponses={wrongResponses} endGame={endGame} />
      <div className={`game container ${endGame ? "hide" : ""}`}>
        <h1>Tapez la phrase</h1>
        <p className={`game_model --phrases ${theme}`}>
          <span className="outgoingChars">{outgoingChars}</span>
          <span className={`currentChar ${theme}`}>{currentChar}</span>
          {incomingChars}
        </p>
        <form>
          <div>
            <input name="response" type="text" value={response} className="game_input" autoFocus maxLength="1" size="1" onKeyPress={getKeyPress} onChange={comparePhrases} />
          </div>
        </form>
      </div>
      <Popup goodResponses={goodResponses} wrongResponses={wrongResponses} endGame={endGame} />
    </main>
  );
};

export default Phrases;
