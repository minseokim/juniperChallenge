import React from "react";
import SingleInput from "./SingleInput";
import DropdownSelectForm from "./DropdownSelectForm";
import PropTypes from "prop-types";

const WhereClauseForm = props => {
  return (
    <div className="WhereClauseForm">
      <h3 className="WhereClauseForm__heading">Where Clause</h3>

      <SingleInput
        type="text"
        label="name"
        value={props.name}
        description="Where Clause name"
        onInputChange={props.onInputChange}
      />

      <SingleInput
        type="text"
        label="value"
        value={props.value}
        description="Where Clause value"
        onInputChange={props.onInputChange}
      />

      <DropdownSelectForm
        type="currentOperator"
        label="Operator"
        value={props.currentOperator}
        options={["=", "!="]}
        onInputChange={props.onInputChange}
      />

      <DropdownSelectForm
        type="andOrSelected"
        label="AND/OR"
        value={props.andOrSelected}
        options={["AND", "OR"]}
        onInputChange={props.onInputChange}
      />
      <button
        type="button"
        onClick={() => {
            props.onWhereClauseAdd(
            props.name,
            props.value,
            props.currentOperator,
            props.andOrSelected
          );
        }}>
        Add Where Clause
      </button>

    </div>
  );
};

WhereClauseForm.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onWhereClauseAdd: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default WhereClauseForm;
