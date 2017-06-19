import React from 'react';
import SingleInput from './SingleInput';
import PropTypes from 'prop-types';

const SelectFieldsForm = (props) => {
  return (
      <div className="SelectFieldsForm">
        <SingleInput  type="text"
                      label="current_select_fields"
                      value={props.value}
                      description="Select Fields"
                      onInputChange={props.onInputChange}
                      />
          <button type="button"
                  className="SelectFieldsForm__addFieldButton"
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