import {combineReducers} from 'redux'
import categoriesStore from './categoriesReducer'
import blogsStore from './blogsReducer'
import productStore from './productReducer'

const shopReducer = combineReducers({categoriesStore,blogsStore,productStore})

export default shopReducer