import { todosConstants } from '../constants'

const byId = (state = {}, action) => {
  switch(action.type) {
    case todosConstants.FETCH_SUCCESS:
      const nextState = { ...state }
      action.response.forEach(todo => {
        nextState[todo.id] = todo
      })
      return nextState
    case todosConstants.CREATE_SUCCESS:
      return {
        ...state,
        [action.response.id]: action.response
      }
    default:
      return state
  }
}

export default byId

export const getTodo = (state, id) => state[id]
