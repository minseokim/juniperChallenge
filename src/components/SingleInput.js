import React, { Component } from "react";


const SingleInput = props => {
let textInputRef;
  return (
    <div className="form-group">
      <label htmlFor="{props.label}">{props.description}</label>
      <input
        className="form-control"
        type={props.type}
        placeholder={props.description}
        value={props.formData[props.label]}
        onChange={event => props.onSingleInputEdit(props.label, event.target.value)}
        ref={(input) => {textInputRef = input}}
      />
    </div>
  );
};

export default SingleInput;
