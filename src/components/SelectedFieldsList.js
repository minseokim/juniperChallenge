import React from "react";
import SelectFieldsForm from './SelectFieldsForm';

const SelectedFieldsList = (props) => {
  const selectedFieldsItems = props.selectedFieldsData.map((data, index) =>
    <p key={index}>{data}</p>
    );
  return (
    <div>
      <SelectFieldsForm onSelectFieldsAdd={props.onSelectFieldsAdd}
                        onInputChange={props.onInputChange}
                        formData={props.formData}
                        />
      {selectedFieldsItems}
    </div>
    )
}

export default SelectedFieldsList;