const InitialState = {
  recipes: [],
  selected: {},
  isEditting: false
}

const assign = (target, newValue) => Object.assign({}, target, newValue)

const addRecipe = (state, recipe) => assign(state, {
  recipes: [...state.recipes, recipe]
})

const getRecipe = (state, recipeID) => assign(state, {
  selected: assign(state.selected, state.recipes.filter(recipe => recipe.id === recipeID)[0])
})

const removeRecipe = (state, recipeID) => assign(state, {
  recipes: state.recipes.filter(recipe => recipe.id !== recipeID),
  selected: {}
})

const editRecipe = (state, newRecipeData) => assign(state, {
  selected: assign(state.selected, newRecipeData)
})

const toggleEdit = (state, editState) => assign(state, {
  isEditting: editState
})

const RecipeReducer = (state=InitialState, action) => {
  switch(action.type) {
    case 'ADD_RECIPE':
      return addRecipe(state, action.payload)
    case 'REMOVE_RECIPE':
      return removeRecipe(state, action.payload)
    case 'GET_RECIPE':
      return getRecipe(state, action.payload)
    case 'EDIT_RECIPE':
      return editRecipe(state, action.payload)
    case 'TOGGLE_EDIT':
      return toggleEdit(state, action.payload)
    default:
      return state
  }
}

export default RecipeReducer
