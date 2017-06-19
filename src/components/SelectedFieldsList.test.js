import { mount } from 'enzyme';
import React from 'react';
import SelectedFieldsList from './SelectedFieldsList';
import testData from './../testingData/selectedFieldsData';

const wrapper = mount(<SelectedFieldsList
                          selectedFieldsData={testData}
                          onSelectFieldsAdd={() => {}}
                          onInputChange={() => {}}
                          onRemoveSelectFieldClick={() => {}}
                      />);

it('should handle selected field input change', () => {

  const inputs = wrapper.find('input');
  const testValue = 'testing_dummy_table_name';
  inputs.at('0').simulate('change', {target: { value : testValue}});
  expect(wrapper.state('current_select_fields')).toBe(testValue);
});

it('should render correct number of selected fields based on given data', () => {

  const spans = wrapper.find(".selectedField__child__span");
  expect(spans.length).toBe(testData.length);
});

it ('should clear out input field after added selected field', () => {
  //set wrapper's state to dummy data
  wrapper.setState({
    current_select_fields : "destination_vn"
  });

  const addButton = wrapper.find('.SelectFieldsForm__addFieldButton');
  addButton.at(0).simulate('click');
  expect(wrapper.state('current_select_fields')).toBe("");
});