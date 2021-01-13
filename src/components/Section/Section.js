import React from "react";
import PropTypes from "prop-types";
import Sect from "./SectionStyled";

const Section = ({ title, children }) => {
  return (
    <Sect>
      <h2 className="title">{title}</h2>
      {children}
    </Sect>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
