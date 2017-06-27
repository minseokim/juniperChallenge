import React from "react";
import SingleInput from "./SingleInput";
import SelectedFieldsList from "./SelectedFieldsList";
import WhereClauseList from "./WhereClauseList";
import PropTypes from "prop-types";

const UserForms = props => {
  return (
    <form>
      <SingleInput
        type="text"
        label="table_name"
        value={props.table_name}
        description="Enter Table Name"
        onInputChange={props.onInputChange}
        className=""
      />
      <SingleInput
        type="number"
        label="start_time"
        value={props.start_time}
        description="Start Time in UNIX Epoch format"
        onInputChange={props.onInputChange}
      />
      <SingleInput
        type="number"
        label="end_time"
        value={props.end_time}
        description="End Time in UNIX Epoch format"
        onInputChange={props.onInputChange}
      />
      <SelectedFieldsList
        selectedFieldsData={props.select_fields}
        onSelectFieldsAdd={props.onSelectFieldsAdd}
        onInputChange={props.onInputChange}
        onRemoveSelectFieldClick={props.onRemoveSelectFieldClick}
      />

      <WhereClauseList
        whereClauseData={props.where_clause}
        onInputChange={props.onInputChange}
        onWhereClauseAdd={props.onWhereClauseAdd}
        onRemoveWhereClause={props.onRemoveWhereClause}
      />
    </form>
  );
};

export default UserForms;
