// React
import React from "react";
import PropTypes from "prop-types";

// Css
import "./css/Score.css";

const Score = ({ goodResponses, wrongResponses }) => {
  const score = (goodResponses / (goodResponses + wrongResponses)) * 100;
  return <span className="score">{score ? score.toFixed(2) + "%" : "0 %"}</span>;
};

Score.propTypes = {
  goodResponses: PropTypes.number.isRequired,
  wrongResponses: PropTypes.number.isRequired,
};

export default Score;
