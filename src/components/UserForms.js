import React from 'react';
import SingleInput from './SingleInput';
import SelectFields from './SelectFields';
import WhereClause from './WhereClause';

const UserForms = (props) => {
  return (
    <form>
      <SingleInput />
      <SelectFields />
      <WhereClause />
    </form>
    )
}

export default UserForms;