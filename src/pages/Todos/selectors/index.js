import { createSelector } from 'reselect'

export const allGroups = createSelector(
  state => state.todos.groups,
  groups => groups.ids.map(id => groups.byId[id])
)
