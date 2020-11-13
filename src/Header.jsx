// React
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Timer from "./Timer";
import Score from "./Score";

// Css
import "./css/Header.css";

const Header = ({ goodResponses, wrongResponses, endGame }) => {
  return (
    <div className="header">
      <Link to="/" className="gotBack">
        Quitter le jeu
      </Link>
      <div className="header_infos">
        <p>
          Score : <Score goodResponses={goodResponses} wrongResponses={wrongResponses} />
        </p>
        <p>
          Temps : <Timer endGame={endGame} />
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {
  goodResponses: PropTypes.number.isRequired,
  wrongResponses: PropTypes.number.isRequired,
  endGame: PropTypes.bool.isRequired,
};

export default Header;
