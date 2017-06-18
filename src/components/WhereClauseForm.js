import React from 'react';

const WhereClauseForm = (props) => {
  return (
    <div className="form-group">
      <p><strong>Where Clause</strong></p>
      <div className="form-group">
        <label htmlFor="name"className="control-label">Name</label>
        <input className="form-control" placeholder="name"/>
      </div>

      <div className="form-group">
        <label htmlFor="value" className="control-label">Value</label>
        <input className="form-control" placeholder="value"/>
      </div>

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