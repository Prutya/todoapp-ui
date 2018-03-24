import * as api from '../api'

export const fetchGroups = () => (dispatch) => {
  // TODO: if (isFetching) return Promise.resolve()

  dispatch({
    type: 'GROUPS_FETCH_REQUEST'
    // TODO: pagination?
  })

  return api.fetchGroups().then(response => {
    dispatch({
      type: 'GROUPS_FETCH_SUCCESS',
      response
    })
  })
}
