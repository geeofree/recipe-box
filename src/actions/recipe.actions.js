import {
	ADD_RECIPE,
	FILTER_RECIPE,
	REMOVE_RECIPE,
	CHANGE_RECIPE,
	SHOW_RECIPE,
	HIDE_RECIPE
} from '../types/recipes.types'

export const addRecipe = (recipe) => ({
	type: ADD_RECIPE,
	payload: { recipe }
})
