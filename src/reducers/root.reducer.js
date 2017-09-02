import { combineReducers } from 'redux'

import ModalReducer   from './modal.reducer'
import RecipeReducer from './recipe.reducer'

export default combineReducers({
  modal:   ModalReducer,
  recipe: RecipeReducer
})
