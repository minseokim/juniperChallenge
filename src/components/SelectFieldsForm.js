import React from 'react';
import SingleInput from './SingleInput';
import PropTypes from 'prop-types';

const SelectFieldsForm = (props) => {

  return (
      <div className="row">
        <div className="col-md-8">
          <SingleInput  type="text"
                        label="current_select_fields"
                        value={props.value}
                        description="Select Fields"
                        onInputChange={props.onInputChange}
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

SelectFieldsForm.propTypes = {
  value : PropTypes.string,
  onSelectFieldsAdd : PropTypes.func,
  onInputChange : PropTypes.func
}

export default SelectFieldsForm;