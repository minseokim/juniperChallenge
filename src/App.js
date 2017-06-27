import React, { Component } from "react";
import UserFormsContainer from "./components/UserFormsContainer";
import QueryDisplayContainer from "./components/QueryDisplayContainer";
import { createStore } from 'redux';
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <header className="App__header">
        Query Generator
      </header>
      <section className="container-fluid App__container">
        <div className="row">
          <div className="col-sm-6">
            <UserFormsContainer />
          </div>
          <div className="col-sm-6">
            <QueryDisplayContainer />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
