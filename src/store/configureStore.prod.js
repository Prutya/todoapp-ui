import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { todoApp } from '../reducers'

const configureStore = () => {
  const middleware = [thunk]

  return createStore(
    todoApp,
    applyMiddleware(...middleware)
  )
}

export default configureStore
