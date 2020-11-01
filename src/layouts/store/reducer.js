import * as actionsType from "./constants"
import produce from "immer"

const defaultState = {
  loading: false
}

export default (state = defaultState, action) => {
  return produce(state, (draft) => {
    switch (action.type){
      case actionsType.CHANGE_LOADING: 
        draft.loading = action.data; break;
      default: ;
    }
  })
}