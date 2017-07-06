const InitialState = {
  recipes: [],
  selected: null
}

function assign(target, newValue) {
  return Object.assign(target, {}, newValue)
}

function addRecipe(state, recipe) {
  return assign(state, {
    recipes: [...state.recipes, recipe]
  })
}

function getRecipe(state, recipeID) {
  return assign(state, {
    selected: state.recipes.filter(recipe => recipe.id === recipeID)[0]
  })
}

const RecipeReducer = (state=InitialState, action) => {
  switch(action.type) {
    case 'ADD_RECIPE':
      return addRecipe(state, action.payload)
    case 'GET_RECIPE':
      return getRecipe(state, action.payload.id)
    default:
      return state
  }
}

export default RecipeReducer
