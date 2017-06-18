import React from "react";

const SingleInput = props => {
let textInputRef;
  return (
    <div className="form-group">
      <label htmlFor="{props.label}">{props.description}</label>
      <input
        className="form-control"
        type={props.type}
        placeholder={props.description}
        onChange={event => props.onSingleInputEdit(props.label, event.target.value)}
        ref={(input) => {textInputRef = input}}
      />
    </div>
  );
};

export default SingleInput;
