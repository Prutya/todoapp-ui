import axios from 'axios'

const groupsEndpoint = `${process.env.TODOAPP_HOST_API}/api/v1/todo_groups`
const todosEndpoint = `${process.env.TODOAPP_HOST_API}/api/v1/todos`

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
