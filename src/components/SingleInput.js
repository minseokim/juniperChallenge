import React from "react";

const SingleInput = props => {
  return (
    <div className="form-group">
      <label for="table_name">table_name</label>
      <p>Type table name here</p>
      <input
        className="form-control"
        type="text"
        placeholder="Type table name here"
      />
    </div>
  );
};

export default SingleInput;
