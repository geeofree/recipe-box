import { combineReducers } from 'redux'

import ModalReducer   from './modal.reducer'
import RecipesReducer from './recipes.reducer'

export default combineReducers({
  modal:   ModalReducer,
  recipes: RecipesReducer
})
