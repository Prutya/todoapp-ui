import { createSelector } from 'reselect'

export const allGroups = createSelector(
  state => state.todos.groups,
  groups => groups.ids.map(id => groups.byId[id])
)

export const visibleTodos = createSelector(
  state => state.todos,
  scope => scope.todos.ids
    .map(id => scope.todos.byId[id])
    .filter(todo => todo.todoGroupId === scope.groups.idCurrent)
)
