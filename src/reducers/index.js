import { combineReducers } from 'redux'

const groups = (state = [], action) => {
  switch (action.type) {
    case 'GROUPS_FETCH_SUCCESS':
      return action.response
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'TODOS_FETCH_SUCCESS':
      return action.response
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
  groups,
  todos,
  isFetchingGroups,
  isFetchingTodos,
  currentGroupId
})
