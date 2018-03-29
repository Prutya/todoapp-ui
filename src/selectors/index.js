import { createSelector } from 'reselect'

export const allGroups = createSelector(
  state => state.groups,
  groups => groups.ids.map(id => groups.byId[id])
)
