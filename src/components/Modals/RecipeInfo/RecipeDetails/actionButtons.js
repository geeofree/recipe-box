import React from 'react'

import { connect } from 'react-redux'
import { toggleEditting } from '../../../../actions/recipe.actions'
import deleteRecipe from '../../../../thunks/deleteRecipe'

import Button from '../../../Commons/Button'

const ActionButtons = ({ recipeId, toggleEditting, deleteRecipe }) => (
	<div className="action-buttons-container">
		<Button
			text="Edit Recipe"
			onClick={() => toggleEditting(true)} />
		<Button
			text="Delete Recipe"
			onClick={() => {
				const confirmDelete = confirm("Continue deleting this recipe?")
				if(confirmDelete) deleteRecipe(recipeId)
			}} />
	</div>
)

const mapDispatchToProps = (dispatch) => ({
	toggleEditting: (toggleState) => dispatch(toggleEditting(toggleState)),
	deleteRecipe: (recipeId) => dispatch(deleteRecipe(recipeId))
})

export default connect(null, mapDispatchToProps)(ActionButtons)
