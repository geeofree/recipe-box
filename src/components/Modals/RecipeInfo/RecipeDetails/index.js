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
			{ingredients.map((item, index) => (
					<div className="ingredient" key={index}>
						<div className="recipe-number">{index}</div>
						<span>{item}</span>
					</div>
			))}
		</div>
	</div>
)

export default RecipeDetails
