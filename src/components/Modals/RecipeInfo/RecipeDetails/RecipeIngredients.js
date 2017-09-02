import React from 'react'

const RecipeIngredients = ({ ingredients }) => (
	<div className="recipe-ingredients">
		<h3>Ingredients</h3>
		<ul>
			{ingredients.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	</div>
)

export default RecipeIngredients
