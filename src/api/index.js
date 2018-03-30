const apiHost = process.env.REACT_APP_HOST_API

const groupsEndpoint = `${apiHost}/api/v1/todo_groups`
const todosEndpoint  = `${apiHost}/api/v1/todos`

const optionsGet = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}

const optionsPost = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

const optionsPatch = {
  ...optionsPost,
  method: 'PATCH'
}

export const fetchGroups = () => (
  fetch(groupsEndpoint, optionsGet)
    .then(response => response.json())
)

export const fetchTodos = (groupId) => (
  fetch(`${groupsEndpoint}/${groupId}/todos`, optionsGet)
    .then(response => response.json())
)

export const createTodo = (groupId, title) => {
  const options = {
    ...optionsPost,
    body: JSON.stringify({
      todo: {
        title
      }
    })
  }

  return fetch(`${groupsEndpoint}/${groupId}/todos`, options)
    .then(response => response.json())
}

export const toggleTodo = (id) => (
  fetch(`${todosEndpoint}/${id}`, optionsPatch)
    .then(response => response.json())
)
