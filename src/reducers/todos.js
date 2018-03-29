import { combineReducers } from 'redux'

const ids = (state = [], action) => {
  switch (action.type) {
    case 'TODOS_FETCH_SUCCESS':
      return [
        ...new Set([
          ...state,
          ...action.response.result,
        ])
      ]
    case 'TODOS_CREATE_SUCCESS':
      return [
        ...state,
        action.response.result
      ]
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  let id, todo

  switch (action.type) {
    case 'TODOS_FETCH_SUCCESS':
      return {
        ...state,
        ...action.response.entities.todos
      }
    case 'TODOS_CREATE_SUCCESS':
      id = action.response.result
      todo = action.response.entities.todos[id]

      return {
        ...state,
        [id]: todo
      }
    case 'TODOS_TOGGLE_SUCCESS':
      id = action.response.result
      todo = action.response.entities.todos[id]
      const { completed } = todo

      return {
        ...state,
        [id]: {
          ...state[id],
          completed
        }
      }
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
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

const errorMessage = (state = null, action) => {
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

const todos = combineReducers({
  ids,
  byId,
  isFetching,
  errorMessage
})

export default todos
