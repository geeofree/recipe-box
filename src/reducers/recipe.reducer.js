const InitialState = {
  recipes: [],
  selected: {}
}

function assign(target, newValue) {
  return Object.assign({}, target, newValue)
}

function addRecipe(state, recipe) {
  return assign(state, {
    recipes: [...state.recipes, recipe]
  })
}

function getRecipe(state, recipeID) {
  return assign(state, {
    selected: assign(state.selected, state.recipes.filter(recipe => recipe.id === recipeID)[0])
  })
}

function removeRecipe(state, recipeID) {
  return assign(state, {
    recipes: state.recipes.filter(recipe => recipe.id !== recipeID),
    selected: assign(state.selected, {})
  })
}

const RecipeReducer = (state=InitialState, action) => {
  switch(action.type) {
    case 'ADD_RECIPE':
      return addRecipe(state, action.payload)
    case 'REMOVE_RECIPE':
      return removeRecipe(state, action.payload.id)
    case 'GET_RECIPE':
      return getRecipe(state, action.payload.id)
    default:
      return state
  }
}

export default RecipeReducer
