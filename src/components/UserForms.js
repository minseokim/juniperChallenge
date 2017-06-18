import React from 'react';
import SingleInput from './SingleInput';
import SelectedFieldsList from './SelectedFieldsList';
import SelectFieldsForm from './SelectFieldsForm';
import WhereClauseForm from './WhereClauseForm';

const UserForms = (props) => {
  return (
    <form>
      <SingleInput type="text"
                    label="table_name"
                    description="Table Name"
                    onInputChange={props.onInputChange}
                    formData={props.formData}
                    />
      <SingleInput type="datetime"
                    label="start_time"
                    description="Start Time in UNIX Epoch format"
                    onInputChange={props.onInputChange}
                    formData={props.formData}
                    />
      <SingleInput type="datetime"
                    label="end_time"
                    description="End Time in UNIX Epoch format"
                    onInputChange={props.onInputChange}
                    formData={props.formData}
                    />
      <SelectedFieldsList onSelectFieldsAdd={props.onSelectFieldsAdd}
                          onInputChange={props.onInputChange}
                        selectedFieldsData={props.formData.select_fields}
                        formData={props.formData}
                        />

      <WhereClauseForm formData={props.formData}
                        onInputChange={props.onInputChange}
                        onWhereClauseAdd={props.onWhereClauseAdd}
                        />
    </form>
    )
}

export default UserForms;