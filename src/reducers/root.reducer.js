import { combineReducers } from 'redux'

import ModalReducer from './modal.reducer'

export default combineReducers({
  modal: ModalReducer
})
