import axios from 'axios'

const hostUrl = __API__
const todosApiEndpoint = `${__API__}/api/v1/todos`

export const fetchTodos = (filter) => (
  axios.get(todosApiEndpoint, {
    params: { filter },
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.data.todos)
)

export const createTodo = (title) => (
  axios.post(todosApiEndpoint, { title }, {
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.data.todo)
)

export const toggleTodo = (id) => (
  axios.patch(`${todosApiEndpoint}/${id}`, {}, {
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => response.data.todo)
)
