import React, { Component } from "react";
import WhereClauseForm from "./WhereClauseForm";
import PropTypes from "prop-types";

class WhereClauseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
      currentOperator: "=",
      andOrSelected: "AND"
    };

    this.onInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(label, value) {
    this.setState(prevState => {
      prevState[label] = value;
      return prevState;
    });
  }

  render () {
    const whereClauseListItems = this.props.whereClauseData.map((data, blockIndex) => {
      return data.map((currentClause, index) => {
        return (
          <div key={index}
                className="addedWhereClauseList__child">
            <span
              className="addedWhereClauseList__child__span">
              {currentClause.name}
            </span>
            <span
              className="addedWhereClauseList__child__span">
              {currentClause.value}
            </span>
            <span
              className="addedWhereClauseList__child__span">
              {currentClause.operator}
            </span>
            <button
              title="Remove this where clause data"
              className="col-xs-12 btn btn-danger addedWhereClauseList__child__removeButton"
              type="button"
              onClick={() => this.props.onRemoveWhereClause(blockIndex, index)}
            >
              <i className="glyphicon glyphicon-remove" />
            </button>
          </div>
        );
      });
    });

    return (
      <div>
        <WhereClauseForm
          name={this.state.name}
          value={this.state.value}
          currentOperator={this.state.currentOperator}
          andOrSelected={this.state.andOrSelected}
          onWhereClauseAdd={this.props.onWhereClauseAdd}
          onInputChange={this.onInputChange}
        />

        <div className="addedwhereClauseList">
          <h3>Added Where Clause</h3>
          <div className="addedWhereClauseList__container">
            {whereClauseListItems}
          </div>
        </div>
      </div>
    );
  }
}

WhereClauseList.propTypes = {
  whereClauseData: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onWhereClauseAdd: PropTypes.func.isRequired,
  onRemoveWhereClause: PropTypes.func.isRequired
};

export default WhereClauseList;
