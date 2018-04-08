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

      localStorage.setItem('jwt', response.jwt)

      history.push(redirectPath)
    })
}
