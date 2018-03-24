import { combineReducers } from 'redux'

const groups = (state = [], action) => {
  switch (action.type) {
    case 'GROUPS_FETCH_SUCCESS':
      return action.response
    default:
      return state
  }
}

const isFetchingGroups = (state = true, action) => {
  switch (action.type) {
    case 'GROUPS_FETCH_REQUEST':
      return true
    case 'GROUPS_FETCH_SUCCESS':
      return false
    case 'GROUPS_FETCH_ERROR':
      return false
    default:
      return state
  }
}

export default combineReducers({
  groups,
  isFetchingGroups
})
