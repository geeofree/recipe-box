import React from 'react'
import './recipe-info.style.sass'

import Modal             from '../Base'
import InfoView          from './InfoView'

import { RECIPE_INFO } from '../../../types/modal.types'
import { connect }     from 'react-redux'

const RecipeInfoModal = ({ currentRecipe }) => (
	<Modal type={RECIPE_INFO} title="Recipe Information">
		{ currentRecipe && <InfoView {...currentRecipe} /> }
	</Modal>
)

const mapStateToProps = ({ recipe }) => ({
	currentRecipe: recipe.currentRecipe
})

export default connect(mapStateToProps)(RecipeInfoModal)
