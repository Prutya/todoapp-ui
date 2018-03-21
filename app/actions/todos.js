import { todosConstants } from '../constants'

let todosCounter = 0
const create = (text) => {
  return {
    type: todosConstants.CREATE,
    title: text,
    id: todosCounter++
  }
}

export const todosActions = {
  create
}
