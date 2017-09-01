import React from 'react'

import { connect } from 'react-redux'
import { showModal } from '../actions/modal.actions'
import { RECIPE_INFO } from '../types/modal.types'

const RecipeInfoBtn = ({ showRecipeInfo }) => (
	<button onClick={() => showRecipeInfo()}>Open Modal</button>
)

const mapDispatchToProps = (dispatch) => ({
	showRecipeInfo: () => dispatch(showModal(RECIPE_INFO))
})

export default connect(null, mapDispatchToProps)(RecipeInfoBtn)
