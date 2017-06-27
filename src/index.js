import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers';
import { createStore } from 'redux';
import './index.css';

const initialState = {
  single_inputs : {
      table_name: "",
      start_time: 0,
      end_time: 0,
  },
  select_fields: [],
  where_clause: []
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

document.getElementById('root'));
