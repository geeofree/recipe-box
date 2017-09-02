import React from 'react'
import './edit-recipe.style.sass'

import { connect } from 'react-redux'
import confirmChange from '../../../../thunks/confirmChange'

import { TextInput, TextArea } from '../../../Commons/Input'
import ActionButtons from './actionButtons'

class RecipeEdit extends React.Component {
	constructor(props) {
		super(props)

		const { recipeName, ingredients, author } = this.props

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

		this.state = { recipeName, author, recipeIngredients: ingredients.join(', ') }
	}

	handleSubmit(e) {
		e.preventDefault()

		const { props, state } = this
		const { confirmChange } = props
		const isAlphanumeric   = /^[a-z0-9]+$/i
		let { recipeName, recipeIngredients, author } = state

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

		const sameRecipeName  = props.recipeName === recipeName
		const sameAuthor      = props.author === author
		const sameIngredients = props.ingredients.join(', ') === recipeIngredients

		if(sameRecipeName && sameAuthor && sameIngredients) {
			alert("Cannot submit. No changes made.")
			return
		}

		const recipe = {
			id: props.id,
			dateCreated: props.dateCreated,
			recipeName,
			author,
			ingredients
		}
		alert("Recipe successfully changed!")
		confirmChange(props.id, recipe)
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
					value={state.recipeName}
					label="Recipe Name"
					identifier={recipeName}
					onChange={handleChange}
					placeholder="e.g Cake, Cookies, Muffins"/>
				<TextInput
					value={state.author}
					label="Author"
					identifier={author}
					onChange={handleChange}
					placeholder="default: Anonymous"/>
				<TextArea
					value={state.recipeIngredients}
					label="Ingredients"
					identifier={recipeIngredients}
					onChange={handleChange}
					placeholder="Enter ingredients separated by commas i.e flour, water, sugar"/>
				<ActionButtons />
			</form>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	confirmChange: (recipeId, newRecipeData) => dispatch(confirmChange(recipeId, newRecipeData))
})

export default connect(null, mapDispatchToProps)(RecipeEdit)
