import React    from 'react'
import ReactDOM from 'react-dom'
import './app.style.scss'

import { Switch, Link, Route } from 'react-router-dom'
import { Routes, NavRoute } from './app.route'



const App = () => (
  <Routes>
    <NavRoute>
      <Link to="/">Recipes</Link>
      <Link to="/new-recipe">New Recipe</Link>
    </NavRoute>

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/add-recipe" component={AddRecipe} />
      <Route component={Page404}/>
    </Switch>
  </Routes>
)


const root = document.getElementById('root')
ReactDOM.render(<App />, root)
