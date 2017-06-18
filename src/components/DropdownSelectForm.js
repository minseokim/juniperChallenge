import React from "react";

const DropdownSelectForm = props => {
  return (
    <div className="form-group">
      <label htmlFor="{props.label}" className="control-label">Operator</label>
      <select className="form-control">
        <option value="EqualsOperator">=</option>
        <option value="UnequalsOperator">!=</option>
      </select>
    </div>
  );
};

export default DropdownSelectForm;