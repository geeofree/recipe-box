import React from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../../actions/recipe.action'

const HomeLayout = ({ recipes }) => {
  if(recipes.length) {
    return (
      <div className="home">
        <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <p key={index} onClick={e => getRecipe(index)}>{recipe}</p>
        ))}
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="home">
        <h1>No recipes made as of yet.</h1>
      </div>
    )
  }
}

const mapStoreToProps = (store) => ({
  recipes: store.recipes
})

const mapDispatchToProps = (dispatch) => ({
  getRecipe: (id) => dispatch(getRecipe(id))
})


const Home = connect(mapStoreToProps, mapDispatchToProps)(HomeLayout)
export default Home
