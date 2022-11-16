import { countReducer } from './reducer'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

export const store = createStore(countReducer, applyMiddleware(thunk))
