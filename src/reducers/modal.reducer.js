import update from '../auxiliary/update.js'

import { SHOW_MODAL, HIDE_MODAL } from '../types/modal.types'

const initialState = {
  currentModal: null
}

export default (state=initialState, action) => {
  switch(action.type) {

    case SHOW_MODAL:
      return update(state, {
        currentModal: action.payload.modalType
      })

    case HIDE_MODAL:
      return initialState

    default:
      return state
  }
}
