import { combineReducers, createStore } from 'redux'

import { todos, visibilityFilter } from './reducers'

const configureStore = () => {
  const todoApp = combineReducers({
    todos,
    visibilityFilter
  })

  return createStore(todoApp)
}

export default configureStore
