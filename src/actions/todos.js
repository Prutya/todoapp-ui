import { v4 } from 'node-uuid'
import { todosConstants } from '../constants'

export const createTodo = (text) => {
  return {
    type: todosConstants.CREATE,
    title: text,
    id: v4(),
  }
}

export const toggleTodo = (id) => {
  return {
    type: todosConstants.TOGGLE,
    id,
  }
}

export const receiveTodos = (filter, response) => {
  return {
    type: todosConstants.RECEIVE,
    filter,
    response,
  }
}
