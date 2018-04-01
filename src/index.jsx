import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import configureStore from './store'
import './styles/global'
import Todos from './pages/Todos'

render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Redirect exact from='/' to='/todo-groups' />
        <Route path='/todo-groups/:groupId?' component={Todos} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
