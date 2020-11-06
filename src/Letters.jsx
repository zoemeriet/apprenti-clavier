import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./Letters.css";

const Letters = () => {
  const characters = {
    97: "a",
    98: "b",
    99: "c",
    100: "d",
    101: "e",
    102: "f",
  };

  const charactersKeys = Object.keys(characters);

  var randomKey = charactersKeys[Math.floor(Math.random() * charactersKeys.length)];
  const [letter, setLetter] = useState({ key: randomKey, value: characters[randomKey] });
  const [response, setResponse] = useState({ key: "", value: "" });
  const [theme, setTheme] = useState("");
  const [wrongResponses, setWrongResponses] = useState(0);
  const [goodResponses, setGoodResponses] = useState(0);

  const getKeyPress = (event) => {
    if (event.charCode == letter.key) {
      setResponse({ key: event.charCode, value: event.key });
      setTheme("good");
      setGoodResponses(goodResponses + 1);
      setTimeout(function() {
        setTheme("");
        setResponse({ key: "", value: "" });
        randomKey = charactersKeys[Math.floor(Math.random() * charactersKeys.length)];
        setLetter({ key: randomKey, value: characters[randomKey] });
      }, 1000);
    } else {
      setTheme("wrong");
      setWrongResponses(wrongResponses + 1);
    }
    event.preventDefault();
  };

  const compareLetters = () => {};

  return (
    <div className="container letters">
      <Link to="/" className="letters_back">
        Quitter le jeu
      </Link>
      <h1>Tapez le caractère</h1>
      <p className="letters_letter">{letter.value}</p>
      <form>
        <div>
          <input name="response" type="text" value={response.value} autoFocus maxLength="1" size="1" className={`letters_input ${theme}`} onKeyPress={getKeyPress} onChange={compareLetters} />
        </div>
      </form>
      <p>Good Responses: {goodResponses}</p>
      <p>Wrong Responses: {wrongResponses}</p>
    </div>
  );
};

export default Letters;
