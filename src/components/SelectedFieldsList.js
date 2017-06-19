import React, { Component } from "react";
import SelectFieldsForm from "./SelectFieldsForm";
import PropTypes from "prop-types";

class SelectedFieldsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_select_fields: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.clearInput = this.clearInput.bind(this);
  }

  handleInputChange(label, value) {
    this.setState(prevState => {
      prevState[label] = value;
      return prevState;
    });
  }

  clearInput() {
    this.setState({
      current_select_fields : ""
    });
  }

  render() {
    const selectedFieldsItems = this.props.selectedFieldsData.map(
      (data, index) =>
        <div key={index} className="selectedField__child">
          <span className="selectedField__child__span">{data}</span>
          <button
            title="Remove this selected field"
            className="btn btn-danger selectedField__child__button"
            type="button"
            onClick={() => this.props.onRemoveSelectFieldClick(index, "button")}
          >
            <i className="glyphicon glyphicon-remove" />
          </button>
        </div>
    );

    return (
      <div className="selectedFieldsList">
        <SelectFieldsForm
          value={this.state.current_select_fields}
          onSelectFieldsAdd={this.props.onSelectFieldsAdd}
          onInputChange={this.handleInputChange}
          clearInput={this.clearInput}
        />
        <div className="selectedField">
          <h3>Added Fields</h3>
          <div className="selectedField__container">
            {selectedFieldsItems}
          </div>
        </div>
      </div>
    );
  }
}

SelectedFieldsList.propTypes = {
  onSelectFieldsAdd: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  selectedFieldsData: PropTypes.array.isRequired,
  onRemoveSelectFieldClick: PropTypes.func.isRequired
};

export default SelectedFieldsList;