import React from 'react';
import SingleInput from './SingleInput';

const WhereClauseForm = (props) => {
  return (

    <div>
      <p><strong>Where Clause</strong></p>

      <SingleInput type="text"
              label="name"
              description="Where Clause name"
              onSingleInputEdit={props.onSingleInputEdit}
              formData={props.formData}
              />

      <SingleInput type="text"
              label="value"
              description="Where Clause value"
              onSingleInputEdit={props.onSingleInputEdit}
              formData={props.formData}
              />

      <div className="form-group">
        <label htmlFor="value" className="control-label">Operator</label>
        <select className="form-control">
          <option value="EqualsOperator">=</option>
          <option value="UnequalsOperator">!=</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="value" className="control-label">AND/OR</label>
        <select className="form-control">
          <option value="AndSelector">AND</option>
          <option value="OrSelector">OR</option>
        </select>
      </div>
      <button type="button">Add Where Clause</button>

    </div>
    )
}

export default WhereClauseForm;