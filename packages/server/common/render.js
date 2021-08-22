import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, Switch } from "react-router-dom";
import { routes } from "../../router";
import { Provider } from "react-redux";
import React from "react";

export const render = ( path, store ) => {
  const content = renderToString((
    <Provider store={ store }>
      <StaticRouter location={ path }>
        <Switch>
          { routes.map(route => (
            <Route key={route.key} path={ route.path } exact={ route.exact } component={ route.component }/>
          )) }
        </Switch>
      </StaticRouter>
    </Provider>
  ))

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Page</title>
    </head>
    <body>
        <div id="root">${content}</div>
        <script>
            window.__state = ${JSON.stringify(store.getState())}
        </script>
        <script src="/index.js"></script>
    </body>
    </html>
  `
}
