import { combineReducers } from 'redux'

const user = (state = null, action) => {
  switch (action.type) {
    case 'AUTH_SIGN_IN_SUCCESS':
      return action.response
    case 'AUTH_SIGN_OUT_SUCCESS':
      return null
    default:
      return state
  }
}

const auth = combineReducers({
  user
})

export default auth
