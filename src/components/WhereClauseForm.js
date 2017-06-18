import React from 'react';
import SingleInput from './SingleInput';
import DropdownSelectForm from './DropdownSelectForm';

const WhereClauseForm = (props) => {
  return (
    <div>
      <p><strong>Where Clause</strong></p>

      <SingleInput type="text"
              label="name"
              value={props.name}
              description="Where Clause name"
              onInputChange={props.onInputChange}
              />

      <SingleInput type="text"
              label="value"
              value={props.value}
              description="Where Clause value"
              onInputChange={props.onInputChange}
              />

      <DropdownSelectForm type="currentOperator"
                          label="Operator"
                          value={props.currentOperator}
                          options={['=', '!=']}
                          onInputChange={props.onInputChange}
              />

      <DropdownSelectForm type="andOrSelected"
                          label="AND/OR"
                          value={props.andOrSelected}
                          options={['AND', 'OR']}
                          onInputChange={props.onInputChange}
              />
      <button type="button" onClick={props.onWhereClauseAdd}>Add Where Clause</button>

    </div>
    )
}

export default WhereClauseForm;