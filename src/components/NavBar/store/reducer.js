import * as actionTypes from "./constants"

const defaultState = {
  title: "村律帮",
  left: false
}

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_TITLE:
      return {...state, title: action.data}; 
    case actionTypes.CHANGE_LEFT:
      return {...state, left: action.data}; 
    default:
      return state;
  }
}