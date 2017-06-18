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
        onChange={event => props.onInputChange(props.label, event.target.value)}
      />
    </div>
  );
};

SingleInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
  description: PropTypes.string,
  onInputChange: PropTypes.func
};

export default SingleInput;
