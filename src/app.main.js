import React from 'react'
import './app.style.sass'

import AppState     from './app.state'
import { Provider } from 'react-redux'

import RecipeBox from './components/RecipeBox'
import Modals    from './components/Modals'

export default () => (
  <Provider store={AppState}>
    <div>
      <RecipeBox />
      <Modals />
    </div>
  </Provider>
)
