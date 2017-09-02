import React from 'react'

import { connect } from 'react-redux'
import { toggleEditting } from '../../../../actions/recipe.actions'

import Button from '../../../Commons/Button'

const ActionButtons = ({ recipeId, toggleEditting, deleteRecipe }) => (
	<div className="action-buttons-container">
		<Button text="Edit Recipe" onClick={() => toggleEditting(true)}/>
		<Button text="Delete Recipe"/>
	</div>
)

const mapDispatchToProps = (dispatch) => ({
	toggleEditting: (toggleState) => dispatch(toggleEditting(toggleState)),
	deleteRecipe: (recipeId) => dispatch(deleteRecipe(recipeId))
})

export default connect(null, mapDispatchToProps)(ActionButtons)
