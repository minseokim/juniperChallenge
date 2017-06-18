import React from 'react';
import SingleInput from './SingleInput';

const SelectFieldsForm = (props) => {

  return (
      <div className="row">
        <div className="col-md-8">
          <SingleInput type="text"
                        label="current_select_fields"
                        description="Select Fields"
                        onSingleInputEdit={props.onSingleInputEdit}
                        formData={props.formData}
                        />
        </div>
        <div className="col-md-4">
          <button type="button" onClick={event => props.onSelectFieldsAdd(event)}>
            Add Field
          </button>
        </div>
      </div>
    )
}

export default SelectFieldsForm;