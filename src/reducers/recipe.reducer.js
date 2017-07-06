const RecipeReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_RECIPE':
      return [...state, action.payload]
    case 'GET_RECIPE':
      return state.filter(item => item.id === action.payload.id)[0]
    default:
      return state
  }
}

export default RecipeReducer
