import React, { Component } from "react";
import SelectFieldsForm from './SelectFieldsForm';

const SelectedFieldsList = (props) => {
  const selectedFieldsItems = props.selectedFieldsData.map((data, index) =>
    <p key={index}>{data}</p>
    );
  return (
    <div className="form-group">
      <label className="control-label">Select Fields</label>
      <SelectFieldsForm onSelectFieldsFormAdd={props.onSelectFieldsAdd}
                        onCurrentSelectFieldsEdit={props.onSingleInputEdit}
                        title="current_select_fields"/>
      {selectedFieldsItems}
    </div>
    )
}

export default SelectedFieldsList;