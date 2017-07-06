import { createStore, combineReducers, applyMiddleware } from 'redux'

import HomeReducer   from './reducers/home.reducer'
import RecipeReducer from './reducers/recipe.reducer'


const logger = (store) => (state) => (action) => {
  console.log('Dispatching:', action)
  next(action)
}

const reducers   =  combineReducers({ home: HomeReducer, recipe: RecipeReducer })
const middleware =  applyMiddleware(logger)
const AppState   = createStore(reducers, {})
export default AppState
