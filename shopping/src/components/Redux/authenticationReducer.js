import {LOGIN} from './actionType'

const defaultState = {
  user: {},
  status: false
}

export default function initStore(state = defaultState, action){

  switch(action.type){

    case LOGIN:
      console.log("login status=> ",action.status, action.user)
      if(action.user === ""){
        return {...state, user: action.user, status: false}
      }
      return {...state, user: action.user, status: true}

    default: return state
  }
}