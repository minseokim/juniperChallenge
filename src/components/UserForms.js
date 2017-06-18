import React from 'react';
import SingleInput from './SingleInput';
import SelectedFieldsList from './SelectedFieldsList';
import SelectFieldsForm from './SelectFieldsForm';
import WhereClauseList from './WhereClauseList';
import PropTypes from 'prop-types';

const UserForms = (props) => {
  return (
    <form>
      <SingleInput type="text"
                    label="table_name"
                    value={props.table_name}
                    description="Table Name"
                    onInputChange={props.onInputChange}
                    className=""
                    />
      <SingleInput type="date"
                    label="start_time"
                    value={props.start_time}
                    description="Start Time in UNIX Epoch format"
                    onInputChange={props.onInputChange}
                    />
      <SingleInput type="date"
                    label="end_time"
                    value={props.end_time}
                    description="End Time in UNIX Epoch format"
                    onInputChange={props.onInputChange}
                    />
      <SelectedFieldsList selectedFieldsData={props.select_fields}
                          onSelectFieldsAdd={props.onSelectFieldsAdd}
                          onInputChange={props.onInputChange}
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

UserForms.propTypes = {
  table_name : PropTypes.string,
  start_time: PropTypes.string,
  end_time: PropTypes.string,
  current_select_fields: PropTypes.string,
  select_fields: PropTypes.array,
  name: PropTypes.string,
  value: PropTypes.string,
  where_clause: PropTypes.array,
  onSelectFieldsAdd: PropTypes.func,
  onInputChange: PropTypes.func,
  onWhereClauseAdd: PropTypes.func,
  onRemoveSelectFieldClick: PropTypes.func,
  onRemoveWhereClause: PropTypes.func
}
export default UserForms;