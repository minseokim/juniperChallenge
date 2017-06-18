import React from 'react';
import SingleInput from './SingleInput';

const WhereClauseForm = (props) => {
  return (

    <div>
      <p><strong>Where Clause</strong></p>

      <SingleInput type="text"
              label="name"
              description="Where Clause name"
              onInputChange={props.onInputChange}
              formData={props.formData}
              />

      <SingleInput type="text"
              label="value"
              description="Where Clause value"
              onInputChange={props.onInputChange}
              formData={props.formData}
              />

      <div className="form-group">
        <label htmlFor="value" className="control-label">Operator</label>
        <select className="form-control"
                value={props.currentOperator}
                onChange={event => props.onInputChange('currentOperator', event.target.value)}>
          <option value="=">=</option>
          <option value="!=">!=</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="value" className="control-label">AND/OR</label>
        <select className="form-control"
                value={props.andOrSelected}
                onChange={event => props.onInputChange('andOrSelected', event.target.value)}>
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </div>

      <button type="button">Add Where Clause</button>

    </div>
    )
}

export default WhereClauseForm;