import React from "react";
import WhereClauseForm from "./WhereClauseForm";
import PropTypes from 'prop-types';

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
            onClick={() => props.onRemoveWhereClause(blockIndex, index)}
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
        name={props.whereClauseName}
        value={props.whereClauseValue}
        onWhereClauseAdd={props.onWhereClauseAdd}
        onInputChange={props.onInputChange}
      />
      {whereClauseListItems}
    </div>
  );
};

WhereClauseList.propTypes = {
  whereClauseName : PropTypes.string,
  whereClauseValue : PropTypes.string,
  WhereClauseData : PropTypes.array,
  onInputChange: PropTypes.func,
  onWhereClauseAdd : PropTypes.func,
  onRemoveWhereClause : PropTypes.func
}

export default WhereClauseList;
