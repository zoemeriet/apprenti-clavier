// React
import React from "react";
import { useState } from "react";

// Data
import Characters from "./data/charactersList.js";

// Components
import Header from "./Header";
import Popup from "./Popup";

// Css
import "./css/Game.css";

const Letters = () => {
  const charactersKeys = Object.keys(Characters);
  const maxChars = 10;

  var randomKey = charactersKeys[Math.floor(Math.random() * charactersKeys.length)];

  const [letter, setLetter] = useState({ key: randomKey, value: Characters[randomKey] });
  const [response, setResponse] = useState({ key: "", value: "" });
  const [theme, setTheme] = useState("");
  const [wrongResponses, setWrongResponses] = useState(0);
  const [goodResponses, setGoodResponses] = useState(0);

  const [endGame, setEndGame] = useState(false);

  const getKeyPress = (event) => {
    compareLetters({ key: event.charCode, value: event.key });
    event.preventDefault();
  };

  const compareLetters = (keyPress) => {
    if (keyPress.key == letter.key) {
      setResponse(keyPress);
      setTheme("good");
      setGoodResponses(goodResponses + 1);
      setTimeout(function() {
        setTheme("");
        setResponse({ key: "", value: "" });
        randomKey = charactersKeys[Math.floor(Math.random() * charactersKeys.length)];
        setLetter({ key: randomKey, value: Characters[randomKey] });
      }, 500);
    } else {
      setTheme("wrong");
      setWrongResponses(wrongResponses + 1);
    }
    stopGame(goodResponses);
  };

  const stopGame = (goodResponses) => {
    if (goodResponses === maxChars - 1) {
      setTimeout(function() {
        setEndGame(true);
      }, 500);
    }
  };

  return (
    <main>
      <Header goodResponses={goodResponses} wrongResponses={wrongResponses} endGame={endGame} />

      <div className={`game ${endGame ? "hide" : ""}`}>
        <h1>Tapez le caractère</h1>
        <p className="game_model">{letter.value}</p>
        <form>
          <div>
            <input name="response" type="text" value={response.value} autoFocus maxLength="1" size="1" className={`game_input ${theme}`} onKeyPress={getKeyPress} onChange={compareLetters} />
          </div>
        </form>
      </div>

      <Popup goodResponses={goodResponses} wrongResponses={wrongResponses} endGame={endGame} />
    </main>
  );
};

export default Letters;
