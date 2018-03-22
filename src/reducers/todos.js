import { combineReducers } from 'redux'
import { todosConstants, visibilityFilterConstants } from '../constants'
import todo from './todo'

const byId = (state = {}, action) => {
  switch(action.type) {
    case todosConstants.CREATE:
    case todosConstants.TOGGLE:
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch(action.type) {
    case todosConstants.CREATE:
      return [...state, action.id]
    default:
      return state
  }
}

const todos = combineReducers({
  byId,
  allIds
})

export default todos

const getAllTodos = (state) => {
  return state.allIds.map((id) => {
    return state.byId[id]
  })
}

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state)

  switch (filter) {
    case visibilityFilterConstants.SHOW_ALL:
      return allTodos
    case visibilityFilterConstants.SHOW_COMPLETED:
      return allTodos.filter(t => t.completed)
    case visibilityFilterConstants.SHOW_ACTIVE:
      return allTodos.filter(t => !t.completed)
    default:
      return allTodos
  }
}
