import { render } from 'enzyme';
import React from 'react';
import UserForms from './UserForms';

it('should should have six inputs, two dropdowns and two buttons', () => {
  const props = {
    table_name : "",
    start_time: 0,
    end_time: 0,
    select_fields: [],
    where_clause: [],
    onSelectFieldsAdd: () => {},
    onInputChange: () => {},
    onWhereClauseAdd: () => {},
    onRemoveSelectFieldClick: () => {},
    onRemoveWhereClause: () => {}
  };

  const wrapper = render(<UserForms
                                table_name={props.table_name}
                                start_time= {props.start_time}
                                end_time= {props.end_time}
                                select_fields= {props.select_fields}
                                where_clause= {props.where_clause}
                                onSelectFieldsAdd= {props.onSelectFieldsAdd}
                                onInputChange= {props.onInputChange}
                                onWhereClauseAdd= {props.onWhereClauseAdd}
                                onRemoveSelectFieldClick= {props.onRemoveSelectFieldClick}
                                onRemoveWhereClause= {props.onRemoveWhereClause}
                        />);

  expect(wrapper.find('input').length).toBe(6);
  expect(wrapper.find('select').length).toBe(2);
  expect(wrapper.find('button').length).toBe(2);
});