import { createStore, applyMiddleware } from 'redux'
import ReduxLogger from 'redux-logger'
import RootReducer from './reducers/root.reducer'

const Middlewares = applyMiddleware(ReduxLogger)
export default createStore(RootReducer, Middlewares)
