import { createStore } from 'redux'
import todoApp from './reducers'

const configureStore = () => {
  return createStore(todoApp)
}

export default configureStore
