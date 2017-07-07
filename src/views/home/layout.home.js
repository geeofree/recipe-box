import React from 'react'
import { connect } from 'react-redux'
import './home.style.scss'

import Recipe from './recipe.home'
import RecipeList from './recipe-list.home'


const HomeLayout = ({ recipe, recipes }) => (
  (recipes.length === 0) ?
  (
    <div className="home">
      <h1>No recipes made as of yet.</h1>
    </div>

  ) :
  (
    <div className="home">
      <RecipeList recipes={recipes} />
      { recipe.name && <Recipe recipe={recipe} /> }
    </div>
  )
)

const mapStoreToProps = (store) => ({
  recipes: store.recipes.recipes,
  recipe: store.recipes.selected
})

const Home = connect(mapStoreToProps)(HomeLayout)
export default Home
