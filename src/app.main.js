import React from 'react'
import './app.style.sass'

import AppState     from './app.state'
import { Provider } from 'react-redux'

import RecipeInfoModal from './components/Modal/RecipeInfo'
import ModalButton     from './components/button'

export default () => (
  <Provider store={AppState}>
    <div>
      <RecipeInfoModal />
      <ModalButton />
    </div>
  </Provider>
)
