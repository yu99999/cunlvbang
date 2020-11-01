import {CHANGE_TITLE, CHANGE_LEFT} from "./constants"

export function changeTitle(data){
  return{
    type: CHANGE_TITLE,
    data
  }
}
export function changeLeft(data){
  return{
    type: CHANGE_LEFT,
    data
  }
}