import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { todoApp } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const middleware = [thunk]

  return createStore(
    todoApp,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  )
}

export default configureStore
