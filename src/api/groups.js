import axios from 'axios'

const groupsEndpoint = `${__API__}/api/v1/todo_groups`

const defaultArgs = {
  headers: {
    'Accept': 'application/json'
  }
}

export const fetchGroups = () => (
  axios.get(groupsEndpoint, defaultArgs)
    .then(response => response.data.todo_groups)
)
