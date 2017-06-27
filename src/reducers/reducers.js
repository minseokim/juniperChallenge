import { combineReducers } from 'redux';

import single_inputs from './single_inputs';
import select_fields from './select_fields';
import where_clause from './where_clause';

const App = combineReducers({
  single_inputs,
  select_fields,
  where_clause,
});

export default App;