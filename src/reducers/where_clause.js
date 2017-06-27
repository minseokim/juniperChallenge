const where_clause = function(state = [], action) {

  switch (action.type) {
    case 'WHERECLAUSE_ADD':

    let whereClause = state.slice();

    //create a new object with new where clause properties
    const currentWhereClause = {
      name: action.name,
      value: action.value,
      operator: action.operator
    };

    //Case 1 : where_clause is empty, or the selector is 'OR'
    if (whereClause.length === 0 || action.andOrSelected === "OR") {
      //Initialize a new array and push to whereClause
      whereClause.push([currentWhereClause]);

      //Case 2 : where_clause is already populated, and the selector is 'AND'
    } else if (action.andOrSelected === "AND") {
      if (whereClause && whereClause.length > 0) {
        const lastAdded = whereClause[whereClause.length - 1];

        //push to lastAdded
        lastAdded.push(currentWhereClause);
      }
    }
    return whereClause;

    case 'WHERECLAUSE_REMOVE':
      whereClause = state.slice();
      const whereClauseBlock = whereClause[action.blockIndex];
      if (whereClauseBlock.length > 1) {
        //Use index to remove from whereClauseBlock
        whereClauseBlock.splice(action.index, 1);
      } else {
        whereClause.splice(action.blockIndex, 1);
      }
      return whereClause;

    default:
      return state
  }
};

export default where_clause;