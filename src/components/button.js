import React from 'react'

import { connect } from 'react-redux'
import { showRecipeInfo } from '../actions/modal.actions'

const RecipeInfoBtn = ({ showRecipeInfo }) => (
	<button onClick={() => showRecipeInfo()}>Open Modal</button>
)

const mapDispatchToProps = (dispatch) => ({
	showRecipeInfo: () => dispatch(showRecipeInfo())
})

export default connect(null, mapDispatchToProps)(RecipeInfoBtn)
