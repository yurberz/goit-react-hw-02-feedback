import React from "react";
import PropTypes from "prop-types";
import Button from "./FeedbackOptionsStyled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
