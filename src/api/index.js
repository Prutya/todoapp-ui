import axios from 'axios'

const groupsEndpoint = `${__API__}/api/v1/todo_groups`
const todosEndpoint = `${__API__}/api/v1/todos`

const defaultArgs = {
  headers: {
    'Accept': 'application/json'
  }
}

export const fetchGroups = () => (
  axios.get(groupsEndpoint, defaultArgs)
    .then(response => response.data.todo_groups)
)

export const fetchTodos = (groupId) => (
  axios.get(`${groupsEndpoint}/${groupId}/todos`, defaultArgs)
    .then(response => response.data.todos)
)

export const createTodo = (groupId, title) => (
  axios.post(`${groupsEndpoint}/${groupId}/todos`, { title }, defaultArgs)
    .then(response => response.data.todo)
)

export const toggleTodo = (id) => (
  axios.patch(`${todosEndpoint}/${id}`, {}, defaultArgs)
    .then(response => response.data.todo)
)
