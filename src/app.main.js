import React    from 'react'
import ReactDOM from 'react-dom'
import './app.style.scss'

import AppState from './app.state'

import { Switch, Route } from 'react-router-dom'
import { Routes, NavRoute, RouteLink } from './app.route'

import Home     from './views/home/layout.home'
import Recipe   from './views/recipe/layout.recipe'


const App = () => (
  <Routes store={AppState}>
    <NavRoute>
      <RouteLink to="/" text="Home" />
      <RouteLink to="/recipe" text="New Recipe" />
    </NavRoute>

    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/recipe" component={Recipe} />
    </Switch>
  </Routes>
)


const root = document.getElementById('root')
ReactDOM.render(<App />, root)
