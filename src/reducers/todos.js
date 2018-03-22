import { todosConstants, visibilityFilterConstants } from '../constants'

const todo = (state, action) => {
  switch (action.type) {
    case todosConstants.CREATE:
      return {
        id: action.id,
        title: action.title,
        completed: false
      }
    case todosConstants.TOGGLE:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case todosConstants.CREATE:
      return [
        ...state,
        todo(undefined, action)
      ]
    case todosConstants.TOGGLE:
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

export default todos

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilterConstants.SHOW_ALL:
      return todos
    case visibilityFilterConstants.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case visibilityFilterConstants.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}
