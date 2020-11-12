import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PhrasesList from "./phrasesList.js";
import Timer from "./Timer";
import Score from "./Score";
import "./Phrases.css";

const Phrases = () => {
  const [phrase, setPhrase] = useState(PhrasesList[Math.floor(Math.random() * PhrasesList.length)]);
  const [response, setResponse] = useState("");
  const [theme, setTheme] = useState("");
  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentChar, setCurrentChar] = useState(phrase.charAt(0));
  const [incomingChars, setIncomingChars] = useState(phrase.substr(1));

  const [wrongResponses, setWrongResponses] = useState(0);
  const [goodResponses, setGoodResponses] = useState(0);

  const getKeyPress = (event) => {
    comparePhrases(event.key);
    event.preventDefault();
  };

  const comparePhrases = (keyPress) => {
    if (keyPress === currentChar) {
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
        setTimeout(function() {
          setTheme("");
          setPhrase(PhrasesList[Math.floor(Math.random() * PhrasesList.length)]);
          setOutgoingChars("");
          setCurrentChar(phrase.charAt(0));
          setIncomingChars(phrase.substr(1));
        }, 1000);
      }
    } else {
      setTheme("wrong");
      setWrongResponses(wrongResponses + 1);
    }
  };

  return (
    <div className="container phrases">
      <Link to="/" className="phrases_back">
        Quitter le jeu
      </Link>
      <h1>Tapez la phrase</h1>
      <p className={`phrases_phrase ${theme}`}>
        <span className="outgoingChars">{outgoingChars}</span>
        <span className={`currentChar ${theme}`}>{currentChar}</span>
        {incomingChars}
      </p>
      <form>
        <div>
          <input name="response" type="text" value={response} className="phrases_input" autoFocus maxLength="1" size="1" onKeyPress={getKeyPress} onChange={comparePhrases} />
        </div>
      </form>
      <Timer />
      <p>Good Responses: {goodResponses}</p>
      <p>Wrong Responses: {wrongResponses}</p>
      <Score goodResponses={goodResponses} wrongResponses={wrongResponses} />
    </div>
  );
};

export default Phrases;
