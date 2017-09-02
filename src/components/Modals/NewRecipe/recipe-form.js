import React from 'react'
import shortid from 'shortid'
import { connect } from 'react-redux'

import dateFormat from '../../../auxiliary/dateFormat'

import { addRecipe } from '../../../actions/recipe.actions'
import { hideModals } from '../../../actions/modal.actions'

import { TextInput, TextArea } from '../../Commons/Input'
import Button from '../../Commons/Button'


class RecipeForm extends React.Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)

		this.state = { recipeName: '', recipeIngredients: '', author: '' }
	}

	componentWillUpdate(nextProps) {
		const { props, form }  = this
		const { currentModal } = props

		if(!currentModal){
			this.setState({ recipeName: '', recipeIngredients: '', author: '' })
		}
	}

	handleSubmit(e) {
		e.preventDefault()

		const { addRecipe, hideModals } = this.props
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
			id: shortid.generate(),
			recipeName,
			author,
			ingredients,
			dateCreated: dateFormat(dateNow)
		}

		addRecipe(recipe)
		alert("Recipe successfully added!")
		hideModals()
		this.setState({ recipeName: '', recipeIngredients: '', author: '' })
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
			<form className="recipe-form" onSubmit={handleSubmit}>
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
				<Button text="Add Recipe"/>
			</form>
		)
	}
}

const mapStateToProps = ({ modal }) => ({
	currentModal: modal.currentModal
})

const mapDispatchToProps = (dispatch) => ({
	addRecipe: (recipe) => dispatch(addRecipe(recipe)),
	hideModals: () => dispatch(hideModals())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm)
