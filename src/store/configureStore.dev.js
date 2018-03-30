import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import todoApp from '../reducers'

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
