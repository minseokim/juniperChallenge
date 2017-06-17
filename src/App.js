import React, { Component } from "react";
import UserForms from "./components/UserForms";
import QueryDisplay from "./components/QueryDisplay";
import "./App.css";

class App extends Component {
  data() {
    query : '';
    formData: {
      table_name : ''
      start_time : ''
    }
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
              <UserForms />
            </div>
            <div className="col-sm-6">
              <QueryDisplay />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
