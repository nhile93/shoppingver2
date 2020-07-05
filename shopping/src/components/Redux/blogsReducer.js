import {GET_ALL_BLOGS} from './actionType'

const defaultState = {
  blogs:[]
}

export default function blogsStore(state = defaultState, action){

  switch(action.type){
    case GET_ALL_BLOGS:
      console.log("GET_ALL_BLOGS =>", action.blogs)
      return {...state, blogs: action.blogs}
    default: return state
  }
}