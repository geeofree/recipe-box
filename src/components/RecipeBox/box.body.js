import React from 'react'
import { connect } from 'react-redux'

import Recipe from '../Recipe'

const BoxBody = ({ recipes }) => (
	<div className="box-body">
		{recipes.length && recipes.map((recipe, index) => (
			<Recipe
				key={index}
				id={index}
				name={recipe.name}
				author={recipe.author} />
		)) || (
			<div className="empty-box-body">
				<h1>No recipes as of yet. Try adding one!</h1>
			</div>
		)}
	</div>
)

const mapStateToProps = ({ recipes }) => ({
	recipes: recipes.recipes
})

export default connect(mapStateToProps)(BoxBody)
