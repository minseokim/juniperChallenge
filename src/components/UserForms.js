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
                    onSingleInputEdit={props.onSingleInputEdit}
                    formData={props.formData}
                    />
      <SingleInput type="datetime"
                    label="start_time"
                    description="Start Time in UNIX Epoch format"
                    onSingleInputEdit={props.onSingleInputEdit}
                    formData={props.formData}
                    />
      <SingleInput type="datetime"
                    label="end_time"
                    description="End Time in UNIX Epoch format"
                    onSingleInputEdit={props.onSingleInputEdit}
                    formData={props.formData}
                    />
      <SelectedFieldsList onSelectFieldsAdd={props.onSelectFieldsAdd}
                          onSingleInputEdit={props.onSingleInputEdit}
                        selectedFieldsData={props.formData.select_fields}
                        formData={props.formData}/>

      <WhereClauseForm formData={props.formData}
                        onSingleInputEdit={props.onSingleInputEdit}/>
    </form>
    )
}

export default UserForms;