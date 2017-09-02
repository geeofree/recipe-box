import {
	ADD_RECIPE,
	FILTER_RECIPE,
	REMOVE_RECIPE,
	CHANGE_RECIPE,
	SHOW_RECIPE,
	HIDE_RECIPE,
	TOGGLE_RECIPE_CHANGE
} from '../types/recipes.types'

export const addRecipe = (recipe) => ({
	type: ADD_RECIPE,
	payload: { recipe }
})

export const showRecipe = (recipeId) => ({
	type: SHOW_RECIPE,
	payload: { recipeId }
})

export const toggleEditting = (toggleState) => ({
	type: TOGGLE_RECIPE_CHANGE,
	payload: { toggleState }
})
