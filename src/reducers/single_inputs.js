const single_inputs = function(state = {}, action) {

  switch (action.type) {
    case 'INPUT_CHANGE':
      let updatedValue = action.numOrString === "number" ? Number.parseInt(action.value, 10) : action.value;

      let newObj = {};
      newObj[action.label] = updatedValue;

      return Object.assign({}, state,
        newObj
      );
    default:
      return state
  }
};

export default single_inputs;