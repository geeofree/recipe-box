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
      <RouteLink to="/recipebox" text="Home" exact />
      <RouteLink to="/recipebox/add" text="Add Recipe" />
    </NavRoute>

    <Switch>
      <Route path="/recipebox" component={Home} exact />
      <Route path="/recipebox/add" component={Recipe} />
    </Switch>
  </Routes>
)


const root = document.getElementById('root')
ReactDOM.render(<App />, root)
