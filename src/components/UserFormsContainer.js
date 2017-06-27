import { connect } from "react-redux";
import {
  inputChange,
  selectFieldsAdd,
  whereClauseAdd,
  removeSelectField,
  removeWhereClause
} from "./../actions/actions";
import UserForms from './UserForms';

const mapStateToProps = state => {
  return {
    table_name: state.single_inputs.table_name,
    start_time: state.single_inputs.start_time,
    end_time: state.single_inputs.end_time,
    select_fields: state.select_fields,
    where_clause: state.where_clause
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChange: (label, value, numOrString) => {
      dispatch(inputChange(label, value, numOrString));
    },
    onSelectFieldsAdd: currentSelectField => {
      dispatch(selectFieldsAdd(currentSelectField));
    },
    onWhereClauseAdd: (name, value, operator, andOrSelected) => {
      dispatch(whereClauseAdd(name, value, operator, andOrSelected));
    },
    onRemoveSelectFieldClick: index => {
      dispatch(removeSelectField(index));
    },
    onRemoveWhereClause: (blockIndex, index) => {
      dispatch(removeWhereClause(blockIndex, index));
    }
  };
};

const UserFormsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForms);

export default UserFormsContainer;