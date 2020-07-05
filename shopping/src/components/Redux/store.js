import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import shopReducer from './rootReducers'

const middleWare = [thunk]
const store = createStore(shopReducer, applyMiddleware(...middleWare))

// console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))

export default store