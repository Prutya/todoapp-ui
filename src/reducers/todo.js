import { todosConstants } from '../constants'

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

export default todo
