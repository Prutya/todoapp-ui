import { combineReducers } from 'redux'

const ids = (state = [], action) => {
  switch (action.type) {
    case 'GROUPS_FETCH_SUCCESS':
      return [
        ...new Set([
          ...state,
          ...action.response.result
        ])
      ]
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'GROUPS_FETCH_SUCCESS':
      return {
        ...state,
        ...action.response.entities.todoGroups
      }
    default:
      return state
  }
}

const isFetching = (state = true, action) => {
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

const idCurrent = (state = null, action) => {
  switch (action.type) {
    case 'GROUPS_SELECT':
      return action.id
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
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

const groups = combineReducers({
  ids,
  byId,
  isFetching,
  idCurrent,
  errorMessage
})

export default groups
