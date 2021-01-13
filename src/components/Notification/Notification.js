import React from "react";
import PropTypes from "prop-types";
import P from "./NotificationStyled";

const Notification = ({ message }) => {
  return <P>{message}</P>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
