import React, { Component } from "react";
import PropTypes from "prop-types";

const SingleInput = props => {
  return (
    <div className="form-group">
      <label htmlFor="{props.label}">{props.description}</label>
      <input
        className="form-control"
        type={props.type}
        placeholder={props.description}
        value={props.value}
        onChange={event => props.onInputChange(props.label, event.target.value, props.type)}
      />
    </div>
  );
};

SingleInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]).isRequired,
  description: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default SingleInput;
