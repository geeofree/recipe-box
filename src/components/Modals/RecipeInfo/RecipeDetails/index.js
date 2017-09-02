import React from 'react'
import './recipe-details.style.sass'

import DetailBlock       from './DetailBlock'
import RecipeIngredients from './RecipeIngredients'
import ActionButtons     from './actionButtons'

const RecipeDetails = ({ id, recipeName, author, dateCreated, ingredients }) => (
	<div className="recipe-details">
		<DetailBlock
			author={author}
			recipeName={recipeName}
			dateCreated={dateCreated} />
		<RecipeIngredients ingredients={ingredients} />
		<ActionButtons recipeId={id} />
	</div>
)

export default RecipeDetails
