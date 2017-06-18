import React, { Component } from "react";
import UserForms from "./components/UserForms";
import QueryDisplay from "./components/QueryDisplay";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formData : {
        table_name: "",
        start_time: "",
        end_time: "",
        select_fields: [],
        where_clause : [],
        current_select_fields: "",
        current_where_clause : ""
      }
    };
    this.handleSingleInputEdit = this.handleSingleInputEdit.bind(this);
  }

  handleSingleInputEdit(label, value) {
    this.setState((prevState) => {
      prevState.formData[label] = value;
      return prevState
    });
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
                onSelectFieldsAdd={this.handleSelectFieldsAdd}
                onSingleInputEdit={this.handleSingleInputEdit}
                formData={this.state.formData}
              />
            </div>
            <div className="col-sm-6">
              <QueryDisplay query={this.state.query} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
