import React from 'react'
import './recipe.style.sass'

const Recipe = ({ name, author }) => (
	<div className="recipe-item">
		<h2 className="recipe-name">{name}</h2>
		<span className="recipe-author">by {author}</span>
	</div>
)

export default Recipe
