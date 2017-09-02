import update from '../auxiliary/update'

import {
	ADD_RECIPE,
	FILTER_RECIPE,
	REMOVE_RECIPE,
	CHANGE_RECIPE,
	CHANGE_RECIPE_CONFIRM,
	CHANGE_RECIPE_CANCEL,
	SHOW_RECIPE,
	HIDE_RECIPE
} from '../types/recipes.types'

const initialState = {
	currentRecipe: null,
	isEditting: false,
	recipes: []
}

export default (state=initialState, { type, payload }) => {
	switch(type) {

		case ADD_RECIPE:
			return update(state, {
				recipes: [...state.recipes, payload.recipe]
			})

		case REMOVE_RECIPE:
			return update(state, {
				recipes: state.recipes.filter(recipe => recipe.id !== payload.recipeId)
			})

		case CHANGE_RECIPE:
			return update(state, {
				isEditting: true
			})

		case CHANGE_RECIPE_CONFIRM:
			return update(state, {
				recipes: state.recipes.map(recipe => (
					recipe.id === payload.recipeId ? payload.recipe : recipe
				))
			})

		case CHANGE_RECIPE_CANCEL:
			return update(state, {
				isEditting: false
			})

		case FILTER_RECIPE:
			return update(state, {
				recipes: state.recipes.filter(recipe => (
					payload.match.test(recipe.name) && recipe
				))
			})

		case SHOW_RECIPE:
			return update(state, {
				currentRecipe: state.recipes.filter(recipe => recipe.id === payload.recipeId)[0]
			})

		case HIDE_RECIPE:
			return update(state, {
				currentRecipe: null
			})

		default:
			return state
	}
}
