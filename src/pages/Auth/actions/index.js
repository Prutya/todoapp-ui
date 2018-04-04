import { setUser } from 'services/auth'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const signIn = (history, name, pass, redirectPath = '/todo-groups') => (dispatch) => {
  dispatch({
    type: 'AUTH_SIGN_IN_REQUEST'
  })

  sleep(300).then(response => {
    dispatch({
      type: 'AUTH_SIGN_IN_SUCCESS'
    })

    setUser({
      name: 'Anton'
    })
  })
}
