import { createStore, applyMiddleware } from 'redux'
import ReduxThunk  from 'redux-thunk'
import ReduxLogger from 'redux-logger'
import RootReducer from './reducers/root.reducer'

const Middlewares = applyMiddleware(ReduxThunk, ReduxLogger)
export default createStore(RootReducer, Middlewares)
