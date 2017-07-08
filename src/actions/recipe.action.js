export const getRecipe = (id) => ({
  type: 'GET_RECIPE',
  payload: id
})

export const addRecipe = (recipeData) => ({
  type: 'ADD_RECIPE',
  payload: recipeData
})

export const removeRecipe = (id) => ({
  type: 'REMOVE_RECIPE',
  payload: id
})
