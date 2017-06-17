import React from 'react';

const WhereClause = (props) => {
  return (
    <div className="form-group">
      <p>Where Clause</p>
      <label htmlFor="name"className="control-label">Name</label>
      <input className="form-control" placeholder="name"/>

      <label htmlFor="value" className="control-label">Value</label>
      <input className="form-control" placeholder="value"/>

      <label htmlFor="value" className="control-label">Operator</label>
      <select className="form-control">
        <option value="EqualsOperator">=</option>
        <option value="UnequalsOperator">!=</option>
      </select>

      <label htmlFor="value" className="control-label">And/Or Selector</label>
      <select className="form-control">
        <option value="AndSelector">AND</option>
        <option value="OrSelector">OR</option>
      </select>

      <button>Add</button>
    </div>
    )
}

export default WhereClause;