import React from 'react'
import ReactDOM from 'react-dom'
import { routes } from '../router';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createClientStore } from '../store/index'

const store = createClientStore();

console.log('module: ', module)

const Runtime = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          { routes.map(route => (
            <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />
          )) }
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<Runtime />, document.getElementById('root'));
