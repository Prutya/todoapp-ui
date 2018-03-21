import { combineReducers, createStore } from 'redux'

import { todos } from './reducers'

const configureStore = () => {
  const todoApp = combineReducers({
    todos
  })

  return createStore(todoApp)
}

export default configureStore
