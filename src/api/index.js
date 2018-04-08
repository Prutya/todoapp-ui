import { host, options } from './utils'

const groupsEndpoint = `${host}/api/v1/todo_groups`
const todosEndpoint = `${host}/api/v1/todos`
const authEndpoint = `${host}/api/v1/user_token`

export const fetchGroups = () => (
  fetch(groupsEndpoint, options.get)
    .then(response => response.json())
)

export const fetchTodos = (groupId) => (
  fetch(`${groupsEndpoint}/${groupId}/todos`, options.get)
    .then(response => response.json())
)

export const createTodo = (groupId, title) => {
  const reqOptions = {
    ...options.post,
    body: JSON.stringify({
      todo: {
        title
      }
    })
  }

  return fetch(`${groupsEndpoint}/${groupId}/todos`, reqOptions)
    .then(response => response.json())
}

export const toggleTodo = (id) => (
  fetch(`${todosEndpoint}/${id}`, options.patch)
    .then(response => response.json())
)

export const signIn = (login, password) => {
  const reqOptions = {
    ...options.post,
    body: JSON.stringify({
      auth: { login, password }
    })
  }

  return fetch(authEndpoint, reqOptions)
    .then(response => response.json())
}
