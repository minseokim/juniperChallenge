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
        <div key={index}>
          <p>{data}</p>
          <button
            title="Remove this selected field"
            className="col-xs-12 btn btn-danger"
            type="button"
            onClick={() => this.props.onRemoveSelectFieldClick(index, "button")}
          >
            <i className="glyphicon glyphicon-remove" />
          </button>
        </div>
    );

    return (
      <div>
        <SelectFieldsForm
          value={this.state.current_select_fields}
          onSelectFieldsAdd={this.props.onSelectFieldsAdd}
          onInputChange={this.handleInputChange}
          clearInput={this.clearInput}
        />
        {selectedFieldsItems}
      </div>
    );
  }
}

// const SelectedFieldsList = props => {
//   const selectedFieldsItems = props.selectedFieldsData.map((data, index) =>
//     <div key={index}>
//       <p>{data}</p>
//       <button
//         title="Remove this selected field"
//         className="col-xs-12 btn btn-danger"
//         type="button"
//         onClick={() => props.onRemoveSelectFieldClick(index, "button")}
//       >
//         <i className="glyphicon glyphicon-remove" />
//       </button>
//     </div>
//   );

//   return (
//     <div>
//       <SelectFieldsForm
//         value={props.value}
//         onSelectFieldsAdd={props.onSelectFieldsAdd}
//         onInputChange={props.onInputChange}
//       />
//       {selectedFieldsItems}
//     </div>
//   );
// };

SelectedFieldsList.propTypes = {
  current_select_fields: PropTypes.string,
  onSelectFieldsAdd: PropTypes.func,
  onInputChange: PropTypes.func,
  selectedFieldsData: PropTypes.array,
  onRemoveSelectFieldClick: PropTypes.func
};

export default SelectedFieldsList;