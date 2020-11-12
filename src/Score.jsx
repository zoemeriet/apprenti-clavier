import React from "react";
import PropTypes from "prop-types";

import "./css/Score.css";

const Score = (props) => {
  const score = (props.goodResponses / (props.goodResponses + props.wrongResponses)) * 100;
  return (
    <p className="score">
      <span>Score :</span> {score ? score.toFixed(2) + "%" : "0 %"}
    </p>
  );
};

Score.propTypes = {
  goodResponses: PropTypes.number.isRequired,
  wrongResponses: PropTypes.number.isRequired,
};

export default Score;
