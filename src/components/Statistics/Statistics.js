import React from "react";
import PropTypes from "prop-types";
import StatsList from "./StatisticsStyled";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatsList>
      <li className="statsList__item">
        Good: <span className="light">{good}</span>
      </li>
      <li className="statsList__item">
        Neutral: <span className="light">{neutral}</span>
      </li>
      <li className="statsList__item">
        Bad: <span className="light">{bad}</span>
      </li>
      <li className="statsList__item">
        Total: <span className="light">{total}</span>
      </li>
      <li className="statsList__item">
        Positive feedback: <span className="light">{positivePercentage}%</span>
      </li>
    </StatsList>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
