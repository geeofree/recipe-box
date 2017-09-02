import React from 'react'
import './recipe.style.sass'

import { connect }    from 'react-redux'
import showRecipeInfo from '../../thunks/showRecipeInfo'

const Recipe = ({ id, name, author, dateCreated, showRecipeInfo }) => (
	<div className="recipe-item" onClick={() => showRecipeInfo(id)}>
		<h2 className="recipe-name">{name}</h2>
		<span className="recipe-author">{author}</span>
		<span className="recipe-date-created">{dateCreated}</span>
	</div>
)

const mapDispatchToProps = (dispatch) => ({
	showRecipeInfo: (recipeId) => dispatch(showRecipeInfo(recipeId))
})

export default connect(null, mapDispatchToProps)(Recipe)
