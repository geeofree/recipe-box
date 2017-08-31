import { SHOW_MODAL, HIDE_MODAL } from '../types/modal.types'

export const showRecipeInfo = () => ({
	type: SHOW_MODAL,
	payload: { modalType: 'recipe-info' }
})

export const hideModals = () => ({
	type: HIDE_MODAL
})
