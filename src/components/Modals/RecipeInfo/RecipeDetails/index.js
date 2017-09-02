import React from 'react'
import './recipe-details.style.sass'

const RecipeDetails = ({ recipeName, author, dateCreated, ingredients }) => (
	<div className="recipe-details">
		<div className="detail-block">
			<h2 className="recipe-name">{recipeName}</h2>
			<div className="meta-data-container">
				<span>{author}</span>
				<span>{dateCreated}</span>
			</div>
		</div>
		<div className="recipe-ingredients">
			<h3>Ingredients</h3>
			<ul>
				{ingredients.map((item, index) => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	</div>
)

export default RecipeDetails
