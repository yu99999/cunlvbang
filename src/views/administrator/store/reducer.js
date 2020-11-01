import * as actionTypes from "./constants"
import produce from "immer"

const defaultState = {
  list: []
}

export default (state = defaultState, action) => {
  return produce(state, (draft => {
    switch(action.type){
      case actionTypes.changeHomeList:
        draft.list = action.data; break;
      default: ;
    }
  }))
}