import React, { Component } from "react";
import UserForms from "./components/UserForms";
import QueryDisplay from "./components/QueryDisplay";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      table_name: "",
      start_time: "",
      end_time: ""
    };
    this.handleSingleInputEdit = this.handleSingleInputEdit.bind(this);
  }

  handleSingleInputEdit(label, value) {
    this.setState({
      [label]: value
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
                data={this.state}
                onSingleInputEdit={this.handleSingleInputEdit}
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
