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

const isAuthenticating = (state = false, action) => {
  switch (action.type) {
    case 'AUTH_SIGN_IN_REQUEST':
      return true
    case 'AUTH_SIGN_IN_SUCCESS':
    case 'AUTH_SIGN_IN_ERROR':
      return false
    default:
      return state
  }
}

const auth = combineReducers({
  user,
  isAuthenticating
})

export default auth
