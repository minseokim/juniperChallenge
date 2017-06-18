import React, { Component } from "react";


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

export default SingleInput;
