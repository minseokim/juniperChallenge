import React from 'react';
import SingleInput from './SingleInput';
import DropdownSelectForm from './DropdownSelectForm';

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