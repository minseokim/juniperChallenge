import { mount } from 'enzyme';
import React from 'react';
import SelectedFieldsList from './SelectedFieldsList';

const testingSelectedFieldsData = ['time', 'source_vn', 'destination_vn', 'source_port'];

const wrapper = mount(<SelectedFieldsList
                          selectedFieldsData={testingSelectedFieldsData}
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

  const inputs = wrapper.find(".selectedField__paragraph");
  expect(inputs.length).toBe(testingSelectedFieldsData.length);
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