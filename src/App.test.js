import { mount } from 'enzyme';
import React from 'react';
import App from './App';
import testSelectedFieldsData from './testingData/selectedFieldsData';
import testWhereClauseData from './testingData/whereClauseData';

const wrapper = mount(<App />);
const inputs = wrapper.find('input');

it('should convert string type to number for "start_time" and "end_time" state', () => {
  const testValue = "1484853180000000";
  const convertedTestValue = 1484853180000000;

  inputs.at('1').simulate('change', {target: { value : testValue}});
  expect(wrapper.state('start_time')).toBe(convertedTestValue);

  inputs.at('2').simulate('change', {target: { value : testValue}});
  expect(wrapper.state('end_time')).toBe(convertedTestValue);
});

it('should add new selected fields from input to selected_fields', () => {

  const firstNewField = "source_vn";
  const secondNewField = "destination_vn";
  const addFieldButton = wrapper.find('.SelectFieldsForm__addFieldButton').at(0);
  inputs.at('3').simulate('change', {target: { value : firstNewField}});
  addFieldButton.simulate('click');
  inputs.at('3').simulate('change', {target: { value : secondNewField}});
  addFieldButton.simulate('click');

  expect(JSON.stringify(wrapper.state('select_fields'))).toBe(JSON.stringify([firstNewField, secondNewField]));
});

it('should remove selected_field on click', () => {
  const removeSelectedFieldButton = wrapper.find('.selectedField__child__button').at('0');
  removeSelectedFieldButton.simulate('click');
  //remove first one
  expect(JSON.stringify(wrapper.state('select_fields'))).toBe(JSON.stringify(["destination_vn"]));
  //remove second, state variable should be empty
  removeSelectedFieldButton.simulate('click');
  expect(JSON.stringify(wrapper.state('select_fields'))).toBe(JSON.stringify([]));
});

it('should add where_clause to latest where_clause object when operator is an "ADD"', () => {

});

it('should add where_clause as new array when operator is an "OR"', () => {

});