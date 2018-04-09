import { combineReducers } from 'redux'
import todosReducer from './pages/Todos/reducers'
import authReducer from './pages/Auth/reducers'

const app = combineReducers({
  todos: todosReducer,
  auth: authReducer
})

const root = (state, action) => {
  if (action.type === 'AUTH_SIGN_OUT') {
    state = undefined
  }

  return app(state, action)
}

export default root
