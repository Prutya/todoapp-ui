import { combineReducers } from 'redux'
import { todosConstants } from '../constants'

const createList = (filter) => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state
    }

    switch(action.type) {
      case todosConstants.FETCH_SUCCESS:
        return action.response.map(todo => todo.id)
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }

    switch (action.type) {
      case todosConstants.FETCH_REQUEST:
        return true
      case todosConstants.FETCH_SUCCESS:
        return false
      case todosConstants.FETCH_ERROR:
        return false
      default:
        return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state
    }

    switch (action.type) {
      case todosConstants.FETCH_ERROR:
        return action.message
      case todosConstants.FETCH_REQUEST:
      case todosConstants.FETCH_SUCCESS:
        return null
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  })
}

export default createList

export const getIds = (state) => state.ids
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage
