import {combineReducers} from "redux"
import navBarReducer from "../components/NavBar/store/reducer"
import homeReducer from "../layouts/store/reducer"

import serverHomeReducer from "../views/server/Home/store/reducer"

export default combineReducers({
  navBar: navBarReducer,
  home: homeReducer,
  serverHome: serverHomeReducer
})