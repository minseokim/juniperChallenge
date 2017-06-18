import React from 'react';
import SingleInput from './SingleInput';
import SelectedFieldsList from './SelectedFieldsList';
import SelectFieldsForm from './SelectFieldsForm';
import WhereClauseList from './WhereClauseList';

const UserForms = (props) => {
  return (
    <form>
      <SingleInput type="text"
                    label="table_name"
                    value={props.table_name}
                    description="Table Name"
                    onInputChange={props.onInputChange}
                    />
      <SingleInput type="datetime"
                    label="start_time"
                    value={props.start_time}
                    description="Start Time in UNIX Epoch format"
                    onInputChange={props.onInputChange}
                    />
      <SingleInput type="datetime"
                    label="end_time"
                    value={props.end_time}
                    description="End Time in UNIX Epoch format"
                    onInputChange={props.onInputChange}
                    />
      <SelectedFieldsList value={props.current_select_fields}
                          onSelectFieldsAdd={props.onSelectFieldsAdd}
                          onInputChange={props.onInputChange}
                          selectedFieldsData={props.select_fields}
                          onRemoveSelectFieldClick={props.onRemoveSelectFieldClick}
                        />

      <WhereClauseList  whereClauseName={props.name}
                        whereClauseValue={props.value}
                        whereClauseData={props.where_clause}
                        onInputChange={props.onInputChange}
                        onWhereClauseAdd={props.onWhereClauseAdd}
                        onRemoveWhereClause={props.onRemoveWhereClause}

      />
    </form>
    )
}

export default UserForms;