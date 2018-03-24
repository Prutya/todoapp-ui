import * as api from '../api'

export const selectGroup = (id) => (dispatch) => {
  // TODO: if (isFetching) return Promise.resolve()

  dispatch({
    type: 'TODOS_INDEX_REQUEST',
    id
    // TODO: pagination?
  })

  return api.fetchTodos(id).then(response => {
    dispatch({
      type: 'TODOS_INDEX_SUCCESS',
      id,
      response
    })
  })
}
