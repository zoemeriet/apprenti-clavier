import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Characters from "./charactersList.js";
import Timer from "./Timer";
import Score from "./Score";

import "./css/Letters.css";

const Letters = () => {
  const charactersKeys = Object.keys(Characters);
  const maxChars = 3;

  var randomKey = charactersKeys[Math.floor(Math.random() * charactersKeys.length)];
  const [letter, setLetter] = useState({ key: randomKey, value: Characters[randomKey] });
  const [response, setResponse] = useState({ key: "", value: "" });
  const [theme, setTheme] = useState("");
  const [wrongResponses, setWrongResponses] = useState(0);
  const [goodResponses, setGoodResponses] = useState(0);

  const [displayScore, setDisplayScore] = useState(false);

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
      }, 1000);
    } else {
      setTheme("wrong");
      setWrongResponses(wrongResponses + 1);
    }
    stopGame(goodResponses);
  };

  const stopGame = (goodResponses) => {
    if (goodResponses === maxChars) {
      setDisplayScore(true);
    }
  };

  return (
    <div className={`container letters ${displayScore ? "displayScore" : ""}`}>
      <div className="letters_header">
        <Link to="/" className="letters_back">
          Quitter le jeu
        </Link>
        <div className="letters_infos">
          <Score goodResponses={goodResponses} wrongResponses={wrongResponses} />
          <Timer />
        </div>
      </div>

      <div className="letters_main">
        <h1>Tapez le caractère</h1>
        <div className="letters_game">
          <p className="letters_letter">{letter.value}</p>
          <form>
            <div>
              <input name="response" type="text" value={response.value} autoFocus maxLength="1" size="1" className={`letters_input ${theme}`} onKeyPress={getKeyPress} onChange={compareLetters} />
            </div>
          </form>
        </div>
      </div>

      <div className={`popupScore ${displayScore ? "display" : ""}`}>
        <Score goodResponses={goodResponses} wrongResponses={wrongResponses} />
      </div>
    </div>
  );
};

export default Letters;
