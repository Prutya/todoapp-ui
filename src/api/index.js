import { host, options } from './utils'

const groupsEndpoint = `${host}/api/v1/todo_groups`
const todosEndpoint = `${host}/api/v1/todos`
const authEndpoint = `${host}/api/v1/user_token`

const insertAuthHeader = (options, token) => ({
  ...options,
  headers: {
    ...(options.headers || {}),
    'Authorization': `Bearer ${token}`
  }
})

export const fetchGroups = (token) => (
  fetch(groupsEndpoint, insertAuthHeader(options.get, token))
    .then(response => response.json())
)

export const createGroup = (token, title) => {
  const reqOptions = {
    ...options.post,
    body: JSON.stringify({ todoGroup: { title } })
  }

  return fetch(groupsEndpoint, insertAuthHeader(reqOptions, token))
    .then(response => response.json())
}

export const fetchTodos = (token, groupId) => (
  fetch(`${groupsEndpoint}/${groupId}/todos`, insertAuthHeader(options.get, token))
    .then(response => response.json())
)

export const createTodo = (token, groupId, title) => {
  const reqOptions = {
    ...options.post,
    body: JSON.stringify({ todo: { title } })
  }

  return fetch(`${groupsEndpoint}/${groupId}/todos`, insertAuthHeader(reqOptions, token))
    .then(response => response.json())
}

export const toggleTodo = (token, todo) => {
  const { id, completed } = todo

  const reqOptions = {
    ...options.patch,
    body: JSON.stringify({ todo: { completed: !completed } })
  }

  return fetch(`${todosEndpoint}/${id}`, insertAuthHeader(reqOptions, token))
    .then(response => response.json())
}

export const destroyTodo = (token, id) => (
  fetch(`${todosEndpoint}/${id}`, insertAuthHeader(options.destroy, token))
)

export const signIn = (login, password) => {
  const reqOptions = {
    ...options.post,
    body: JSON.stringify({ auth: { login, password } })
  }

  return fetch(authEndpoint, reqOptions)
    .then(response => response.json())
}
