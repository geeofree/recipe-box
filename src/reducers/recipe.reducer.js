import update from '../auxiliary/update'

import {
	ADD_RECIPE,
	FILTER_RECIPE,
	REMOVE_RECIPE,
	CHANGE_RECIPE,
	SHOW_RECIPE,
	HIDE_RECIPE
} from '../types/recipes.types'

const initialState = {
	currentRecipe: null,
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
				recipes: state.recipes.map(recipe => (
					recipe.id === payload.recipeId ? payload.recipe : recipe
				))
			})

		case FILTER_RECIPE:
			return update(state, {
				recipes: state.recipes.filter(recipe => (
					payload.match.test(recipe.name) && recipe
				))
			})

		case SHOW_RECIPE:
			return update(state, {
				currentRecipe: state.recipes.filter(recipe => recipe.id === payload.recipeId)
			})

		case HIDE_RECIPE:
			return update(state, {
				currentRecipe: null
			})

		default:
			return state
	}
}
