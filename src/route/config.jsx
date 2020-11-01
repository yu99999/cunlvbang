import React from "react"
import {Route, Switch, Redirect} from "react-router-dom"

const renderRoutes = (routes) => {
  return routes ? (
    <Switch>
      {
        routes.map((route, index) => (
          <Route
            key={route.key || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => {
              if(['/server', '/teacher'].includes(route.path) && !window.localStorage.getItem('token')){
                return <Redirect to={`/identity/${route.path.slice(1)}`}></Redirect>
              }
              return <route.component {...props} route={route} />
            }}
          >

          </Route>
        ))
      }
    </Switch>
  ) : null;
}

export default renderRoutes