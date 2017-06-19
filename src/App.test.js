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
  const addFieldButton = wrapper.find('.SelectFieldsForm__addFieldButton').at('0');
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

//Button that triggers adding new Where Clause
const addWhereClauseButton = wrapper.find('.WhereClauseForm__addButton').at('0');
// Select tag for 'AND'/'OR'
const andOrSelector = wrapper.find('select').at('1');

it('should add where_clause to latest where_clause object when selector is an "ADD"', () => {

  andOrSelector.simulate('change', {target: { value : "AND"}});
  addWhereClauseButton.simulate('click');
  expect(wrapper.state('where_clause').length).toBe(1);

  //Add twice more
  addWhereClauseButton.simulate('click');
  addWhereClauseButton.simulate('click');

  //Should remain unchanged, since adding to same list
  expect(wrapper.state('where_clause').length).toBe(1);

});


it('should add where_clause as new array when selector is an "OR"', () => {
  //where_clause state variable's list length is 3 at this point.
  andOrSelector.simulate('change', {target: { value : "OR"}});
  addWhereClauseButton.simulate('click');
  //Should be incremented, since we're adding to new list
  expect(wrapper.state('where_clause').length).toBe(2);

  addWhereClauseButton.simulate('click');
  addWhereClauseButton.simulate('click');
  expect(wrapper.state('where_clause').length).toBe(4);
});


it('should remove added where clause as appropriately on click, handling nested structure of "where_clause" state', () => {

  //Store reference to where_clause state
  const whereClause = wrapper.state('where_clause');

  //We will attempt to remove the first added where clause
  const removeWhereClauseButton = wrapper.find('.addedWhereClauseList__child__removeButton').at(0);

  //Store starting length of entire where clause list(outer list)
  const startingWhereClauseListOuterLength = whereClause.length;

  //Get length of first where clause list(inner list)
  const firstWhereClauseListLength = whereClause[0].length;

  //Remove once, outer list length is unchanged
  removeWhereClauseButton.simulate('click');

  expect(whereClause.length).toBe(startingWhereClauseListOuterLength);

  //remove until first inner list is deleted
  for (let i = 0; i < whereClause.length-1; i++) {
    removeWhereClauseButton.simulate('click');
  }

  //outer list length should be decremented by 1 from start
  expect(whereClause.length).toBe(startingWhereClauseListOuterLength - 1);
});