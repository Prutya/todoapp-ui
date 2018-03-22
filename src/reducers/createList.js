import { todosConstants } from '../constants'

const createList = (filter) => {
  return (state = [], action) => {
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
}

export default createList

export const getIds = (state) => state
