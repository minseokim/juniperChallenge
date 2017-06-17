import React from "react";

const SingleInput = props => {
  return (
    <div className="form-group">
      <label htmlFor="{props.label}">{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        placeholder="Type table name here"
        onChange={e => props.onSingleInputEdit(props.label, e.target.value)}
      />
    </div>
  );
};

export default SingleInput;
