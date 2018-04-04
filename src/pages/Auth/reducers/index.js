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

const auth = combineReducers({
  isAuthenticating
})

export default auth
