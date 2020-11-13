// React
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Timer from "./Timer";
import Score from "./Score";

// Css
import "./css/Popup.css";

const Popup = ({ endGame, goodResponses, wrongResponses }) => {
  return (
    <div className={`popupScore ${endGame ? "display" : ""}`}>
      <h2>Bravo ! Le jeu est terminé</h2>
      <p>
        <Score goodResponses={goodResponses} wrongResponses={wrongResponses} /> de réussite.
      </p>
      <p>
        Temps passé : <Timer endGame={endGame} />
      </p>
      <Link to="/" className="goBack">
        Quitter le jeu
      </Link>
    </div>
  );
};

Popup.propTypes = {
  goodResponses: PropTypes.number.isRequired,
  wrongResponses: PropTypes.number.isRequired,
  endGame: PropTypes.bool.isRequired,
};

export default Popup;
