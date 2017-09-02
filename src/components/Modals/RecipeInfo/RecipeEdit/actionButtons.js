import React from 'react'

import { connect } from 'react-redux'
import { toggleEditting } from '../../../../actions/recipe.actions'

import Button from '../../../Commons/Button'

const ActionButtons = ({ recipeId, confirmChange, toggleEditting }) => (
	<div className="action-buttons-container">
		<Button text="Confirm Edit"/>
		<Button text="Cancel" onClick={() => toggleEditting(false)}/>
	</div>
)

const mapDispatchToProps = (dispatch) => ({
	confirmChange: (recipeId, recipe) => dispatch(confirmChange(recipeId, recipe)),
	toggleEditting: () => dispatch(toggleEditting())
})

export default connect(null, mapDispatchToProps)(ActionButtons)
