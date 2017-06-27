//Actions
export const inputChange = (label, value, numOrString) => {
  return {
    type: 'INPUT_CHANGE',
    label : label,
    value : value,
    numOrString : numOrString,
  }
};

export const selectFieldsAdd = (currentSelectField) => {
  return {
    type : 'SELECTFIELDS_ADD',
    currentSelectField : currentSelectField,
  }
};

export const whereClauseAdd = (name, value, operator, andOrSelected) => {
  return {
    type : 'WHERECLAUSE_ADD',
    name : name,
    value: value,
    operator : operator,
    andOrSelected : andOrSelected,
  }
};

export const removeSelectField = (index) => {
  return {
    type : 'SELECTFIELDS_REMOVE',
    index : index
  }
};

export const removeWhereClause = (blockIndex, index) => {
  return {
    type : 'WHERECLAUSE_REMOVE',
    blockIndex : blockIndex,
    index : index
  }
};

