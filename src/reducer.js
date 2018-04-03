import { combineReducers } from 'redux'
import todosReducer from './pages/Todos/reducers'
import authReducer from './pages/Auth/reducers'

const root = combineReducers({
  todos: todosReducer,
  auth: authReducer
})

export default root
