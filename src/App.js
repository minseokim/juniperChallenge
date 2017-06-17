import React, { Component } from "react";
import UserForm from "./components/UserForm";
import QueryDisplay from "./components/QueryDisplay";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          Query Generator
        </header>
        <section className="container-fluid App__container">
          <div className="row">
            <div className="col-sm-6">
              <UserForm />
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
