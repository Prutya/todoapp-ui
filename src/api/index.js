const apiHost = process.env.REACT_APP_HOST_API
const groupsEndpoint = `${apiHost}/api/v1/todo_groups`
const todosEndpoint = `${apiHost}/api/v1/todos`

const argsFetch = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}

const argsSend = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const fetchGroups = () => (
  fetch(groupsEndpoint, argsFetch)
    .then(response => response.json())
)

export const fetchTodos = (groupId) => (
  fetch(`${groupsEndpoint}/${groupId}/todos`, argsFetch)
    .then(response => response.json())
)

export const createTodo = (groupId, title) => (
  fetch(`${groupsEndpoint}/${groupId}/todos`, {
    ...argsSend,
    body: JSON.stringify({
      todo: {
        title
      }
    })
  }).then(response => response.json())
)

export const toggleTodo = (id) => (
  fetch(`${todosEndpoint}/${id}`, {
    ...argsSend,
    method: 'PATCH'
  }).then(response => response.json())
)
