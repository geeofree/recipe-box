import React from 'react'
import { connect } from 'react-redux'

import Recipe from '../Recipe'

const BoxBody = ({ recipes }) => (
	<div className="box-body">
		{recipes.length && recipes.map((recipe, index) => (
			<Recipe
				key={index}
				id={recipe.id}
				name={recipe.recipeName}
				author={recipe.author}
				dateCreated={recipe.dateCreated}/>
		)) || (
			<div className="empty-box-body">
				<h1>No recipes as of yet. Try adding one!</h1>
			</div>
		)}
	</div>
)

const mapStateToProps = ({ recipe }) => ({
	recipes: recipe.recipes
})

export default connect(mapStateToProps)(BoxBody)
