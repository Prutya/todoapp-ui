const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const signIn = (history, name, pass, redirectPath = '/todo-groups') => (dispatch) => {
  dispatch({
    type: 'AUTH_SIGN_IN_REQUEST'
  })

  sleep(300).then(() => {
    dispatch({
      type: 'AUTH_SIGN_IN_SUCCESS',
      response: {
        name: 'Anton'
      }
    })

    history.push(redirectPath)
  })
}
