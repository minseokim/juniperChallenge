import React from 'react';
import SingleInput from './SingleInput';
import SelectFields from './SelectFields';
import WhereClause from './WhereClause';

const UserForms = (props) => {
  return (
    <form>
      <SingleInput type="text"
                    label="table_name"
                    description="Table Name"
                    onSingleInputEdit={props.onSingleInputEdit}/>
      <SingleInput type="datetime"
                    label="start_time"
                    description="Start Time in UNIX Epoch format"
                    onSingleInputEdit={props.onSingleInputEdit}/>
      <SingleInput type="datetime"
                    label="end_time"
                    description="End Time in UNIX Epoch format"
                    onSingleInputEdit={props.onSingleInputEdit}/>
      <SelectFields />
      <WhereClause />
    </form>
    )
}

export default UserForms;