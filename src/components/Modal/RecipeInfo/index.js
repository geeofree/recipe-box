import React from 'react'
import './recipe-info.style.sass'

import Modal from '../Base'
import { RECIPE_INFO } from '../../../types/modal.types'

export default () => (
	<Modal type={RECIPE_INFO} title="Recipe Information">
		<h1>Hello World!</h1>
	</Modal>
)
