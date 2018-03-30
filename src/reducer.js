import { combineReducers } from 'redux'
import todosReducer from './pages/Todos/reducers'

const root = combineReducers({
  todos: todosReducer
})

export default root
