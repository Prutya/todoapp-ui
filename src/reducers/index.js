import { combineReducers } from 'redux'

const groupIds = (state = [], action) => {
  switch (action.type) {
    case 'GROUPS_FETCH_SUCCESS':
      return action.response.result
    default:
      return state
  }
}

const groupsById = (state = {}, action) => {
  switch (action.type) {
    case 'GROUPS_FETCH_SUCCESS':
      return action.response.entities.todoGroups || {}
    case 'TODOS_FETCH_SUCCESS':
      return {
        ...state,
        [action.groupId]: {
          ...state[action.groupId],
          todoIds: action.response.result
        }
      }
    case 'TODOS_CREATE_SUCCESS':
      return {
        ...state,
        [action.groupId]: {
          ...state[action.groupId],
          todoIds: [
            action.response.result,
            ...state[action.groupId].todoIds
          ]
        }
      }
    default:
      return state
  }
}

const todosById = (state = {}, action) => {
  switch (action.type) {
    case 'TODOS_FETCH_SUCCESS':
      return action.response.entities.todos || {}
    case 'TODOS_CREATE_SUCCESS':
    case 'TODOS_TOGGLE_SUCCESS':
      const id   = action.response.result
      const todo = action.response.entities.todos[id]
      return {
        ...state,
        [id]: todo
      }
    default:
      return state
  }
}

const currentGroupId = (state = null, action) => {
  switch (action.type) {
    case 'TODOS_FETCH_REQUEST':
      return action.groupId
    default:
      return state
  }
}

const isFetchingGroups = (state = true, action) => {
  switch (action.type) {
    case 'GROUPS_FETCH_REQUEST':
      return true
    case 'GROUPS_FETCH_SUCCESS':
    case 'GROUPS_FETCH_ERROR':
      return false
    default:
      return state
  }
}

const isFetchingTodos = (state = false, action) => {
  switch (action.type) {
    case 'TODOS_FETCH_REQUEST':
      return true
    case 'TODOS_FETCH_SUCCESS':
    case 'TODOS_FETCH_ERROR':
      return false
    default:
      return state
  }
}

const groupsErrorMessage = (state = null, action) => {
  switch (action.type) {
    case 'GROUPS_FETCH_REQUEST':
    case 'GROUPS_FETCH_SUCCESS':
      return null
    case 'GROUPS_FETCH_ERROR':
      return action.message
    default:
      return state
  }
}

const todosErrorMessage = (state = null, action) => {
  switch (action.type) {
    case 'TODOS_FETCH_REQUEST':
    case 'TODOS_FETCH_SUCCESS':
      return null
    case 'TODOS_FETCH_ERROR':
      return action.message
    default:
      return state
  }
}

export const todoApp = combineReducers({
  groupIds,
  groupsById,
  todosById,
  isFetchingGroups,
  isFetchingTodos,
  currentGroupId,
  groupsErrorMessage,
  todosErrorMessage
})
