import React from 'react'
import Modal from '../modal.container'
import './recipe-info.style.sass'

import { RECIPE_INFO } from '../../../types/modal.types'

export default () => (
	<Modal modalType={RECIPE_INFO} headerTitle="Recipe Information">
		<h1>Hello World!</h1>
	</Modal>
)
