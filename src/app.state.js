import { createStore, combineReducers, applyMiddleware } from 'redux'
import RecipeReducer from './reducers/home.reducer'

const logger = (store) => (state) => (action) => {
  console.log('Dispatching:', action)
  next(action)
}

const reducers   =  combineReducers({ recipe: RecipeReducer })
const middleware =  applyMiddleware(logger)
const AppState   = createStore(reducers, {})
export default AppState
