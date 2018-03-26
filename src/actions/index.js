import { normalize } from 'normalizr'
import * as api from '../api'
import * as schema from './schema'

export const fetchGroups = () => (dispatch) => {
  dispatch({
    type: 'GROUPS_FETCH_REQUEST'
  })

  return api.fetchGroups()
    .then(response => {
      const normalizedResponse = normalize(response, schema.groups)
      const lastGroupId = normalizedResponse.result[0]

      dispatch({
        type: 'GROUPS_FETCH_SUCCESS',
        response: normalize(response, schema.groups)
      })

      if (!!lastGroupId) {
        fetchTodos(lastGroupId)(dispatch)
      }
    })
}

export const fetchTodos = (groupId) => (dispatch) => {
  dispatch({
    type: 'TODOS_FETCH_REQUEST',
    groupId
  })

  return api.fetchTodos(groupId).then(response => {
    dispatch({
      type: 'TODOS_FETCH_SUCCESS',
      groupId,
      response: normalize(response, schema.todos)
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
      response: normalize(response, schema.todo)
    })
  })
}

export const createTodo = (groupId, title) => (dispatch) => {
  if (!/\S/.test(title)) {
    return Promise.resolve()
  }

  dispatch({
    type: 'TODOS_CREATE_REQUEST',
    groupId,
    title
  })

  return api.createTodo(groupId, title).then(response => {
    dispatch({
      type: 'TODOS_CREATE_SUCCESS',
      groupId,
      response: normalize(response, schema.todo),
    })
  })
}
