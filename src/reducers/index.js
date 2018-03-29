import { combineReducers } from 'redux'
import groups from './groups'
import todos from './todos'

export const todoApp = combineReducers({
  groups,
  todos
})
