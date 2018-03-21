import { todosConstants } from '../constants'

let todosCounter = 0
const create = (text) => {
  return {
    type: todosConstants.CREATE,
    title: text,
    id: todosCounter++
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
