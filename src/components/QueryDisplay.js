import React from 'react';

const QueryDisplay = (props) => {

  const generateQuery = () => {
    const queryData = props.queryData;

    const obj = {
      table_name : queryData.table_name,
      start_time: queryData.start_time,
      end_time: queryData.end_time,
      select_fields: queryData.select_fields,
      where_clause: queryData.where_clause
    };

    return JSON.stringify(obj, null, 2);
  };

  return (
    <div>
      Display Generated Query Here
      <pre><code>{generateQuery()}</code></pre>
    </div>
    )
}

export default QueryDisplay;