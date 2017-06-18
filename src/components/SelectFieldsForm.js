import React from 'react';
import SingleInput from './SingleInput';
import PropTypes from 'prop-types';

const SelectFieldsForm = (props) => {

  return (
      <div>
        <SingleInput  type="text"
                      label="current_select_fields"
                      value={props.value}
                      description="Select Fields"
                      onInputChange={props.onInputChange}
                      />
          <button type="button"
                  onClick={() => {
                    props.onSelectFieldsAdd(props.value);
                    props.clearInput();
                  }}>
            Add Field
          </button>
      </div>
    )
}

SelectFieldsForm.propTypes = {
  value : PropTypes.string.isRequired,
  onSelectFieldsAdd : PropTypes.func.isRequired,
  onInputChange : PropTypes.func.isRequired,
  clearInput : PropTypes.func.isRequired
}

export default SelectFieldsForm;