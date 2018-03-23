import { normalize } from 'normalizr'
import * as schema from './schema'
import { todosConstants } from '../constants'
import { getIsFetching } from '../reducers'
import * as api from '../api'

export const createTodo = (title) => (dispatch) => (
  api.createTodo(title).then(response => {
    dispatch({
      type: todosConstants.CREATE_SUCCESS,
      response: normalize(response, schema.todo),
    })
  })
)

export const toggleTodo = (id) => (dispatch) => (
  api.toggleTodo(id).then(response => {
    dispatch({
      type: todosConstants.TOGGLE_SUCCESS,
      response: normalize(response, schema.todo),
    })
  })
)

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
        response: normalize(response, schema.todos),
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
