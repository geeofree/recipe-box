import React from 'react'
import './new-recipe.style.sass'

import Modal from '../Base'
import { NEW_RECIPE } from '../../../types/modal.types'

import RecipeForm from './recipe-form'

const NewRecipeFormModal = () => (
	<Modal type={NEW_RECIPE} title="New Recipe">
		<RecipeForm />
	</Modal>
)

export default NewRecipeFormModal
