import React from 'react'
import './recipe.style.sass'

const Recipe = ({ name, author, dateCreated }) => (
	<div className="recipe-item">
		<h2 className="recipe-name">{name}</h2>
		<span className="recipe-author">{author}</span>
		<span className="recipe-date-created">{dateCreated}</span>
	</div>
)

export default Recipe
