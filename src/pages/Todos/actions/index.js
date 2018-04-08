import { normalize } from 'normalizr'
import * as api from 'api'
import * as schema from './schema'

export const fetchGroups = (token, history, groupFilter) => (dispatch) => {
  const groupFilterInt = parseInt(groupFilter)

  dispatch({
    type: 'GROUPS_FETCH_REQUEST'
  })

  api.fetchGroups(token).then(
    response => {
      const normalizedResponse = normalize(response.todoGroups, schema.groups)
      const lastGroupId = normalizedResponse.result[0]
      const groupPresent = normalizedResponse.entities.todoGroups[groupFilterInt]

      dispatch({
        type: 'GROUPS_FETCH_SUCCESS',
        response: normalizedResponse
      })

      if (groupFilterInt && groupPresent) {
        selectGroup(token, groupFilterInt, history)(dispatch)
      } else if (lastGroupId) {
        selectGroup(token, lastGroupId, history)(dispatch)
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

export const selectGroup = (token, id, history) => (dispatch) => {
  dispatch({
    type: 'GROUPS_SELECT',
    id
  })

  history.push(id ? `/todo-groups/${id}` : 'todo-groups')

  fetchTodos(token, id)(dispatch)
}

export const fetchTodos = (token, groupId) => (dispatch) => {
  dispatch({
    type: 'TODOS_FETCH_REQUEST',
    groupId
  })

  api.fetchTodos(token, groupId).then(
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

export const toggleTodo = (token, id) => (dispatch) => {
  dispatch({
    type: 'TODOS_TOGGLE_REQUEST',
    id
  })

  api.toggleTodo(token, id).then(
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

export const createTodo = (token, groupId, title) => (dispatch) => {
  if (!/\S/.test(title)) {
    return Promise.resolve()
  }

  dispatch({
    type: 'TODOS_CREATE_REQUEST',
    groupId,
    title
  })

  api.createTodo(token, groupId, title).then(
    response => {
      dispatch({
        type: 'TODOS_CREATE_SUCCESS',
        groupId,
        response: normalize(response.todo, schema.todo)
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
