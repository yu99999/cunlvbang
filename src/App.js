import React from 'react';
import {GlobalStyle} from "./style"
import "@/assets/iconfont/set.css"
import {HashRouter} from "react-router-dom"
import renderRoutes from "./route/config"
import routes from "./route"
import store from "./store/index"
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
