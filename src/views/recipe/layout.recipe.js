import React from 'react'
import './recipe.style.scss'

import { connect } from 'react-redux'
import { addRecipe } from '../../actions/recipe.action'


var id = 0

class RecipeLayout extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      ingredients: ''
    }
  }

  handleChange(type) {
    switch(type) {
      case 'input':
        return ({ target }) => this.setState({ name: target.value })
      case 'textarea':
        return ({ target }) => this.setState({ ingredients: target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const { state, props } = this
    const { name, ingredients } = state
    const { addRecipe } = props


    addRecipe({ id, name, ingredients: ingredients.split(/\s*,\s*/) })
    id = id + 1
  }

  render() {
    const { props, state, handleSubmit, handleChange } = this

    return (
      <div className="recipe">
        <form onSubmit={handleSubmit}>
          <input placeholder="Recipe Name" onChange={handleChange('input')}/>
          <textarea placeholder="Type in ingredients separated, by, a, comma." onChange={handleChange('textarea')}/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (data) => dispatch(addRecipe(data))
})

const Recipe = connect(null, mapDispatchToProps)(RecipeLayout)
export default Recipe
