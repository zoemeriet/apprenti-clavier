// React
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Css
import "./css/Timer.css";

const Timer = ({ endGame }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (endGame) {
      setIsActive(false);
    }
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        } else {
          setSeconds(seconds + 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <span className="timer">
      {minutes === 0 ? "" : minutes + " min "}
      {seconds < 10 ? 0 : ""}
      {seconds} s
    </span>
  );
};

Timer.propTypes = {
  endGame: PropTypes.bool.isRequired,
};

export default Timer;
