import { schema } from 'normalizr'

export const group = new schema.Entity('todoGroups')
export const groups = new schema.Array(group)

export const todo = new schema.Entity('todos')
export const todos = new schema.Array(todo)
