import { combineReducers } from 'redux'
import { todosConstants } from '../constants'

const createList = (filter) => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state
    }

    switch(action.type) {
      case todosConstants.RECEIVE:
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
      case todosConstants.REQUEST:
        return true
      case todosConstants.RECEIVE:
        return false
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
  })
}

export default createList

export const getIds = (state) => state.ids
export const getIsFetching = (state) => state.isFetching
