import { mount } from 'enzyme';
import React from 'react';
import WhereClauseList from './WhereClauseList';
import testData from './../testingData/whereClauseData';

const wrapper = mount(<WhereClauseList
                        whereClauseData={testData}
                        onInputChange={() => {}}
                        onWhereClauseAdd={() => {}}
                        onRemoveWhereClause={() => {}}
                      />);

it('should handle dropdown field input change', () => {

  const inputs = wrapper.find('select');
  const testValue = '===';
  inputs.at('0').simulate('change', {target: { value : testValue}});
  expect(wrapper.state('currentOperator')).toBe(testValue);
});

it ('should handle text input change', () => {
  const inputs = wrapper.find('input');
  const testValue = 'source_vn';
  inputs.at('0').simulate('change', {target: { value : testValue}});
  expect(wrapper.state('name')).toBe(testValue);
});