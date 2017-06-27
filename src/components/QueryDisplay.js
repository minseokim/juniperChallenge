import React from 'react';
import PropTypes from 'prop-types';

const QueryDisplay = (props) => {

  const generateQuery = () => {

    const obj = {
      table_name : props.table_name,
      start_time: props.start_time,
      end_time: props.end_time,
      select_fields: props.select_fields,
      where_clause: props.where_clause
    };

    return JSON.stringify(obj, null, 4);
  };

  return (
    <div className="queryDisplay">
      <h3>Generated Query</h3>
      <pre className="queryDisplay__codeBlock"><code>{generateQuery()}</code></pre>
    </div>
    )
}

QueryDisplay.propTypes = {
  tableName: PropTypes.string,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  selectFields: PropTypes.array,
  whereClause: PropTypes.array
}

export default QueryDisplay;