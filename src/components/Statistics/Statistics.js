import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.statsList}>
      <li className={styles.statsList__item}>
        Good: <span className={styles.light}>{good}</span>
      </li>
      <li className={styles.statsList__item}>
        Neutral: <span className={styles.light}>{neutral}</span>
      </li>
      <li className={styles.statsList__item}>
        Bad: <span className={styles.light}>{bad}</span>
      </li>
      <li className={styles.statsList__item}>
        Total: <span className={styles.light}>{total}</span>
      </li>
      <li className={styles.statsList__item}>
        Positive feedback:{" "}
        <span className={styles.light}>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default Statistic;
