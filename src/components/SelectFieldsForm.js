import React from 'react';

const SelectFieldsForm = (props) => {
  let textInput;
  return (
      <div className="row">
        <div className="col-md-8">
          <input
          className="form-control"
          placeholder="add select fields here"
          onChange={event => props.onCurrentSelectFieldsEdit(props.title, event.target.value)}
          ref={(input) => {textInput = input}}
          />
        </div>
        <div className="col-md-4">
          <button type="button" onClick={event => props.onSelectFieldsAdd(event, textInput)}>
            Add Field
          </button>
        </div>
      </div>
    )
}

export default SelectFieldsForm;