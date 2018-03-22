import { v4 } from 'node-uuid'
import { todosConstants } from '../constants'
import * as api from '../api'

export const requestTodos = (filter) => ({
  type: todosConstants.REQUEST,
  filter,
})

export const createTodo = (text) => ({
  type: todosConstants.CREATE,
  title: text,
  id: v4(),
})

export const toggleTodo = (id) => ({
  type: todosConstants.TOGGLE,
  id,
})

const receiveTodos = (filter, response) => ({
  type: todosConstants.RECEIVE,
  filter,
  response,
})

export const fetchTodos = (filter) => (
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  )
)
