import { v4 } from 'node-uuid'
import { todosConstants } from '../constants'

const create = (text) => {
  return {
    type: todosConstants.CREATE,
    title: text,
    id: v4()
  }
}

const toggle = (id) => {
  return {
    type: todosConstants.TOGGLE,
    id
  }
}

export const todosActions = {
  create,
  toggle
}
