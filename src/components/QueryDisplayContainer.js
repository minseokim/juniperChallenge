import { connect } from "react-redux";
import QueryDisplay from './QueryDisplay';

const mapStateToProps = state => {
  return {
    table_name: state.single_inputs.table_name,
    start_time: state.single_inputs.start_time,
    end_time: state.single_inputs.end_time,
    select_fields: state.select_fields,
    where_clause: state.where_clause
  };
};

const QueryDisplayContainer = connect(mapStateToProps)(QueryDisplay);

export default QueryDisplayContainer;
