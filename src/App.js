import React, { Component } from "react";
import UserForms from "./components/UserForms";
import QueryDisplay from "./components/QueryDisplay";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      table_name: "",
      start_time: "",
      end_time: "",
      select_fields: [],
      where_clause: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSelectFieldsAdd = this.handleSelectFieldsAdd.bind(this);

    this.handleWhereClauseAdd = this.handleWhereClauseAdd.bind(this);

    this.handleRemoveSelectField = this.handleRemoveSelectField.bind(this);

    this.handleRemoveWhereClause = this.handleRemoveWhereClause.bind(this);
  }

  handleInputChange(label, value) {
    this.setState(prevState => {
      prevState[label] = value;
      return prevState;
    });
  }

  handleSelectFieldsAdd(currentSelectField) {
    this.setState(prevState => {
      prevState.select_fields.push(currentSelectField);
      return prevState;
    });
  }

  handleWhereClauseAdd(name, value, operator, andOrSelected) {
    this.setState(prevState => {
      const whereClause = prevState.where_clause;

      //create a new object with new where clause properties
      const currentWhereClause = {
        name: name,
        value: value,
        operator: operator
      };

      //Case 1 : where_clause is empty, or the selector is 'OR'
      if (whereClause.length === 0 || andOrSelected === "OR") {
        //Initialize a new array and push to whereClause
        whereClause.push([currentWhereClause]);

        //Case 2 : where_clause is already populated, and the selector is 'AND'
      } else if (andOrSelected === "AND") {
        if (whereClause && whereClause.length > 0) {
          const lastAdded = whereClause[whereClause.length - 1];

          //push to lastAdded
          lastAdded.push(currentWhereClause);
        }
      }
      return prevState;
    });
  }

  handleRemoveSelectField(index) {

    this.setState((prevState) => {
      const newSelectFields = prevState.select_fields.filter((current, originalIndex) => {
        return originalIndex !== index;
      });
      prevState.select_fields = newSelectFields;
      return prevState;
    });
  }

  handleRemoveWhereClause(blockIndex, index) {
    // blockIndex denotes to the index of the outermost where_clause array,
    //   index denotes index of each where_clause object in the same sub-array
    this.setState((prevState) => {
      const whereClause = prevState.where_clause;
      const whereClauseBlock = whereClause[blockIndex];
      //Case 1 :
      if (whereClauseBlock.length > 1) {
        //Use index to remove from whereClauseBlock
        whereClauseBlock.splice(index, 1);
      } else {
        //Case 2 :
        whereClause.splice(blockIndex, 1);
      }
      return prevState;
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          Query Generator
        </header>
        <section className="container-fluid App__container">
          <div className="row">
            <div className="col-sm-6">
              <UserForms
                table_name = {this.state.table_name}
                start_time = {this.state.start_time}
                end_time = {this.state.end_time}
                select_fields={this.state.select_fields}
                where_clause = {this.state.where_clause}
                onSelectFieldsAdd={this.handleSelectFieldsAdd}
                onInputChange={this.handleInputChange}
                onWhereClauseAdd={this.handleWhereClauseAdd}
                onRemoveSelectFieldClick={this.handleRemoveSelectField}
                onRemoveWhereClause={this.handleRemoveWhereClause}
              />
            </div>
            <div className="col-sm-6">
              <QueryDisplay
                tableName={this.state.table_name}
                startTime={this.state.start_time}
                endTime={this.state.end_time}
                selectFields={this.state.select_fields}
                whereClause={this.state.where_clause}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
