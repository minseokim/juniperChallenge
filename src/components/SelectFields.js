import React from 'react';

const SelectFields = (props) => {
  return (
    <div className="form-group">
      <label className="control-label">Select Fields</label>
      <div className="row">
        <div className="col-md-8">
          <input
          className="form-control"
          placeholder="add select fields here"
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

export default SelectFields;