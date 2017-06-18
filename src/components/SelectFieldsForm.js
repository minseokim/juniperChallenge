import React from 'react';
import SingleInput from './SingleInput';

const SelectFieldsForm = (props) => {

  return (
      <div className="row">
        <div className="col-md-8">
          <SingleInput type="text"
                        label="current_select_fields"
                        description="Select Fields"
                        onInputChange={props.onInputChange}
                        formData={props.formData}
                        />
        </div>
        <div className="col-md-4">
          <button type="button" onClick={props.onSelectFieldsAdd}>
            Add Field
          </button>
        </div>
      </div>
    )
}

export default SelectFieldsForm;