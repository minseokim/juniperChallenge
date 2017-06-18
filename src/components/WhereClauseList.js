import React from "react";
import WhereClauseForm from "./WhereClauseForm";

const WhereClauseList = props => {
  const whereClauseListItems = props.whereClauseData.map((data, blockIndex) => {
    return data.map((currentClause, index) => {
      return (
        <div key={index}>
          <p>{currentClause.name}</p>
          <p>{currentClause.value}</p>
          <p>{currentClause.operator}</p>
          <button
            title="Remove this where clause data"
            className="col-xs-12 btn btn-danger"
            type="button"
            onClick={() => props.onRemoveClick(blockIndex, "remove")}
          >
            <i className="glyphicon glyphicon-remove" />
          </button>
        </div>
      );
    })
  });

  return (
    <div>
      <WhereClauseForm
        onWhereClauseAdd={props.onWhereClauseAdd}
        onInputChange={props.onInputChange}
        formData={props.formData}
      />
      {whereClauseListItems}
    </div>
  );
};

export default WhereClauseList;
