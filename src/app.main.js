import React from 'react'
import './app.style.sass'

import AppState     from './app.state'
import { Provider } from 'react-redux'

export default () => (
  <Provider store={AppState}>
    <h1>Hello World!</h1>
  </Provider>
)
