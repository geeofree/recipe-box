import { toggleEditting, hideRecipe } from '../actions/recipe.actions'
import { hideModals } from '../actions/modal.actions'

export default () => (dispatch) => {
	dispatch(toggleEditting(false))
	dispatch(hideRecipe())
	dispatch(hideModals())
}
