import React from "react";
import SelectFieldsForm from "./SelectFieldsForm";
import PropTypes from "prop-types";

const SelectedFieldsList = props => {
  const selectedFieldsItems = props.selectedFieldsData.map((data, index) =>
    <div key={index}>
      <p>{data}</p>
      <button
        title="Remove this selected field"
        className="col-xs-12 btn btn-danger"
        type="button"
        onClick={() => props.onRemoveSelectFieldClick(index, "button")}
      >
        <i className="glyphicon glyphicon-remove" />
      </button>
    </div>
  );

  return (
    <div>
      <SelectFieldsForm
        value={props.value}
        onSelectFieldsAdd={props.onSelectFieldsAdd}
        onInputChange={props.onInputChange}
      />
      {selectedFieldsItems}
    </div>
  );
};

SelectedFieldsList.propTypes = {
  current_select_fields: PropTypes.string,
  onSelectFieldsAdd: PropTypes.func,
  onInputChange: PropTypes.func,
  selectedFieldsData: PropTypes.array,
  onRemoveSelectFieldClick: PropTypes.func
};

export default SelectedFieldsList;
