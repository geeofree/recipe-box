import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { Provider } from 'react-redux'


export const Routes = ({ children, store }) => (
  <Provider store={ store }>
    <Router>
      <div>
        { children }
      </div>
    </Router>
  </Provider>
)

export const NavRoute = ({ children }) => (
  <div className="nav-route">
    { children }
  </div>
)

export const RouteLink = ({ exact, text, to }) => (
  <NavLink exact={exact} to={to} activeClassName="link--active" className="link">
    {text}
  </NavLink>
)
