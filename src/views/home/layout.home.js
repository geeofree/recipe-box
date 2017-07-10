import React from 'react'
import { connect } from 'react-redux'
import './home.style.scss'

import RecipeList     from './recipe-list.home'
import SelectedRecipe from './recipe-selected.home'


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
      { (Object.keys(recipe).length !== 0) && <SelectedRecipe recipe={recipe} /> }
    </div>
  )
)

const mapStoreToProps = (store) => ({
  recipes: store.recipes.recipes,
  recipe: store.recipes.selected
})

const Home = connect(mapStoreToProps)(HomeLayout)
export default Home
