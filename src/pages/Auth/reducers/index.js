import { combineReducers } from 'redux'

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

const token = (state = null, action) => {
  switch (action.type) {
    case 'AUTH_SIGN_OUT':
      return null
    case 'AUTH_ALREADY_SIGNED_IN':
      return action.jwt
    case 'AUTH_SIGN_IN_SUCCESS':
      return action.response.jwt
    default:
      return state
  }
}

const auth = combineReducers({
  isAuthenticating,
  token
})

export default auth
