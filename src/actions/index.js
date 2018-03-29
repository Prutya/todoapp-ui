import { normalize } from 'normalizr'
import * as api from '../api'
import * as schema from './schema'

export const fetchGroups = () => (dispatch) => {
  dispatch({
    type: 'GROUPS_FETCH_REQUEST'
  })

  api.fetchGroups().then(
    response => {
      const normalizedResponse = normalize(response.todoGroups, schema.groups)
      const lastGroupId = normalizedResponse.result[0]

      dispatch({
        type: 'GROUPS_FETCH_SUCCESS',
        response: normalizedResponse
      })

      if (!!lastGroupId) {
        selectGroup(lastGroupId)(dispatch)
      }
    },

    error => {
      dispatch({
        type: 'GROUPS_FETCH_ERROR',
        message: error.message
      })
    }
  )
}

export const selectGroup = (id) => (dispatch) => {
  dispatch({
    type: 'GROUPS_SELECT',
    id
  })

  fetchTodos(id)(dispatch)
}

export const fetchTodos = (groupId) => (dispatch) => {
  dispatch({
    type: 'TODOS_FETCH_REQUEST',
    groupId
  })

  api.fetchTodos(groupId).then(
    response => {
      dispatch({
        type: 'TODOS_FETCH_SUCCESS',
        groupId,
        response: normalize(response.todos, schema.todos)
      })
    },

    error => {
      dispatch({
        type: 'TODOS_FETCH_ERROR',
        message: error.message
      })
    }
  )
}

export const toggleTodo = (id) => (dispatch) => {
  dispatch({
    type: 'TODOS_TOGGLE_REQUEST',
    id
  })

  api.toggleTodo(id).then(
    response => {
      dispatch({
        type: 'TODOS_TOGGLE_SUCCESS',
        id,
        response: normalize(response.todo, schema.todo)
      })
    },

    error => {
      dispatch({
        type: 'TODOS_TOGGLE_ERROR',
        id,
        message: error.message
      })
    }
  )
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

  api.createTodo(groupId, title).then(
    response => {
      dispatch({
        type: 'TODOS_CREATE_SUCCESS',
        groupId,
        response: normalize(response.todo, schema.todo),
      })
    },

    error => {
      dispatch({
        type: 'TODOS_CREATE_ERROR',
        groupId,
        message: error.message
      })
    }
  )
}
