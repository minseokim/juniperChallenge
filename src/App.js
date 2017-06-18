import React, { Component } from "react";
import UserForms from "./components/UserForms";
import QueryDisplay from "./components/QueryDisplay";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        table_name: "",
        start_time: "",
        end_time: "",
        select_fields: [],
        where_clause: [],
        current_select_fields: "",
        name: "",
        value: "",
        currentOperator: "",
        andOrSelected: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSelectFieldsAdd = this.handleSelectFieldsAdd.bind(this);

    this.handleWhereClauseAdd = this.handleWhereClauseAdd.bind(this);

    this.handleRemoveSelectField = this.handleRemoveSelectField.bind(this);

    this.handleRemoveWhereClause = this.handleRemoveWhereClause.bind(this);
  }

  handleInputChange(label, value) {
    this.setState(prevState => {
      prevState.formData[label] = value;
      return prevState;
    });
  }

  handleSelectFieldsAdd() {
    this.setState(prevState => {
      const newSelectedField = prevState.formData.current_select_fields;
      prevState.formData.select_fields.push(newSelectedField);
      //Clear out select fields input after value is added
      prevState.formData.current_select_fields = "";
      return prevState;
    });
  }

  handleWhereClauseAdd() {
    this.setState(prevState => {
      const formData = prevState.formData;
      const andOrSelected = formData.andOrSelected;
      const whereClause = formData.where_clause;

      //create a new object with new where clause properties
      const currentWhereClause = {
        name: formData.name,
        value: formData.value,
        operator: formData.currentOperator
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
      const newSelectFields = prevState.formData.select_fields.filter((current, originalIndex) => {
        return originalIndex !== index;
      });
      prevState.formData.select_fields = newSelectFields;
      return prevState;
    });
  }

  handleRemoveWhereClause(blockIndex, index) {
    console.log('button remove!');
    //blockIndex denotes to the index of the outermost where_clause array,
      //index denotes index of each where_clause object in the same sub-array
    this.setState((prevState) => {
      const whereClause = prevState.formData.where_clause;
      const whereClauseBlock = whereClause[blockIndex].slice();

      //Case 1 :
      if (whereClauseBlock.length > 1) {
        //Use index to remove from whereClauseBlock
        whereClause[blockIndex] =  whereClauseBlock.splice(1, index);
      } else {
        //Case 2 :
        prevState.formData.where_clause = whereClause.splice(1, blockIndex);
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
                formData={this.state.formData}
                onSelectFieldsAdd={this.handleSelectFieldsAdd}
                onInputChange={this.handleInputChange}
                onWhereClauseAdd={this.handleWhereClauseAdd}
                onRemoveSelectFieldClick={this.handleRemoveSelectField}
                onRemoveWhereClause={this.handleRemoveWhereClause}
              />
            </div>
            <div className="col-sm-6">
              <QueryDisplay
                queryData={this.state.formData}
                query={this.state.query}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
