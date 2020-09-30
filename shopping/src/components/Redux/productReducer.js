import {GET_ALL_PRODUCT} from './actionType'

const defaultState = {
  product: []
}

export default function productStore(state = defaultState, action){
  switch(action.type){
    case GET_ALL_PRODUCT:
      return{...state, product: action.product}
    default: return state
  }
}