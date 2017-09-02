import React from 'react'
import './edit-recipe.style.sass'

import { TextInput, TextArea } from '../../../Commons/Input'
import ActionButtons from './actionButtons'

class RecipeEdit extends React.Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

		this.state = { recipeName: '', recipeIngredients: '', author: '' }
	}

	handleSubmit(e) {
		e.preventDefault()

		const { changeRecipe } = this.props
		const isAlphanumeric = /^[a-z0-9]+$/i
		let { recipeName, recipeIngredients, author } = this.state

		if(!author) {
			author = 'Anonymous'
		}

		if(!recipeName || recipeName.length < 3) {
			alert("Recipe Name must not be empty or less than 3 characters")
			return
		}

		if(!isAlphanumeric.test(recipeName)) {
			alert("Recipe Name must be alphanumeric characters only.")
			return
		}

		if(author.length > 0 && author.length < 3) {
			alert("Author must not be less than 3 characters")
			return
		}

		if(!isAlphanumeric.test(author)) {
			alert("Author must be alphanumeric characters only")
			return
		}

		if(!recipeIngredients) {
			alert("No ingredients given.")
			return
		}

		const ingredients = recipeIngredients.split(',')
		const dateNow = new Date(Date.now())

		const recipe = {
			recipeName,
			author,
			ingredients,
			dateCreated: dateFormat(dateNow)
		}

		changeRecipe(recipe)
		alert("Recipe successfully changed!")
	}

	handleChange({ target }) {
		this.setState({ [target.name]: target.value })
	}

	render() {
		const { handleSubmit, handleChange, state } = this

		const inputNames = {}
		Object.keys(state).forEach(key => inputNames[key] = key)

		const { recipeName, recipeIngredients, author } = inputNames

		return (
			<form className="edit-recipe-form" onSubmit={handleSubmit}>
				<TextInput
					label="Recipe Name"
					identifier={recipeName}
					onChange={handleChange}
					placeholder="e.g Cake, Cookies, Muffins"/>
				<TextInput
					label="Author"
					identifier={author}
					onChange={handleChange}
					placeholder="default: Anonymous"/>
				<TextArea
					label="Ingredients"
					identifier={recipeIngredients}
					onChange={handleChange}
					placeholder="Enter ingredients separated by commas i.e flour, water, sugar"/>
				<ActionButtons />
			</form>
		)
	}
}

export default RecipeEdit
