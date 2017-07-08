import React            from 'react'
import { connect }      from 'react-redux'
import { removeRecipe } from '../../actions/recipe.action'


const Ingredients = ({ items }) => {
  const ingredients = items.filter(val => val).map((ingredient, index) => <li key={index}>{ingredient}</li>)
  return ingredients.length ? <ul>{ingredients}</ul> : <p>This recipe has no ingredients.</p>
}

const SelectedRecipeLayout = ({ recipe }) => (
  <div className="selected-recipe">
    <div className="recipe-container">
      <div className="recipe-img" style={{ backgroundImage: `url(${recipe.imgURL})` }} />
      <div className="recipe-info">
        <h2>{recipe.name}</h2>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <Ingredients items={recipe.ingredients} />
        </div>
      </div>
    </div>

    <div className="selected-recipe-buttons">
      <button className="edit-recipe">Edit</button>
      <button className="delete-recipe">Delete</button>
    </div>
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  deleteRecipe: (id) => dispatch(removeRecipe(id))
})

const SelectedRecipe = connect(null, mapDispatchToProps)(SelectedRecipeLayout)
export default SelectedRecipe
