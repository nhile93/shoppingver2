import {combineReducers} from 'redux'
import categoriesStore from './categoriesReducer'
import blogsStore from './blogsReducer'

const shopReducer = combineReducers({categoriesStore,blogsStore})

export default shopReducer