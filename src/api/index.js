import axios from 'axios'

const apiHost = process.env.REACT_APP_HOST_API
const groupsEndpoint = `${apiHost}/api/v1/todo_groups`
const todosEndpoint = `${apiHost}/api/v1/todos`

const defaultArgs = {
  headers: {
    'Accept': 'application/json'
  }
}

export const fetchGroups = () => (
  axios.get(groupsEndpoint, defaultArgs)
)

export const fetchTodos = (groupId) => (
  axios.get(`${groupsEndpoint}/${groupId}/todos`, defaultArgs)
)

export const createTodo = (groupId, title) => (
  axios.post(`${groupsEndpoint}/${groupId}/todos`, { title }, defaultArgs)
)

export const toggleTodo = (id) => (
  axios.patch(`${todosEndpoint}/${id}`, {}, defaultArgs)
)
