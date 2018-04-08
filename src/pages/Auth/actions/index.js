import { set as setToken } from 'services/auth'
import { signIn as apiSignIn } from 'api'

export const signIn = (history, name, pass, redirectPath = '/todo-groups') => (dispatch) => {
  dispatch({
    type: 'AUTH_SIGN_IN_REQUEST'
  })

  return apiSignIn(name, pass)
    .then(response => {
      dispatch({
        type: 'AUTH_SIGN_IN_SUCCESS',
        response
      })

      setToken(response.jwt)

      history.push(redirectPath)
    })
}
