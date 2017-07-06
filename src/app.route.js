import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'


const Routes = ({ children, store }) => (
  <Provider store={ store }>
    <Router>
      <div>
        { children }
      </div>
    </Router>
  </Provider>
)

export default Routes
