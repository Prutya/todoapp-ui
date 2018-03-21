import { todosConstants } from '../constants'

const todo = (state, action) => {
  switch (action.type) {
    case todosConstants.CREATE:
      return {
        id: action.id,
        text: action.text,
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

export const todos = (state = [], action) => {
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
