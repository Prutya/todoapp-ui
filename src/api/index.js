import { v4 } from 'node-uuid'
import { visibilityFilterConstants } from '../constants'

const fakeDatabase = {
  todos: [{
    id: v4(),
    title: 'Learn Ruby',
    completed: true,
  }, {
    id: v4(),
    title: 'Learn C#',
    completed: true,
  }, {
    id: v4(),
    title: 'Learn Java',
    completed: false,
  }],
}

const delay = (ms) => (
  new Promise(resolve => setTimeout(resolve, ms))
)

export const fetchTodos = (filter) => (
  delay(500).then(() => {
    switch (filter) {
      case visibilityFilterConstants.SHOW_ALL:
        return fakeDatabase.todos
      case visibilityFilterConstants.SHOW_ACTIVE:
        return fakeDatabase.todos.filter(t => !t.completed)
      case visibilityFilterConstants.SHOW_COMPLETED:
        return fakeDatabase.todos.filter(t => t.completed)
      default:
        throw new Error(`Unknown filter: '${filter}'`)
    }
  })
)
