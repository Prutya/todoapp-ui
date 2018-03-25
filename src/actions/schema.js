import { schema } from 'normalizr'

export const group = new schema.Entity('todo_group')
export const groups = new schema.Array(group)

export const todo = new schema.Entity('todo')
export const todos = new schema.Array(todo)
