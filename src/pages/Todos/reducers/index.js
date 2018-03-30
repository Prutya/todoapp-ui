import { combineReducers } from 'redux'
import groupsReducer from './groups'
import todosReducer from './todos'

const todos = combineReducers({
  groups: groupsReducer,
  todos: todosReducer
})

export default todos
