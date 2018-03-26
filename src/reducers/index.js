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
    default:
      return state
  }
}

const todoIds = (state = [], action) => {
  switch (action.type) {
    case 'TODOS_FETCH_SUCCESS':
      return action.response.result
    default:
      return state
  }
}

const todosById = (state = {}, action) => {
  switch (action.type) {
    case 'TODOS_FETCH_SUCCESS':
      return action.response.entities.todos || {}
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
    case 'TODOS_FETCH_SUCCESS':
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

export const todoApp = combineReducers({
  groupIds,
  groupsById,
  todoIds,
  todosById,
  isFetchingGroups,
  isFetchingTodos,
  currentGroupId
})
