import {combineReducers} from 'redux'
import categoriesStore from './categoriesReducer'
import blogsStore from './blogsReducer'
import productStore from './productReducer'
import initStore from './authenticationReducer'

const shopReducer = combineReducers({categoriesStore, blogsStore, productStore, initStore})

export default shopReducer