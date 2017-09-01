import { SHOW_MODAL, HIDE_MODAL } from '../types/modal.types'

export const showModal = (modalType) => ({
	type: SHOW_MODAL,
	payload: { modalType }
})

export const hideModals = () => ({
	type: HIDE_MODAL
})
