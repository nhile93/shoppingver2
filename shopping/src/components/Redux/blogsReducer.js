import {GET_ALL_BLOGS, ADD_BLOG, DELETE_BLOG, UPDATE_BLOG} from './actionType'

const defaultState = {
  blogs:[]
}

export default function blogsStore(state = defaultState, action){

  switch(action.type){
    case GET_ALL_BLOGS:
      console.log("GET_ALL_BLOGS =>", action.blogs)
      return {...state, blogs: action.blogs}

    case ADD_BLOG:
      console.log("add blog =>", action.blogs)
      return{...state, blogs: action.blogs}

    case DELETE_BLOG:
      console.log("delete blog =>", action.blogs)
      return{...state, blogs: action.blogs}

    case UPDATE_BLOG:
      console.log("update blog =>", action.blogs)
      return{...state, blogs: action.blogs}
      
    default: return state
  }
}