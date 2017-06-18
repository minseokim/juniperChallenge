import React from 'react';

const SelectFieldsForm = (props) => {
  return (
      <div className="row">
        <div className="col-md-8">
          <input
          className="form-control"
          placeholder="add select fields here"
          onChange={event => props.onCurrentSelectFieldsEdit(props.title, event.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input type="submit" value="Add Field"/>
        </div>
      </div>
    )
}

export default SelectFieldsForm;