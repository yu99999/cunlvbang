import * as actionTypes from "./constants"

export const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
})