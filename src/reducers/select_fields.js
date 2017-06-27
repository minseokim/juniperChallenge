const select_fields = function(state = [], action) {

  switch (action.type) {
    case 'SELECTFIELDS_ADD':
      let newState = state.slice();
      newState.push(action.currentSelectField);
      return newState;

    case 'SELECTFIELDS_REMOVE':
      newState = [...state.slice(0, action.index),
                        ...state.slice(action.index+1)];
      return newState;

    default:
      return state
  }
};

export default select_fields;