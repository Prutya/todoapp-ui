import { combineReducers } from 'redux'
import groups from './groups'
import todos from './todos'

const todoApp = combineReducers({
  groups,
  todos
})

export default todoApp
