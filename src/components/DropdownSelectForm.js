import React from "react";

const DropdownSelectForm = props => {

  const options = props.options.map((currentOption, index) => {
    return (
      <option key={currentOption}
              value={currentOption}>
        {currentOption}
      </option>
      )
  });

  return (
    <div className="form-group">
      <label htmlFor="{props.label}" className="control-label">{props.label}</label>
      <select className="form-control"
              value={props.value}
              onChange={event => props.onInputChange(props.type, event.target.value)}>
        {options}
      </select>
    </div>
  );
};

export default DropdownSelectForm;