import React from 'react'

import { TextInput, TextArea } from '../../Commons/Input'
import Button from '../../Commons/Button'

class RecipeForm extends React.Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

		this.state = { recipeName: '', ingredients: '', author: '' }
	}

	handleSubmit(e) {
		e.preventDefault()
		const { recipeName, ingredients, author } = this.state
		console.log(recipeName, ingredients, author)
	}

	handleChange({ target }) {
		this.setState({ [target.name]: target.value })
	}

	render() {
		const { handleSubmit, handleChange, state } = this

		const inputNames = {}
		Object.keys(state).forEach(key => inputNames[key] = key)

		const { recipeName, ingredients, author } = inputNames

		return (
			<form className="recipe-form" onSubmit={handleSubmit}>
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
					identifier={ingredients}
					onChange={handleChange}
					placeholder="Enter ingredients separated by commas i.e flour, water, sugar"/>
				<Button text="Add Recipe"/>
			</form>
		)
	}
}

export default RecipeForm
