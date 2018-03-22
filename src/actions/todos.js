import { todosConstants } from '../constants'
import { getIsFetching } from '../reducers'
import * as api from '../api'

export const createTodo = (title) => (dispatch) => (
  api.createTodo(title).then(response => {
    dispatch({
      type: todosConstants.CREATE_SUCCESS,
      response
    })
  })
)

export const toggleTodo = (id) => ({
  type: todosConstants.TOGGLE,
  id,
})

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }

  dispatch({
    type: todosConstants.FETCH_REQUEST,
    filter,
  })

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: todosConstants.FETCH_SUCCESS,
        filter,
        response,
      })
    },
    error => {
      dispatch({
        type: todosConstants.FETCH_ERROR,
        filter,
        message: error.message || 'Something went wrong.'
      })
    }
  )
}
