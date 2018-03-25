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

export const fetchTodos = (groupId) => (dispatch) => {
  // TODO: if (isFetching) return Promise.resolve()

  dispatch({
    type: 'TODOS_FETCH_REQUEST',
    groupId
    // TODO: pagination?
  })

  return api.fetchTodos(groupId).then(response => {
    dispatch({
      type: 'TODOS_FETCH_SUCCESS',
      groupId,
      response
    })
  })
}

export const toggleTodo = (id) => (dispatch) => {
  dispatch({
    type: 'TODOS_TOGGLE_REQUEST',
    id
  })

  return api.toggleTodo(id).then(response => {
    dispatch({
      type: 'TODOS_TOGGLE_SUCCESS',
      id,
      response
    })
  })
}
