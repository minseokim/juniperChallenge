import React from 'react';

const SelectFieldsForm = (props) => {
  return (
    <div className="form-group">
      <label className="control-label">Select Fields</label>
      <div className="row">
        <div className="col-md-8">
          <input
          className="form-control"
          placeholder="add select fields here"
          onChange={event => props.onCurrentSelectFieldsEdit(props.title, event.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button>
            Add Field
          </button>
        </div>
      </div>
    </div>
    )
}

export default SelectFieldsForm;