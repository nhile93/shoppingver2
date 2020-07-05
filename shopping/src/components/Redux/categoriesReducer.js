import {GET_ALL_CATEGORIES} from './actionType'

const defaultState = {
  categories:[]
}

export default function categoriesStore(state = defaultState, action){

  switch(action.type){
    case GET_ALL_CATEGORIES:
      console.log("GET_ALL_CATEGORIES =>", action.categories)
      return {...state, categories: action.categories}
    default: return state
  }
}