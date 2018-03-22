import { v4 } from 'node-uuid'
import { todosConstants } from '../constants'

const create = (text) => {
  return {
    type: todosConstants.CREATE,
    title: text,
    id: v4(),
  }
}

const toggle = (id) => {
  return {
    type: todosConstants.TOGGLE,
    id,
  }
}

const receive = (filter, response) => {
  return {
    type: todosConstants.RECEIVE,
    filter,
    response,
  }
}

export const todosActions = {
  create,
  toggle,
  receive
}
