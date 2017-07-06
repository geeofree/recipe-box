import React    from 'react'
import ReactDOM from 'react-dom'
import './app.style.scss'

import AppState from './app.state'

import { Switch, Link, Route } from 'react-router-dom'
import { Routes, NavRoute } from './app.route'

import Home     from './views/home/layout.home'
import Recipe   from './views/recipe/layout.recipe'


const App = () => (
  <Routes store={AppState}>
    <NavRoute>
      <Link to="/">Home</Link>
      <Link to="/recipe">New Recipe</Link>
    </NavRoute>

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/recipe" component={Recipe} />
    </Switch>
  </Routes>
)


const root = document.getElementById('root')
ReactDOM.render(<App />, root)
