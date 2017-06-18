import React, { Component } from "react";
import SelectFieldsForm from './SelectFieldsForm';

const SelectedFieldsList = (props) => {
  return (
    <div>
      <SelectFieldsForm onSelectFieldsFormAdd={props.onSelectFieldsAdd}
                        onCurrentSelectFieldsEdit={props.onSingleInputEdit}
                        title="current_select_fields"/>
      {props.selectedFieldsData}
    </div>
    )
}

export default SelectedFieldsList;